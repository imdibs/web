import { ImageResponse } from "next/og";

export const alt = "Dibs — the AI-native marketplace you can text";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f7f4ee", color: "#0a0a0a", padding: "72px 80px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", width: 76, height: 76, borderRadius: 38, background: "#0a0a0a", color: "white", alignItems: "center", justifyContent: "center", fontSize: 38, fontWeight: 700 }}>D</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.02, letterSpacing: "-4px", fontWeight: 700 }}>
          <span>The marketplace</span>
          <span>you can text.</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#565451" }}>Buy and sell through Dibs.</div>
      </div>
    </div>,
    size,
  );
}