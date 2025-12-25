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

            <div className="text-center text-black mb-[40px]" >
                {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
            </div>

            <div className="grid grid-cols-1 ml-[300px] md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] gap-4">



                {data?.map((item, index) => (
                    <div
                        key={index}
                        className="relative rounded-2xl overflow-hidden shadow-lg bg-white mx-auto"
                    >
                        {/* Image */}
                        {item.Image && (
                            <img
                                src={item.Image.url}
                                alt={item.Image.alt}
                                className="w-full h-102 object-cover"
                            />
                        )}

                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 right-0 bg-blue-700/90 p-4 text-white">
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

        </>
    )
}

