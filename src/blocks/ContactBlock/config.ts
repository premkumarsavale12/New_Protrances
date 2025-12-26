import { Block } from "payload";


export const ContactsBlocks: Block = {
    slug: 'contactsblocks',
    interfaceName: 'contactsblocks',
    labels: {
        singular: 'Contact Block',
        plural: 'Contacts Blocks',
    },
    fields: [
        {
            name: 'heading',
            type: 'text',
            // required: true,
        },
        {
            name: 'description',
            type: 'textarea',
        },
        {
            name: 'phone',
            type: 'text',
        },
        {
            name: 'email',
            type: 'email',
        },
        {
            name: 'address',
            type: 'textarea',
        },
        {
            name: 'mapEmbed',
            type: 'textarea',
            admin: {
                description: 'Paste Google Maps embed iframe code',
            },
        },
        {
            name: 'formFields',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                },
                {
                    name: 'type',
                    type: 'select',
                    options: [
                        { label: 'Text', value: 'text' },
                        { label: 'Email', value: 'email' },
                        { label: 'Textarea', value: 'textarea' },
                        { label: 'Phone', value: 'tel' },
                    ],
                },
                {
                    name: 'required',
                    type: 'checkbox',
                },
            ],
        },
        {
            name: 'submitLabel',
            type: 'text',
            defaultValue: 'Send Application',
        },
    ],
};

