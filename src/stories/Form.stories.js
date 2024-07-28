import { fn } from '@storybook/test';
import { createFormSelect } from './Form';

export default {
    title: 'Example/Form',
    tags: ['autodocs'],
    render: ({ id, options, ...args }) => {
        // You can either use a function to create DOM elements or use a plain html string!
        // return `<div>${label}</div>`;
        return createFormSelect({ id, options, ...args });
    },
    argTypes: {
        id: { control: 'text' },
        options: { control: 'array' },
        onChange: { action: 'onChange' },
        outlined: { control: 'boolean' },
        withSearch: { control: 'boolean' },
        multiple: { control: 'boolean' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onChange: fn() },
};

export const SelectDropdownField = {
    args: {
        id: 'select',
        withSearch: true,
        options: [
            { value: '1', text: 'Option 1' },
            { value: '2', text: 'Option 2' },
            { value: '3', text: 'Option 3' },
            { value: '4', text: 'Long Long Option 4' },
            { value: '5', text: 'Long Long Long Option 5' },
            { value: '6', text: 'Long Long Long Long Option 6' },
        ],
        multiple: false,
        outlined: true,
    },
};
