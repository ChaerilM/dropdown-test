# Dropdown menu for Job Test

## Installation
1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm start` to start the application

## Test
1. Run `npm test` to run the test cases

## Storybook
1. Run `npm run storybook` to run the storybook
2. Run `npm run build-storybook` to build the storybook static files

## Production
1. Run `npm run build` to build the application

## Usage
1. The application will be running on `http://localhost:3000/`

### Options
You can use your own options to the dropdown menu by changing the `options` prop in the `Dropdown` component
Options should be an array with the following structure:
```javascript
{
  label: 'Option 1',
  value: 'option1'
}
```

### Multi-select
You can enable multi-select by setting the `multiple` prop to `true` in the `Dropdown` component

### Filtering
You can enable filtering by setting the `withSearch` prop to `true` in the `Dropdown` component

