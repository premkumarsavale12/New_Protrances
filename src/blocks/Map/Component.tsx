import RichText from "@/components/RichText";
import React from "react";

interface MapProps {
    richText: any;
    mapEmbed?: string;

}

export const Map: React.FC<MapProps> = ({ richText, mapEmbed }) => {
    // console.log(richText, mapEmbed)
    return (

        <>
            <>
                {/* Centered Rich Text */}
                {richText && (
                    <div className="flex justify-center text-center">
                        <RichText
                            className="mb-0 max-w-3xl"
                            data={richText}
                            enableGutter={false}
                        />
                    </div>
                )}


                {mapEmbed && (
                    <div className="mt-6   items-center overflow-hidden rounded  ml-[500px]  w-full" >
                        <div
                            className="  h-[400px]   w-full"
                            dangerouslySetInnerHTML={{ __html: mapEmbed }}
                        />
                    </div>
                )}
            </>

        </>
    )
}

