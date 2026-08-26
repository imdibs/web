import type { SEOPageConfig } from "./types";

const productPages: SEOPageConfig[] = [
  {
    slug: "what-is-dibs", path: "/what-is-dibs", type: "product", published: true,
    title: "What Is Dibs? The AI-Native Marketplace", description: "Dibs is an AI-native marketplace where you can buy and sell by text. Learn how Dibs creates listings, finds items, and connects people.",
    eyebrow: "Meet Dibs", headline: "A marketplace you can text.", subheadline: "Tell Dibs what you want to buy or sell. Dibs handles the marketplace work around it.", image: { hero: "phone", supporting: "marketplace" },
    intro: "Dibs is an AI-native marketplace built around a conversation—not a maze of forms, filters, and inboxes.",
    sections: [
      { title: "Say what you need", body: "Text naturally. Send a photo of something to sell, or describe what you want to find." },
      { title: "Dibs does the legwork", body: "Dibs helps shape listings, surfaces useful matches, and connects interested buyers and sellers." },
      { title: "People make the deal", body: "Dibs is the connection layer. Buyers and sellers still decide whether, when, and how to transact." },
    ],
    faqs: [
      { question: "Is Dibs a marketplace?", answer: "Yes. Dibs is an AI-native marketplace that helps people list items, discover listings, and connect with each other." },
      { question: "Do I use Dibs by text?", answer: "Yes. Dibs is designed so you can start by texting what you want to buy or sell." },
      { question: "Does Dibs buy or own the items?", answer: "No. Unless explicitly stated otherwise, the item belongs to the seller and Dibs helps connect the people involved." },
    ],
    relatedPages: [
      { href: "/how-dibs-works", label: "How Dibs works", description: "See the flow from first text to connection." },
      { href: "/sell-with-dibs", label: "Sell with Dibs", description: "Turn a photo and a few details into a listing." },
      { href: "/buy-with-dibs", label: "Buy with Dibs", description: "Ask for what you want in plain language." },
    ],
    cta: { label: "Text Dibs", heading: "Try the marketplace without the marketplace headache.", body: "Start with one text.", href: "/#hero-phone" },
  },
  {
    slug: "how-dibs-works", path: "/how-dibs-works", type: "product", published: true,
    title: "How Dibs Works for Buyers and Sellers", description: "See how Dibs helps you buy and sell by text—from creating a listing or search to connecting with the right person.",
    eyebrow: "How it works", headline: "Text. Match. Connect.", subheadline: "Dibs turns a simple conversation into the steps a marketplace usually makes you do yourself.", image: { hero: "phone", supporting: "camera" },
    intro: "There is no special syntax. Start with the item, a photo, a budget, a location, or whatever you already know.",
    sections: [
      { title: "1. Tell Dibs", body: "Say what you are selling or looking for. Dibs can ask for the missing details that matter." },
      { title: "2. Let Dibs organize it", body: "For sellers, that means a clearer listing. For buyers, it means a more focused request and relevant discoveries." },
      { title: "3. Connect", body: "When there is interest, Dibs helps buyers and sellers get in touch so they can decide what happens next." },
    ],
    faqs: [
      { question: "Do I need to download an app?", answer: "Dibs is built to work through text messaging. Availability and onboarding may vary while Dibs is in alpha." },
      { question: "Can Dibs set the price for me?", answer: "Dibs can help you think through listing information, but sellers are responsible for choosing their price and describing items truthfully." },
      { question: "Does Dibs complete the payment?", answer: "Dibs currently helps people discover and connect. Buyers and sellers should independently agree on payment and handoff details." },
    ],
    relatedPages: [
      { href: "/what-is-dibs", label: "What is Dibs?", description: "The short version of the product." },
      { href: "/sell-with-dibs", label: "Selling with Dibs", description: "See what Dibs needs from a seller." },
      { href: "/is-dibs-safe", label: "Using Dibs safely", description: "Practical checks before a transaction." },
    ],
    cta: { label: "Text Dibs", heading: "One message is enough to begin.", body: "Tell Dibs what you have in mind.", href: "/#hero-phone" },
  },
  {
    slug: "sell-with-dibs", path: "/sell-with-dibs", type: "product", published: true,
    title: "Sell with Dibs by Text", description: "Sell through Dibs without wrestling with listing forms. Send a photo, share the useful details, and let Dibs help create your listing.",
    eyebrow: "For sellers", headline: "Your camera roll is the new listing form.", subheadline: "Send Dibs a photo. Add what you know. Get help turning it into a listing buyers can understand.", image: { hero: "camera", supporting: "phone" },
    intro: "Good listings still need honest details. Dibs makes collecting and presenting those details feel like a conversation.",
    sections: [
      { title: "Show the item", body: "Start with clear photos that show the full item, its condition, and any flaws." },
      { title: "Answer what matters", body: "Dibs can help gather the model, condition, included accessories, location, and price buyers will ask about." },
      { title: "Meet interested buyers", body: "When someone is interested, Dibs helps make the connection. You stay in control of the sale." },
    ],
    faqs: [
      { question: "What can I sell with Dibs?", answer: "Dibs supports everyday marketplace items, subject to its Terms. You must own the item and be legally allowed to sell it." },
      { question: "Will Dibs write my listing?", answer: "Dibs can help create a useful listing from your photos and details. You remain responsible for checking that it is accurate." },
      { question: "Who chooses the buyer?", answer: "You do. Dibs helps make connections; the seller decides whether to proceed." },
    ],
    relatedPages: [
      { href: "/sell/iphone", label: "Sell an iPhone", description: "The details phone buyers look for." },
      { href: "/sell/camera", label: "Sell a camera", description: "Describe bodies, lenses, and shutter condition." },
      { href: "/how-dibs-works", label: "How Dibs works", description: "Follow the complete marketplace flow." },
    ],
    cta: { label: "Start selling", heading: "Have something sitting around?", body: "Text Dibs a photo and start there.", href: "/#hero-phone" },
  },
  {
    slug: "buy-with-dibs", path: "/buy-with-dibs", type: "product", published: true,
    title: "Buy with Dibs by Text", description: "Tell Dibs what you want to buy, your budget, and where you are. Dibs helps discover relevant listings and connect you with sellers.",
    eyebrow: "For buyers", headline: "Describe it like you would to a friend.", subheadline: "A model, a budget, a neighborhood, a must-have detail—text Dibs what matters and skip the filter maze.", image: { hero: "marketplace", supporting: "phone" },
    intro: "Buying starts with intent, not a category tree. Dibs uses the details in your request to help narrow the marketplace.",
    sections: [
      { title: "Make a useful request", body: "Share the item, budget, area, condition, timing, or any detail that would change your decision." },
      { title: "Review the match", body: "Look closely at the listing, ask questions, and independently verify the details that matter." },
      { title: "Connect with the seller", body: "If it looks right, Dibs helps connect you. You decide whether to make the deal." },
    ],
    faqs: [
      { question: "Can I ask for something very specific?", answer: "Yes. Plain-language details such as model, size, budget, condition, and location help make a request more useful." },
      { question: "Does Dibs guarantee listings?", answer: "No. Buyers should verify that an item exists, matches its description, and is safe to purchase before paying." },
      { question: "Can I buy locally?", answer: "Dibs can help with local discovery where listings are available. Include your city or preferred area in your request." },
    ],
    relatedPages: [
      { href: "/miami-marketplace", label: "Dibs in Miami", description: "Buy and sell locally in Miami." },
      { href: "/is-dibs-safe", label: "Using Dibs safely", description: "Simple precautions for local deals." },
      { href: "/how-dibs-works", label: "How Dibs works", description: "From request to seller connection." },
    ],
    cta: { label: "Start looking", heading: "What are you trying to find?", body: "Text it to Dibs in your own words.", href: "/#hero-phone" },
  },
  {
    slug: "is-dibs-safe", path: "/is-dibs-safe", type: "product", published: true,
    title: "Is Dibs Safe? A Practical Guide", description: "Learn what Dibs does, what buyers and sellers should verify, and practical ways to make local marketplace transactions safer.",
    eyebrow: "Trust & safety", headline: "Good deals still deserve good judgment.", subheadline: "Dibs helps people discover and connect. Buyers and sellers should verify the item, the person, and the transaction.", image: { hero: "phone", supporting: "camera" },
    intro: "No marketplace can remove every risk. Dibs is an intermediary, so the final checks and transaction decisions remain with you.",
    sections: [
      { title: "Check the item", body: "Ask for current photos, confirm important identifiers and condition, and inspect the item before completing a local purchase." },
      { title: "Protect the handoff", body: "Meet in a well-lit public place when appropriate. Tell someone your plan and avoid arrangements that create unnecessary pressure." },
      { title: "Pause when something feels off", body: "Be cautious with unexpected payment requests, urgency, prices that seem implausible, or details that keep changing." },
    ],
    faqs: [
      { question: "Does Dibs verify every item or user?", answer: "Do not assume that Dibs has independently verified an item, seller, buyer, price, or claim unless Dibs explicitly says so." },
      { question: "Should I pay before seeing an item?", answer: "For local transactions, independently assess the risk before sending money. Inspecting an item first can reduce common marketplace risks." },
      { question: "What should sellers disclose?", answer: "Sellers should describe condition truthfully and disclose defects or other facts that could reasonably affect a buyer's decision." },
    ],
    relatedPages: [
      { href: "/how-dibs-works", label: "How Dibs works", description: "Understand Dibs's role in a deal." },
      { href: "/terms", label: "Terms of Service", description: "Read the rules governing Dibs." },
      { href: "/privacy", label: "Privacy Policy", description: "See how Dibs handles information." },
    ],
    cta: { label: "Try Dibs", heading: "Clear information makes better connections.", body: "Start a conversation with Dibs.", href: "/#hero-phone" },
  },
];

const sell = (config: Omit<SEOPageConfig, "type" | "published">): SEOPageConfig => ({ ...config, type: "sell", published: true });

const sellPages: SEOPageConfig[] = [
  sell({ slug: "iphone", path: "/sell/iphone", category: "iphone", title: "Sell Your iPhone with Dibs", description: "Sell your iPhone by text. Dibs helps turn photos and details like model, storage, battery health, and condition into a useful listing.", eyebrow: "Sell your iPhone", headline: "Sell your iPhone without the marketplace headache.", subheadline: "Send the phone. Share the model, storage, and condition. Dibs helps shape a listing buyers can evaluate.", image: { hero: "iphone", supporting: "phone" }, intro: "Phone buyers compare exact details. A precise listing saves repetitive questions and helps the right buyer decide faster.", sections: [
    { title: "How selling works", body: "Photograph the front, back, sides, and screen. Tell Dibs what you know, review the listing, and connect with interested buyers." },
    { title: "What iPhone buyers care about", body: "The exact model matters more than “iPhone.”", items: ["Model and storage capacity", "Battery health and carrier lock status", "Cracks, repairs, and camera or button issues", "Included box, cable, or case"] },
    { title: "How Dibs helps", body: "Dibs can turn scattered details into a readable listing and help surface it to people looking for a phone like yours." },
  ], faqs: [{ question: "Should I erase my iPhone before selling it?", answer: "Yes. Back up what you need, sign out of your accounts, disable Find My, and erase personal data before handing it over." }, { question: "Should I include the IMEI in the public listing?", answer: "Avoid publishing sensitive device identifiers. A serious buyer may want to verify status safely before purchase." }, { question: "Can I sell an iPhone with a cracked screen?", answer: "You can list an imperfect phone if it is legal to sell and you describe the damage clearly with accurate photos." }], relatedPages: [{ href: "/sell-with-dibs", label: "How to sell with Dibs", description: "See the full seller flow." }, { href: "/sell/macbook", label: "Sell a MacBook", description: "Listing another Apple device?" }, { href: "/miami-marketplace", label: "Miami marketplace", description: "Explore selling locally in Miami." }], cta: { label: "Sell your iPhone", heading: "Start with a photo of your iPhone.", body: "Dibs will help with the useful details.", href: "/#hero-phone" } }),
  sell({ slug: "macbook", path: "/sell/macbook", category: "macbook", title: "Sell Your MacBook with Dibs", description: "Sell your MacBook through Dibs. Build a clear listing with the chip, year, memory, storage, battery condition, and visible wear buyers need.", eyebrow: "Sell your MacBook", headline: "Sell your MacBook without the marketplace headache.", subheadline: "The chip, memory, storage, battery, and condition tell the story. Dibs helps put them in one clear listing.", image: { hero: "macbook", supporting: "phone" }, intro: "MacBooks that look alike can have very different specifications and value. Specifics build confidence.", sections: [
    { title: "How selling works", body: "Send photos of the screen, keyboard, ports, case, and About This Mac details. Dibs helps organize the listing and connect interested buyers." },
    { title: "What MacBook buyers care about", body: "Give buyers enough to identify the exact machine.", items: ["Model, year, and screen size", "Apple chip or Intel processor", "Memory and storage", "Battery cycle count and condition", "Charger, repairs, dents, or screen issues"] },
    { title: "How Dibs helps", body: "Dibs keeps the important specs together so the listing is easier to compare and the conversation starts further along." },
  ], faqs: [{ question: "Where do I find my MacBook specifications?", answer: "Use About This Mac and System Information to confirm the model, chip, memory, storage, and battery cycle count." }, { question: "Should I reset a MacBook before selling it?", answer: "Back up your data, sign out of services, remove Activation Lock where applicable, and follow Apple's erase instructions before handoff." }, { question: "Can I list a MacBook with battery wear?", answer: "Yes, if you disclose the battery condition and any service warning accurately." }], relatedPages: [{ href: "/sell/iphone", label: "Sell an iPhone", description: "List another Apple device." }, { href: "/sell-with-dibs", label: "Selling with Dibs", description: "Understand the seller flow." }, { href: "/is-dibs-safe", label: "Marketplace safety", description: "Prepare for a safer handoff." }], cta: { label: "Sell your MacBook", heading: "Show Dibs the MacBook.", body: "Add the specs and build a listing by text.", href: "/#hero-phone" } }),
  sell({ slug: "camera", path: "/sell/camera", category: "camera", title: "Sell Your Camera with Dibs", description: "Sell a camera with a listing that covers the body, lens, shutter count, sensor, accessories, and condition photographers actually ask about.", eyebrow: "Sell your camera", headline: "Sell your camera without the marketplace headache.", subheadline: "Camera buyers want more than megapixels. Dibs helps capture the body, glass, usage, and condition that matter.", image: { hero: "camera", supporting: "phone" }, intro: "A camera listing should make clear exactly what is included and how the equipment has been used.", sections: [
    { title: "How selling works", body: "Photograph the body from several angles, the powered-on screen, lens glass, mount, and included gear. Dibs helps structure the details." },
    { title: "What camera buyers care about", body: "Separate body and lens information so there is no ambiguity.", items: ["Exact body and lens model", "Shutter count when available", "Sensor, glass, autofocus, and stabilization condition", "Batteries, charger, caps, straps, box, and cards", "Dust, fungus, scratches, or prior repairs"] },
    { title: "How Dibs helps", body: "Dibs can organize technical details without burying the condition notes a buyer needs to see." },
  ], faqs: [{ question: "Do I need a shutter count?", answer: "It is useful for many interchangeable-lens cameras when available, but explain if the model does not expose one reliably." }, { question: "Should I sell the lens separately?", answer: "That depends on demand and your preference. Clearly state whether the price covers the body, lens, or complete kit." }, { question: "How should I photograph the glass?", answer: "Use good indirect light and show the front and rear elements clearly without touching them." }], relatedPages: [{ href: "/sell-with-dibs", label: "How selling works", description: "From photo to buyer connection." }, { href: "/sell/macbook", label: "Sell a MacBook", description: "List another technical item." }, { href: "/los-angeles-marketplace", label: "Los Angeles marketplace", description: "Buy and sell locally in Los Angeles." }], cta: { label: "Sell your camera", heading: "Send Dibs a clear camera photo.", body: "Then add the body, lens, and condition.", href: "/#hero-phone" } }),
  sell({ slug: "ps5", path: "/sell/ps5", category: "ps5", title: "Sell Your PS5 with Dibs", description: "Sell your PS5 with a clear listing for the edition, storage, controller, games, cables, and console condition buyers want to know.", eyebrow: "Sell your PS5", headline: "Sell your PS5 without the marketplace headache.", subheadline: "Disc or Digital, Slim or original, controller or full bundle—Dibs helps make the offer clear.", image: { hero: "ps5", supporting: "phone" }, intro: "The bundle changes the deal. Show the console working and state exactly what the buyer receives.", sections: [
    { title: "How selling works", body: "Send photos of the console, ports, controller, cables, and powered-on home screen. Dibs helps assemble the listing." },
    { title: "What PS5 buyers care about", body: "Name the edition and bundle before anything else.", items: ["Disc or Digital Edition and model generation", "Storage capacity", "Controller condition, including stick drift", "Stand, HDMI and power cables, games, or box", "Noise, overheating, cosmetic wear, or repairs"] },
    { title: "How Dibs helps", body: "Dibs presents the exact bundle and condition so buyers are not guessing what “PS5 for sale” includes." },
  ], faqs: [{ question: "Should I factory-reset my PS5?", answer: "Back up anything you need, remove your accounts, and factory-reset the console before handing it to a buyer." }, { question: "How do I describe controller drift?", answer: "Test both sticks in a game or controller test and disclose any unintended movement or button issue." }, { question: "Can I include digital games?", answer: "Digital purchases are generally tied to an account. Do not promise account access or transfers that platform rules do not allow." }], relatedPages: [{ href: "/sell-with-dibs", label: "Sell with Dibs", description: "See how listing by text works." }, { href: "/sell/camera", label: "Sell a camera", description: "List another electronics item." }, { href: "/facebook-marketplace-alternative", label: "A marketplace alternative", description: "Compare a conversational approach." }], cta: { label: "Sell your PS5", heading: "Show Dibs what is in the bundle.", body: "Build the listing in a conversation.", href: "/#hero-phone" } }),
  sell({ slug: "furniture", path: "/sell/furniture", category: "furniture", title: "Sell Furniture Locally with Dibs", description: "Sell used furniture with Dibs. Create a useful local listing with dimensions, material, condition, pickup access, and transport details.", eyebrow: "Sell your furniture", headline: "Sell your furniture without the marketplace headache.", subheadline: "A sofa is more than a photo. Dibs helps capture dimensions, wear, pickup access, and the details that decide whether it fits.", image: { hero: "furniture", supporting: "marketplace" }, intro: "Furniture is local and logistical. The best listing answers both “will it fit?” and “can I get it home?”", sections: [
    { title: "How selling works", body: "Photograph the full piece in daylight, then show labels, texture, corners, and wear. Add dimensions and pickup details with Dibs." },
    { title: "What furniture buyers care about", body: "Measure before listing—not after someone arrives.", items: ["Width, depth, height, and seat height where relevant", "Material, color, brand, and age", "Stains, odors, pets, smoke exposure, or structural issues", "Floor, elevator, stairs, disassembly, and pickup window"] },
    { title: "How Dibs helps", body: "Dibs keeps measurements, condition, and collection logistics next to the photos so local buyers can plan." },
  ], faqs: [{ question: "What dimensions should I include?", answer: "At minimum include overall width, depth, and height. Add doorway-critical or seat dimensions when they matter." }, { question: "Should I mention pets or smoke?", answer: "Yes. Odors and allergen exposure can materially affect a buyer's decision and should be disclosed honestly." }, { question: "Does Dibs arrange delivery?", answer: "Do not assume delivery is included. Buyers and sellers should agree clearly on pickup, carrying, vehicle, and any delivery cost." }], relatedPages: [{ href: "/miami-marketplace", label: "Miami marketplace", description: "Find a nearby furniture buyer." }, { href: "/sell-with-dibs", label: "How to sell with Dibs", description: "Start a listing by text." }, { href: "/craigslist-alternative", label: "Craigslist alternative", description: "Compare ways to sell locally." }], cta: { label: "Sell your furniture", heading: "Start with the full piece and a tape measure.", body: "Dibs will help organize the rest.", href: "/#hero-phone" } }),
  sell({ slug: "clothes", path: "/sell/clothes", category: "clothes", title: "Sell Clothes with Dibs", description: "Sell clothes with clear photos and useful details about brand, tagged size, measurements, fabric, wear, and alterations—all through Dibs.", eyebrow: "Sell your clothes", headline: "Sell your clothes without the marketplace headache.", subheadline: "Good light, real measurements, honest condition. Dibs helps turn closet pieces into listings people can shop.", image: { hero: "clothes", supporting: "phone" }, intro: "Sizes vary between brands and eras. Measurements and close condition photos make a clothing listing more useful.", sections: [
    { title: "How selling works", body: "Photograph the front, back, label, fabric, and any wear. Tell Dibs the measurements and what has changed since purchase." },
    { title: "What clothing buyers care about", body: "Fit and condition deserve specifics.", items: ["Brand, style name, tagged size, and fit", "Key flat-lay measurements", "Fabric and care label", "Stains, pilling, fading, repairs, or alterations", "Whether the item is sold alone or as a lot"] },
    { title: "How Dibs helps", body: "Dibs brings the photos, sizing, and condition into a concise listing instead of making buyers ask for each detail." },
  ], faqs: [{ question: "Which clothing measurements should I include?", answer: "Use measurements relevant to the garment: pit-to-pit and length for tops; waist, rise, inseam, and opening for trousers." }, { question: "Can I sell a bundle of clothes?", answer: "Yes. State the number of pieces, size range, brands, condition, and whether you will separate the lot." }, { question: "How should I disclose flaws?", answer: "Name the flaw, show it close up, and give its location and approximate size." }], relatedPages: [{ href: "/sell-with-dibs", label: "Sell with Dibs", description: "Build your first listing." }, { href: "/sell/iphone", label: "Sell an iPhone", description: "Clear another item out." }, { href: "/new-york-marketplace", label: "New York marketplace", description: "Buy and sell locally in New York." }], cta: { label: "Sell your clothes", heading: "Pick one piece from the closet.", body: "Send Dibs a photo and its tagged size.", href: "/#hero-phone" } }),
];

const alternative = (slug: string, competitor: string, goodAt: string, struggles: string): SEOPageConfig => ({
  slug: `${slug}-alternative`, path: `/${slug}-alternative`, type: "alternative", published: true, competitor: slug,
  title: `${competitor} Alternative: Buy and Sell with Dibs`, description: `Looking for a ${competitor} alternative? Compare its traditional marketplace experience with Dibs, an AI-native way to buy and sell by text.`,
  eyebrow: `${competitor} alternative`, headline: "What if the marketplace felt like a conversation?", subheadline: `Dibs does not try to recreate every part of ${competitor}. It starts with a text and helps with the work between intent and connection.`, image: { hero: "marketplace", supporting: "phone" },
  intro: `${competitor} and Dibs take different approaches. The right choice depends on whether you want to browse and manage the process yourself or begin with a conversational request.`,
  sections: [
    { title: `What ${competitor} is good at`, body: goodAt },
    { title: "Where the traditional flow can feel like work", body: struggles },
    { title: "How Dibs is different", body: "Text Dibs what you want to buy or sell. Dibs helps create or interpret the request, discover relevant listings, and connect buyers and sellers." },
    { title: "How Dibs works", body: "Start with an item, photo, budget, or location. Add the details Dibs asks for, review the result, and decide whether to connect." },
  ],
  faqs: [
    { question: `Is Dibs the same as ${competitor}?`, answer: `No. ${competitor} and Dibs are separate services. Dibs is designed around buying and selling through a text conversation.` },
    { question: `Can I use both Dibs and ${competitor}?`, answer: "Yes. Sellers and buyers can choose the channels that fit them, subject to each service's rules." },
    { question: "Does Dibs guarantee a successful sale or purchase?", answer: "No. Availability, buyer interest, seller response, item details, and final transactions are not guaranteed." },
  ],
  relatedPages: [{ href: "/how-dibs-works", label: "How Dibs works", description: "See the conversational flow." }, { href: "/sell-with-dibs", label: "Sell with Dibs", description: "Create a listing by text." }, { href: "/buy-with-dibs", label: "Buy with Dibs", description: "Describe what you want to find." }],
  cta: { label: "Try Dibs", heading: "Skip the blank listing form.", body: "Tell Dibs what you want in a text.", href: "/#hero-phone" },
});

const alternativePages = [
  alternative("facebook-marketplace", "Facebook Marketplace", "It offers a broad browsing experience and can be convenient for people already using Facebook, especially for local inventory.", "Sellers still need to prepare listings and manage responses. Buyers often need to translate a specific need into repeated searches, filters, and messages."),
  alternative("craigslist", "Craigslist", "Its simple classified format covers many cities and categories, and direct local posting is familiar to long-time users.", "The sparse interface leaves buyers and sellers to structure the listing, assess relevance, and manage communication largely on their own."),
  alternative("offerup", "OfferUp", "It is focused on local commerce and gives users a familiar visual feed for browsing nearby items.", "A feed works well for browsing, but a buyer with a precise request may still need to search repeatedly and sellers must create and manage conventional listings."),
  alternative("ebay", "eBay", "It provides large-scale inventory, shipping-oriented commerce, auctions, and established transaction features for many collectible and standardized goods.", "That breadth can be more process than someone wants for a straightforward local item. Dibs focuses on expressing intent and making a person-to-person connection."),
];

const location = (slug: string, city: string, context: string, categories: string[]): SEOPageConfig => ({
  slug: `${slug}-marketplace`, path: `/${slug}-marketplace`, type: "location", published: true, location: slug,
  title: `${city} Marketplace: Buy and Sell with Dibs`, description: `Buy and sell locally in ${city} through Dibs. Text what you need, get help with listings and discovery, and connect with people nearby.`,
  eyebrow: `${city} marketplace`, headline: `Buy and sell locally in ${city}.`, subheadline: "Text Dibs instead of working through the usual marketplace steps. Describe the item, your budget, and the part of town that works for you.", image: { hero: slug === "new-york" ? "nycsf" : "marketplace", supporting: "phone" },
  intro: `${context} Local marketplace transactions still depend on clear item details, realistic travel expectations, and a handoff both people are comfortable with.`,
  sections: [
    { title: `Buying locally in ${city}`, body: "Include your preferred area, travel radius, timing, budget, and must-have details. Dibs can use that context to help focus discovery." },
    { title: `Selling locally in ${city}`, body: "Share clear photos, accurate condition notes, a price, and a pickup area. Dibs helps turn that information into a listing and connect interested buyers." },
    { title: "Categories people commonly trade", body: "Dibs can support many everyday local-marketplace needs.", items: categories },
    { title: "A simpler local marketplace experience", body: "Instead of beginning with categories and forms, begin with a text. Dibs helps with the listing or request; you make the final transaction decisions." },
  ],
  faqs: [
    { question: `Is Dibs available in ${city}?`, answer: `Dibs can accept buying and selling requests in ${city}. Listing availability and response will vary as the marketplace grows.` },
    { question: "Does Dibs deliver local items?", answer: "Do not assume delivery is included. Buyers and sellers should agree on pickup, delivery, timing, and any related cost." },
    { question: "Where should I meet for a local purchase?", answer: "Choose a well-lit public location when appropriate, let someone know your plan, and inspect the item before completing the transaction." },
  ],
  relatedPages: [{ href: "/buy-with-dibs", label: "Buy with Dibs", description: "Write a more useful local request." }, { href: "/sell-with-dibs", label: "Sell with Dibs", description: "Create a clear local listing." }, { href: "/is-dibs-safe", label: "Use Dibs safely", description: "Prepare for a local handoff." }],
  cta: { label: `Try Dibs in ${city}`, heading: `What are you buying or selling in ${city}?`, body: "Text Dibs and start with the item.", href: "/#hero-phone" },
});

const locationPages = [
  location("miami", "Miami", "From dense neighborhoods to longer cross-county trips, location details can make or break a Miami deal.", ["Phones and computers", "Cameras and creator gear", "Furniture and home items", "Sneakers and clothes", "Game consoles and bikes"]),
  location("new-york", "New York", "In New York, borough, neighborhood, transit access, stairs, and item size can matter as much as distance.", ["Clothing and accessories", "Furniture sized for apartments", "Phones and laptops", "Cameras and audio gear", "Home and kitchen items"]),
  location("los-angeles", "Los Angeles", "Across Los Angeles, realistic drive times, pickup windows, and a clear meeting area help local deals work.", ["Cameras and production gear", "Furniture and home items", "Phones and computers", "Clothing and sneakers", "Bikes and fitness gear"]),
];

export const seoPageRegistry: readonly SEOPageConfig[] = [
  ...productPages,
  ...sellPages,
  ...alternativePages,
  ...locationPages,
];

export const publishedSEOPageRegistry = seoPageRegistry.filter(page => page.published);

export function getSEOPageByPath(path: string) {
  return publishedSEOPageRegistry.find(page => page.path === path);
}

export function getRootSEOPage(slug: string) {
  return publishedSEOPageRegistry.find(page => page.path === `/${slug}` && page.type !== "sell");
}

export function getSellSEOPage(slug: string) {
  return publishedSEOPageRegistry.find(page => page.path === `/sell/${slug}` && page.type === "sell");
}