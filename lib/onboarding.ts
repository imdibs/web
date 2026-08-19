export const ONBOARDING_TIMEOUT_MS = 12_000;

export type OnboardingResult =
  | { status: "accepted" }
  | { status: "already-onboarded" };

export class OnboardingError extends Error {
  constructor(
    public readonly code:
      | "invalid-phone"
      | "rate-limited"
      | "unavailable"
      | "timeout"
      | "unexpected",
    public readonly definitive = false,
  ) {
    super(code);
    this.name = "OnboardingError";
  }
}

function endpointFor(baseUrl: string | undefined) {
  const trimmed = baseUrl?.trim();

  if (!trimmed) {
    throw new OnboardingError("unavailable");
  }

  try {
    return `${new URL(trimmed).toString().replace(/\/$/, "")}/api/onboarding`;
  } catch {
    throw new OnboardingError("unavailable");
  }
}

export async function submitOnboarding(
  phone: string,
  requestId: string,
  options: {
    apiUrl?: string;
    fetchImpl?: typeof fetch;
    timeoutMs?: number;
  } = {},
): Promise<OnboardingResult> {
  const controller = new AbortController();
  const timeout = setTimeout(
    () => controller.abort(),
    options.timeoutMs ?? ONBOARDING_TIMEOUT_MS,
  );

  try {
    const response = await (options.fetchImpl ?? fetch)(
      endpointFor(options.apiUrl ?? process.env.NEXT_PUBLIC_DIBS_API_URL),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, source: "website", requestId }),
        signal: controller.signal,
      },
    );

    if (response.status === 409) {
      return { status: "already-onboarded" };
    }

    if (response.status === 400 || response.status === 422) {
      throw new OnboardingError("invalid-phone", true);
    }

    if (response.status === 429) {
      throw new OnboardingError("rate-limited", true);
    }

    if (!response.ok) {
      throw new OnboardingError("unavailable", true);
    }

    let data: unknown;
    try {
      data = await response.json();
    } catch {
      throw new OnboardingError("unexpected");
    }

    if (
      typeof data !== "object" ||
      data === null ||
      !("accepted" in data) ||
      data.accepted !== true
    ) {
      throw new OnboardingError("unexpected");
    }

    return { status: "accepted" };
  } catch (error) {
    if (error instanceof OnboardingError) {
      throw error;
    }
    if (error instanceof Error && error.name === "AbortError") {
      throw new OnboardingError("timeout");
    }
    throw new OnboardingError("unavailable");
  } finally {
    clearTimeout(timeout);
  }
}

const E164_PHONE = /^\+[1-9][0-9]{7,14}$/;
const PHONE_INPUT = /^\+?[0-9().\-\s]+$/;

export function normalizePhone(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed || value.length > 32 || !PHONE_INPUT.test(trimmed)) return null;

  let parenthesisDepth = 0;
  for (const character of trimmed) {
    if (character === "(") parenthesisDepth += 1;
    if (character === ")") parenthesisDepth -= 1;
    if (parenthesisDepth < 0 || parenthesisDepth > 1) return null;
  }
  if (parenthesisDepth !== 0) return null;

  const digits = trimmed.replace(/\D/g, "");
  const phone = trimmed.startsWith("+")
    ? `+${digits}`
    : digits.startsWith("1") && digits.length === 11
      ? `+${digits}`
      : digits.length === 10
        ? `+1${digits}`
        : null;

  return phone && E164_PHONE.test(phone) ? phone : null;
}

export function looksLikePhone(value: string) {
  return normalizePhone(value) !== null;
}