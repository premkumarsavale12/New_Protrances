"use client"
import RichText from "@/components/RichText";
import React from "react";

interface Contact_OptionProps {
    contact_option?: {
        logo: {
            url: 'string',
            alt: 'string'
        },
        richText: any,
        button?: string | null;
        buttonUrl?: string;

    }[],
    richText: any,
}


export const Contact_Option: React.FC<Contact_OptionProps> = ({ contact_option, richText }) => {

    // console.log(contact_option);

    return (

        <>

            {richText && <RichText className="mb-0" data={richText} enableGutter={false} style={{ marginBottom: '30px' }} />}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-20">



                {contact_option?.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300
                 p-6 flex flex-col justify-between min-h-[70px]  w-[400px]"
                    >

                        {item.logo && (
                            <div className="mb-4">
                                <img
                                    src={item.logo.url}
                                    alt={item.logo.alt}
                                    className="w-8 h-8"
                                />
                            </div>
                        )}


                        <div className="mb-4">
                            {item.richText && (
                                <RichText
                                    className="text-lg font-semibold text-gray-900 mb-2"
                                    data={item.richText}
                                    enableGutter={false}
                                />
                            )}
                        </div>

                        <button
                            onClick={() => window.open(item.buttonUrl, "_blank")}
                            className="self-start inline-flex items-center px-6 py-3 rounded-full
                   bg-gray-100 text-sm font-semibold text-gray-800
                   transition-all duration-300 ease-in-out
                   hover:bg-gray-900 hover:text-white hover:scale-105 hover:shadow-lg"
                        >
                            {item.button || "READ MORE"}
                        </button>
                    </div>
                ))}
            </div>

        </>

    )

} 
