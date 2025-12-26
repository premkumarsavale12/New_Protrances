import RichText from "@/components/RichText";
import { DefaultTypedEditorState } from "@payloadcms/richtext-lexical";
import React from "react";

interface ReferenceProps {
    richText: DefaultTypedEditorState,
    data?: {
        Image: {
            url: string,
            alt: string
        },
        richText: DefaultTypedEditorState,
        Paragraph: string,
    }[],

}

export const References: React.FC<ReferenceProps> = ({ data, richText }) => {

    // console.log(data)

    return (
        <>
            {/* Heading */}
            <div className="text-center text-black mb-10 max-w-4xl mx-auto px-4">
                {richText && (
                    <RichText
                        className="mb-0"
                        data={richText}
                        enableGutter={false}
                    />
                )}
            </div>

            {/* Cards Grid */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data?.map((item, index) => (
                        <div
                            key={index}
                            className="
              relative rounded-2xl overflow-hidden
              bg-white shadow-md
              hover:shadow-xl transition-shadow duration-300
            "
                        >
                            {/* Image */}
                            {item.Image && (
                                <img
                                    src={item.Image.url}
                                    alt={item.Image.alt}
                                    className="w-full h-64 object-cover"
                                />
                            )}

                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 right-0 bg-blue-700/90 p-5 text-white">
                                {item.richText && (
                                    <RichText
                                        className="text-lg font-semibold mb-1"
                                        data={item.richText}
                                        enableGutter={false}
                                    />
                                )}

                                <p className="text-sm opacity-90">
                                    {item.Paragraph}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );

}

