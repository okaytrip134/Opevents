"use client";

const marqueeTexts = [
  "Gala Dinners /",
  "Private Parties /",
  "High-End Fashion Shows /",
  "Exclusive Wine Tastings /",
  "Luxury Car Launches /",
  "VIP Charity Auctions /",
  "Destination Weddings /",
  "Red Carpet Premieres /",
  "Private Concerts /",
  "Luxury Brand Launches /",
];

export default function MarqueeText() {
  // Repeat the texts 3 times for a seamless loop
  const repeatedTexts = Array(3)
    .fill(marqueeTexts)
    .flat();

  return (
    <div className="overflow-hidden whitespace-nowrap text-center py-6">
      <div className="inline-block animate-marquee">
        {repeatedTexts.map((text, i) => (
          <span key={i} className="uppercase mx-4 text-lg font-semibold text-gray-700">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}