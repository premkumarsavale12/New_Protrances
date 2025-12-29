"use client"
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from 'swiper/modules';
import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import Image from "next/image";


interface SliderProps {
    media?: {
        Images: {
            url: string;
            alt: string
        }
        id?: string | null;
        richText?: DefaultTypedEditorState;
        pageURL: string;
    }[]
}


export const Slider: React.FC<SliderProps> = ({ media = [] }) => {

    return (
        <div className="relative max-w-7xl mx-auto px-4 h-[400px]">

            {/* Previous Button */}
            <div
                className="
        custom-prev
        absolute left-0 top-1/2 -translate-y-1/2
        bg-blue-600 text-white
        w-12 h-12 flex items-center justify-center
        rounded-full shadow-lg cursor-pointer
        hover:bg-blue-700 hover:scale-110
        transition-all duration-300
        z-50
      "
            >
                ◀
            </div>

            {/* Next Button */}
            <div
                className="
        custom-next
        absolute right-0 top-1/2 -translate-y-1/2
        bg-blue-600 text-white
        w-12 h-12 flex items-center justify-center
        rounded-full shadow-lg cursor-pointer
        hover:bg-blue-700 hover:scale-110
        transition-all duration-300
        z-50
      "
            >
                ▶
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop
                spaceBetween={20}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                className="w-full h-[400px]"
            >
                {media.map((item, index) => {
                    const image = item.Images;

                    if (image?.url) {
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    onClick={() => window.open(item.pageURL, "_blank")}
                                    className="
                  w-full h-full
                  rounded-xl overflow-hidden
                  relative group cursor-pointer
                "
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.alt || "Slider Image"}
                                        width={500}
                                        height={300}
                                        className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                                    />
                                </div>
                            </SwiperSlide>
                        );
                    }
                    return null;
                })}
            </Swiper>
        </div>
    );

}

