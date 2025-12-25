
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


            <div className="relative video-wrapper -mt-[110px]">

                {
                    image && (

                        <Image
                            src={image.url}
                            alt={image.alt}
                            height={400}
                            width={800}
                            className="mx-auto w-[80%]"
                        />
                    )
                }
                <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                    {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-white p-4 mt-[230px]">
                    <ul className="list-disc pl-5 space-y-4 text-white" >
                        {Paragraph?.map((item, index) => (
                            <li key={index} style={{ fontSize: '20px' }}>   <b> {item.Point}    </b>  </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}