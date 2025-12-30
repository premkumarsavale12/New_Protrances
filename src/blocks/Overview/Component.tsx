"use client"
import RichText from "@/components/RichText";
import React, { useState } from "react";
import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';
import Image from "next/image";

interface OverviewProps {

    heading?: string | null;

    overiews?:
    | {
        Image: {
            url: 'any',
            alt: 'any'
        },
        richText: 'DefaultTypedEditorState',
        Button: string;
        buttonUrl: string;

    }[],

}

const extraText = (richText: DefaultTypedEditorState) => {

    if (!richText?.root?.children) return "";

    return richText.root.children
        .map((node: any) =>
            node.children ?
                node.children.map((child: any) => child.text || "").join(" ") : ""
        )
        .join("")
        .toLowerCase();
}


export const Overview: React.FC<OverviewProps> = ({ heading, overiews }) => {

    const [search, setSearch] = useState("");

    const filteredOverviews = overiews?.filter((item) => {
        const textContent = extraText(item.richText as unknown as DefaultTypedEditorState);
        return textContent.includes(search.toLowerCase());
    }) || [];
  

    return (

        <>
            <div className="max-w-7xl mx-auto px-4 py-10">


                <input type="Text"
                    placeholder="what are you looking for...? "
                    className="border px-3 py-2 w-[300px] mb-4 float-right"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <h1 className="text-3xl font-semibold mb-10">
                    {heading}
                </h1>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {filteredOverviews.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
                        >

                            {item.Image && (
                                <div className="h-[380px] w-full overflow-hidden">
                                    <Image
                                        src={item.Image.url}
                                        alt={item.Image.alt}
                                        height={400}
                                        width={800}
                                        className="w-full h-full object-cover "
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className="p-6">
                                <div>
                                    {item.richText && (
                                        <RichText
                                            className="text-lg font-medium mb-6"
                                            data={item.richText as unknown as DefaultTypedEditorState}
                                            enableGutter={false}
                                        />
                                    )}
                                </div>


                                {/* Button */}

                                <button onClick={() => window.open(item.buttonUrl, "_blank")} className=" inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out
                                           hover:bg-gray-900 hover:text-white hover:scale-105 hover:shadow-lg">
                                    {item.Button || "READ MORE"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>

    )

} 
