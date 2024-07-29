import { fn } from '@storybook/test';
import { DropdownMenu } from './Dropdown';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
    title: 'Example/Dropdown',
    component: DropdownMenu,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        id: { control: 'text' },
        options: { control: 'array' },
        outlined: { control: 'boolean' },
        multiple: { control: 'boolean' },
        withSearch: { control: 'boolean' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const SelectDropdownField = {
    args: {
        id: 'select',
        withSearch: true,
        options: [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Long Long Option 4' },
            { value: '5', label: 'Long Long Long Option 5' },
            { value: '6', label: 'Long Long Long Long Option 6' },
        ],
        multiple: false,
        outlined: true,
    },
};

export const OutlinedDropdownField = {
    args: {
        ...SelectDropdownField.args,
        outlined: true,
    },
};

export const MultipleDropdownField = {
    args: {
        ...SelectDropdownField.args,
        multiple: true,
    },
};

export const NoSearchDropdownField = {
    args: {
        ...SelectDropdownField.args,
        withSearch: false,
    },
};