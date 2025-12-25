import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Reference: Block = {
    slug: 'reference',
    interfaceName: 'reference',
    labels: {
        singular: 'reference',
        plural: 'references'
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
            name: 'data',
            type: 'array',
            label: 'Added Data',
            maxRows: 3,
            fields: [
                {
                    name: 'Image',
                    type: 'upload',
                    label: 'Upload Images',
                    relationTo: 'media'

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
                    name: 'Paragraph',
                    type: 'textarea',
                    label: 'Paragrapg',

                }

            ]
        }
    ]

}