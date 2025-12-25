import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Redirect: Block = {
    slug: 'redirect',
    interfaceName: 'redirect',
    labels: {
        singular: 'redirect',
        plural: 'redirects'
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
            name: 'Paragraph',
            type: 'textarea',
            label: 'Paragraph',

        },
        {
            name: 'Button',
            type: 'text',
            label: 'button'
        }


    ]
}