

interface ContactsBlocksProps {
    heading: string;
    description?: string;
    phone?: string;
    email?: string;
    address?: string;
    mapEmbed: string;
    submitLabel?: string | null;
    formFields?:
    | {
        label?: string | null;
        type?: ('text' | 'email' | 'textarea' | 'tel');
        required?: boolean;
        id?: string | null;
    }[]

}


export const ContactsBlocks = ({ heading, description, phone, email, address, mapEmbed, formFields, submitLabel }: ContactsBlocksProps) => {

    return (

        <>
            <section className="contact-block grid grid-cols-1 md:grid-cols-2 gap-2 p-8 bg-white rounded-lg shadow-md">
                <div className="info space-y-4 ml-[100px]">
                    <h2 className="text-3xl font-bold text-gray-800">{heading}</h2>
                    <p className="text-gray-600">{description}</p>
                    <p className="flex items-center gap-2 text-gray-700">
                        📞 <span>{phone}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        📧 <span>{email}</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        📍 <span>{address}</span>
                    </p>
                    <div className="mt-4 rounded overflow-hidden">
                        <div dangerouslySetInnerHTML={{ __html: mapEmbed }} />
                    </div>
                </div>

                <form className="contact-form space-y-4 bg-gray-50 p-6 rounded-lg shadow-sm mt-20">
                    {formFields?.map((field, i) => (
                        <div key={i} className="flex flex-col">
                            <label className="mb-1 text-sm font-medium text-gray-700">{field.label}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required={field.required}
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required={field.required}
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        {submitLabel}
                    </button>
                </form>
            </section>


        </>
    )
}