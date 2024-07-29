// Declare the module if it's not a global declaration
declare module 'dropdown' {
    // Define the type for the options
    interface DropdownOption {
      value: string;
      label: string;
    }

    // Define the props for the Dropdown component
    interface DropdownProps {
      options: DropdownOption[];
      withSearch?: boolean;
      outlined?: boolean;
      multiple?: boolean;
      id?: string;
    }

    // Declare the Dropdown component
    export function Dropdown(props: DropdownProps): JSX.Element;
}