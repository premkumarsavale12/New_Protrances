import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";


export const MediBlock: Block = {

    slug: 'mediBlock',
    interfaceName: 'mediBlock',
    labels: {
        singular: 'mediBlock',
        plural: 'mediBlocks'
    },

    fields: [
        {

            name: 'image',
            type: 'upload',
            label: 'Image Upload',
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
            name: 'Paragraph',
            type: 'array',
            label: 'bullect Point ',
            fields: [
                {
                    name: 'Point',
                    type: 'textarea',
                    label: 'bullect point text'
                }
            ]

        }
    ]
}

