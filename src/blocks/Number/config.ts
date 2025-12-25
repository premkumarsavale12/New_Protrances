import { Block } from "payload";


export const Number: Block = {
    slug: 'number',
    interfaceName: 'number',
    labels: {
        singular: 'number',
        plural: 'numbers'
    },
    fields: [


        {

            name: 'Heading',
            type: 'text',
            label: 'Heading',


        },

        {
            name: 'item',
            type: 'array',
            label: 'add items',
            fields: [
                {
                    name: 'logo',
                    type: 'upload',
                    relationTo: 'media',
                    required: true
                },

                {
                    name: 'name',
                    type: 'text',
                    label: 'Name'
                },

                {
                    name: 'number',
                    type: 'text',
                    label: "Number"
                }
            ]
        }
    ]
}