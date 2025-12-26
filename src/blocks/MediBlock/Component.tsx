
import RichText from "@/components/RichText";
import Image from "next/image";
import { type DefaultTypedEditorState } from '@payloadcms/richtext-lexical';

interface MediBlockProps {

    image: {

        url: string;
        alt: string;

    },
    richText: DefaultTypedEditorState,
    Paragraph?: {
        Point: string;
        id?: string;
    }[],

}



export const MediBlock: React.FC<MediBlockProps> = ({ image, richText, Paragraph }) => {
    // console.log(Image);

    return (

        <>


            <div className="relative w-full -mt-[110px]">

                {/* Background Image */}
                {image && (
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={1920}
                        height={800}
                        className="w-full h-[500px] md:h-[600px] object-cover"
                        priority
                    />
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content Wrapper */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">

                    {/* RichText */}
                    {richText && (
                        <RichText
                            className="
          mb-10
          [&_h1]:text-3xl md:[&_h1]:text-5xl
          [&_h1]:font-bold
          [&_p]:mt-4
          [&_p]:text-lg md:[&_p]:text-xl
        "
                            data={richText}
                            enableGutter={false}
                        />
                    )}

                    {/* Paragraph Points */}
                    <ul className="list-disc space-y-4 text-lg md:text-xl max-w-3xl text-left">
                        {Paragraph?.map((item, index) => (
                            <li key={index} className="font-semibold">
                                {item.Point}
                            </li>
                        ))}
                    </ul>

                </div>
            </div>



        </>
    )
}