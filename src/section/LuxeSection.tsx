import React from "react";

const LuxeSection = () => {
    return (
        <div className="w-full">
            {/* -------- White Section -------- */}
            <div className="bg-white flex flex-col md:flex-row items-center justify-center md:justify-between h-[700px]">
                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4" style={{ fontFamily: 'var(--font-secondary)' }}>
                    <p className="tracking-widest text-xs sm:text-lg text-gray-500 mb-2">
                        LEARN OUR STORY
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 leading-snug" style={{ fontFamily: 'Josefin Sans' }}>
                        SERVICING THE{" "}
                        <span className="italic text-sky-700">Wild West</span>
                    </h2>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                        we are <span className="font-bold">LUXE</span>
                    </h3>

                    <div className="h-px w-12 bg-gray-400 mb-4"></div>

                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg max-w-md" style={{ fontFamily: 'Josefin Sans' }}>
                        We plan, produce, coordinate, design, style, promote and{" "}
                        <em>live for a good party.</em>
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full md:w-1/2 h-full flex justify-center">
                    <img
                        src="https://static.showit.co/1200/IgRwSu2wTFeuNTozbwEgww/69014/luxe-event-productions-seattle-wedding-planners.jpg"
                        alt="About Luxe Team"
                        className="shadow-lg w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* -------- Black Section -------- */}
            <div className="bg-black text-white flex flex-col md:flex-row items-center justify-center md:justify-between h-[700px]">
                {/* Left Image */}
                <div className="w-full md:w-1/2 h-full flex justify-center">
                    <img
                        src="https:static.showit.co/800/I36cEh2WQDyVOAJn22k5Ug/69014/luxe-85_1.jpg"
                        alt="About Luxe Team"
                        className="shadow-lg w-full h-full object-cover"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4">
                    <p className="tracking-widest text-base sm:text-lg text-gray-400 mb-2" style={{ fontFamily: 'var(--font-secondary)' }}>
                        MEET OUR
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: 'Josefin Sans' }}>
                        Leadership Team
                    </h2>
                    <div className="h-px w-12 bg-gray-400 mb-4"></div>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg max-w-md" style={{ fontFamily: 'Josefin Sans' }}>
                        Give us a blank space (a warehouse, a private property, a field of
                        wildflowers, a magazine spread) and watch us create something
                        remarkable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LuxeSection;
