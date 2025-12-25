import RichText from "@/components/RichText"

interface RedirectProps {
    richText: any,
    Paragraph: string,
    Button: string,

}


export const Redirect: React.FC<RedirectProps> = ({ richText, Paragraph, Button }) => {

    // console.log(richText, Paragraph, Button);

    return (

        <>
            <section className="w-full flex justify-center px-4 py-20">
                <div className="w-full max-w-7xl rounded-2xl bg-[#1f5f99] text-white text-center px-6 py-16 relative overflow-hidden">

                    {/* Optional background pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:24px_24px]" />

                    <div className="relative z-10">
                        {richText && (
                            <RichText
                                className="mb-6 text-lg text-white/90"
                                data={richText}
                                enableGutter={false}
                            />
                        )}

                        <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                            {Paragraph}
                        </h3>

                        <button className="mt-4 inline-flex items-center justify-center rounded-full bg-pink-600 px-8 py-3 text-sm md:text-base font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400">
                            {Button}
                        </button>
                    </div>
                </div>
            </section>


        </>
    )
}

