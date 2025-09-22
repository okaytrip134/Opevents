import React from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12JbL7YYpQILUnZH_BX4SY_v_gs3-bUAJbxVXSggQEXOgO1oLk-r2pFHodtf-OQperaI&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xkamrpkD_0C0sCE9pOvKWsUDU-zX_HuzyY0V0nMl07seZmmRk_MDbJz2IUCHKKjmt_8&usqp=CAU",
  "https://mymandap.in/wp-content/uploads/2021/11/6bf0a895eaabb12762218d54df651f12.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStDUs05JDfbsRXDgAMYzDUvAAluhhdao1p-pvX4mDjDpiKQu23VWK6w_4DgbsXC_OmQSY&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZN6ltjxOSEvomeQIyPZfg6iL_mKPkDFoGg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIh4x3aHTJZeC-vjbse4Z0RS3EBOrKjtwJfnh8z0mB8fxPUFPWxy5Teq3I0MJK-X9caj0&usqp=CAU",
  "https://www.bmpwedding.co.in/storage/app/public/uploads/blog/Luxury%20Wedding%20Planner%20in%20Delhi.jpg",
  "https://aroyaaleevent.com.au/wp-content/uploads/2021/08/indian_img1.jpg",
  "https://www.showtimeevent.com/images/resource/image-1.webp",
];

const ImageMarquee = () => {
  return (
    <>
            <h2 className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-semibold text-gray-800  mt-10 m-10" style={{ fontFamily: 'var(--font-secondary)' }}>
            Our Events Gallery
        </h2>

    <div className="relative w-full overflow-hidden py-6 mt-20">
      {/* Gradient overlay (blur effect on ends) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Row 1 → Right */}
      <div className="flex w-max animate-marquee-right space-x-4 mb-6">

        {images.concat(images).map((src, i) => (
          <img
            key={`row1-${i}`}
            src={src}
            alt="marquee"
            className="w-[220px] h-[220px] object-cover rounded-xl shadow"
          />
        ))}
      </div>

      {/* Row 2 → Left */}
      <div className="flex w-max animate-marquee-left space-x-4">
        {images.concat(images).map((src, i) => (
          <img
            key={`row2-${i}`}
            src={src}
            alt="marquee"
            className="w-[220px] h-[220px] object-cover rounded-xl shadow"
          />
        ))}
      </div>
    </div>
        </>
  );
};

export default ImageMarquee;