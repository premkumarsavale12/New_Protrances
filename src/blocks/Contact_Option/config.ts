import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Contact_Option: Block = {
    slug: 'contact_option',
    interfaceName: 'contact_option',
    labels: {
        singular: 'contact_option',
        plural: 'contacts_options'
    },

    fields: [


        {
            name: 'richText',
            type: 'richText',
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [
                        ...rootFeatures,
                        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                        FixedToolbarFeature(),
                        InlineToolbarFeature(),
                    ]
                },
            }),
            label: false,
        },

        {
            name: 'contact_option',
            type: "array",
            label: 'contact_option',
            fields: [
                {
                    name: 'logo',
                    type: 'upload',
                    label: 'logo',
                    relationTo: 'media',
                    required: true
                },
                {
                    name: 'richText',
                    type: 'richText',
                    editor: lexicalEditor({
                        features: ({ rootFeatures }) => {
                            return [
                                ...rootFeatures,
                                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                                FixedToolbarFeature(),
                                InlineToolbarFeature(),
                            ]
                        },
                    }),
                    label: false,
                },

                {
                    name: 'button',
                    type: 'text',
                    label: 'button'
                },

                {
                    name: 'buttonUrl',
                    type: 'text',
                    label: 'button'
                }
            ]
        }
    ]
}
