import React from "react";

const LuxeSection = () => {
    return (
        <div className="w-full">
            {/* -------- White Section -------- */}
            <div className="bg-white flex flex-col md:flex-row items-center justify-center md:justify-between h-[700px]">
                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4" >
                    <p className="tracking-widest text-xs sm:text-lg text-gray-500 mb-2">
                        LEARN OUR STORY
                    </p>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 leading-snug" style={{ fontFamily: 'Josefin Sans' }}>
                        SERVICING THE{" "}
                        <span className="italic text-sky-700" style={{ fontFamily: 'var(--font-secondary)' }}>Wild West</span>
                    </h2>

                    <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold mb-4">
                        we are <span className="font-bold" style={{ fontFamily: 'var(--font-third)' }}>OpEvents</span>
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

        </div>
    );
};

export default LuxeSection;
