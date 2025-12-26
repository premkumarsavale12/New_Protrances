import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Map: Block = {
    slug: 'map',
    interfaceName: 'map',
    labels: {
        singular: "map",
        plural: 'maps'
    },
    fields:
        [

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
                name: 'mapEmbed',
                type: 'textarea',
                admin: {
                    description: 'Paste Google Maps embed iframe code',
                },
            },
        ]
}