import { useState } from "react";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

export default function Carousel({ slides }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className="overflow-hidden relative z-30">
            <div
                className={`flex transition ease-out duration-300`}
                style={{
                    transform: `translateX(-${current * 100}%)`,
                }}
            >
                {slides.map((s, index) => (
                    <img key={index} src={s} alt={`slide-${index}`} className="w-128 h-56" />
                ))}
            </div>
            <div className="absolute top-0 h-full w-full flex justify-between items-center text-white">
                <button onClick={previousSlide}>
                    <IoIosArrowDropleft size={30} />
                </button>
                <button onClick={nextSlide}>
                    <IoIosArrowDropright size={30} />
                </button>
            </div>
            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                {slides.map((s, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`rounded-full w-4 h-4 ${index === current ? "bg-white" : "bg-gray-500"}`}
                    />
                ))}
            </div>
        </div>
    );
}
