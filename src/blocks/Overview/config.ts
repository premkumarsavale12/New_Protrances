import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";



export const Overview: Block = {
    slug: 'overview',
    interfaceName: 'overview',
    labels: {

        singular: 'overview',
        plural: 'overview'
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            label: 'heading',

        },

        {
            name: 'overiews',
            type: 'array',
            minRows: 1,
            fields: [
                {
                    name: "Image",
                    type: 'upload',
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
                    name: 'Button',
                    type: 'text',
                    label: 'Read More',
                    required: true
                }
            ]
        }
    ]
}
