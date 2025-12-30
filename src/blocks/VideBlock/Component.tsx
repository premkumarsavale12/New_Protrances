"use client"
import RichText from "@/components/RichText";
import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

import React from "react";

interface VideoBlockProps {
    Video: {

        url: string;
        mimeType?: string;


    },
    richText: DefaultTypedEditorState,
    Paragraph?: {
        Point: string;
        id?: string;
    }[],
    button?: string | null;
    buttonUrl?: string;
}


export const VideoBlock: React.FC<VideoBlockProps> = ({ Video, richText, Paragraph, button, buttonUrl }) => {

    return (

        <>
            <div className="relative video-wrapper -mt-[110px]">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                >
                    <source src={Video.url} type={Video.mimeType || 'video/mp4'} />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                    {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-white p-4 mt-[230px]">
                    <ul className="list-disc pl-5 space-y-4 text-white" >
                        {Paragraph?.map((item, index) => (
                            <li key={index} style={{ fontSize: '20px' }}>   <b> {item.Point}    </b>  </li>
                        ))}
                        <button onClick={() => window.open(buttonUrl, "_blank")} className="  mt-[10] inline-flex items-center px-6 py-3 rounded-full bg-black text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out
                                           hover:bg-gray-900 hover:text-white hover:scale-105 hover:shadow-lg">
                            {button}
                        </button>
                    </ul>

                </div>


            </div>

        </>
    )
}
