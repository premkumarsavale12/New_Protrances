
"use client"
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
interface NumberProps {
    Heading?: string | null;

    item?:
    | {
        logo: {
            url: string,
            alt: string
        }
        name?: string | null;
        number?: string | null;
        id?: string | null;
    }[]
    | null;
}

export const Number: React.FC<NumberProps> = ({ item, Heading }) => {

    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    // console.log(item);

    return (

        <>
            <div className="relative max-w-7xl mx-auto  px-4">
                <h1 className="text-center font-extrabold text-black mb-[30px]"> {Heading}</h1>


                <div
                    ref={prevRef}
                    className="absolute left-4 z-50 -ml-[100px]  mt-[40px] flex items-center justify-center
                        w-12 h-12 rounded-full bg-blue-400   text-white  shadow-lg cursor-pointer
                           hover:scale-110 transition-transform"
                    aria-label="Previous slide"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path
                            d="M15 18l-6-6 6-6"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                {/* Next Button */}
                <div
                    ref={nextRef}
                    className="absolute right-4 z-50 -mr-[100px]   mt-[40px]  flex items-center justify-center
                          w-12 h-12 rounded-full bg-blue-400 text-white shadow-lg cursor-pointer
                    hover:scale-110 transition-transform"
                    aria-label="Next slide"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path
                            d="M9 6l6 6-6 6"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>



                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop
                    autoplay={{ delay: 3000, }}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    className="w-full"
                >

                    {item?.map((items, index) => (

                        <SwiperSlide key={index}>
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
                            >
                                {/* Top Section */}
                                <div className="flex items-center gap-3 text-gray-600">
                                    {items.logo && (
                                        <img
                                            src={items.logo.url}
                                            alt={items.logo.alt}
                                            className="w-6 h-6 object-contain"
                                        />
                                    )}
                                    <span className="text-sm font-medium">{items.name}</span>
                                </div>

                                {/* Number */}
                                <h1 className="mt-6 text-4xl font-bold text-gray-900">
                                    {items.number}
                                </h1>
                            </div>

                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>

        </>
    )
}