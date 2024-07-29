import React from 'react';
import Dropdown from '../Dropdown';
import './dropdown.css';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => (
    <div className='container p-8'>
      <div className="flex flex-row">
        <div className="md:w-1/6 w-1/3 flex items-center">
            <label>Label</label>
        </div>
        <div className="md:w-5/6 w-2/3">
            <Dropdown {...args} />
        </div>
      </div>
    </div>
);

export const DropdownMenu = Template.bind({});
DropdownMenu.args = {
  options: [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option with icon' },
    { value: '3', label: 'Long Long Option 3' },
    { value: '4', label: 'Long Long Long Option 4' },
    { value: '5', label: 'Long Long Long Long Option 5' },
    { value: '6', label: 'Long Long Long Long Long Option 6' },
  ],
  withSearch: true,
  outlined: false,
  multiple: true,
  id: 'select',
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...DropdownMenu.args,
  outlined: true,
};

export const Multiple = Template.bind({});
Multiple.args = {
  ...DropdownMenu.args,
  multiple: true,
};

export const NoSearch = Template.bind({});
NoSearch.args = {
  ...DropdownMenu.args,
  withSearch: false,
};