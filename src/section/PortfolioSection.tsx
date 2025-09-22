"use client";

import Image from "next/image";

const portfolioItems = [
  {
    title: "Richa & Sanjeev",
    category: "Wedding Stories",
    img: "/1.jpg",
    span: "row-span-1", // taller
  },
  {
    title: "Royal Elegance",
    category: "Wedding Stories",
    img: "/3.jpg",
    span: "row-span-2", // medium
  },
  {
    title: "Ethereal Ecstasy",
    category: "Wedding Stories",
    img: "/2.jpg",
    span: "row-span-2", // shorter
  },
  {
    title: "Starry Celebration",
    category: "Wedding Stories",
    img: "/4.jpg",
    span: "row-span-1", // taller
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#f9f7f6] py-20 px-6 md:px-12 lg:px-20">
      {/* Section Title */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="uppercase text-sm tracking-widest text-gray-500 mb-3">
          Professional, creative, and attentive
        </p>
        <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Portfolio</h2>
        <p className="text-gray-700 leading-relaxed">
          Our portfolio showcases our expertise in designing and planning unique
          and unforgettable weddings. From intimate celebrations to grand
          affairs, we create personalized experiences tailored to our clients'
          vision and style.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto auto-rows-[300px] md:auto-rows-[400px]">
        {portfolioItems.map((item, index) => (
          <div key={index} className={`group ${item.span}`}>
            <div className="w-full h-full overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={800}
                height={1000}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 my-14"
              />
            </div>
            <div className="mt-4">
              <p className="uppercase text-xs tracking-widest text-gray-500 ">
                {item.category}
              </p>
              <h3 className="text-lg font-serif">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
