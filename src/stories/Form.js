// import './form-select.css';

export const createFormSelect = ({
    id,
    withSearch = false,
    options = [],
    multiple = false,
    optionLabel = '-',
    onChange,
    outlined = true,
}) => {

    const container = document.createElement('div');
    container.classList.add('mb-4');

    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = 'Label';
    label.classList.add('block', 'text-sm', 'font-medium', 'text-gray-700');
    container.appendChild(label);

    const selectContainer = document.createElement('div');
    selectContainer.classList.add('relative', 'mt-1');
    container.appendChild(selectContainer);

    const select = document.createElement('select');
    select.id = id;
    select.multiple = multiple;
    select.addEventListener('change', onChange);
    select.classList.add('block', 'w-full', 'pl-3', 'pr-10', 'py-2', 'text-base', 'border-gray-300', 'focus:outline-none', 'focus:ring-indigo-500', 'focus:border-indigo-500', 'sm:text-sm', 'rounded-md');
    selectContainer.appendChild(select);

    if (outlined) {
        select.classList.add('form-select--outlined');
    }

    if (withSearch) {
        const search = document.createElement('input');
        search.type = 'search';
        search.placeholder = 'Search...';
        search.classList.add('block', 'w-full', 'pl-3', 'pr-10', 'py-2', 'mb-2', 'text-base', 'border-gray-300', 'focus:outline-none', 'focus:ring-indigo-500', 'focus:border-indigo-500', 'sm:text-sm', 'rounded-md');
        search.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            Array.from(select.options).forEach(option => {
                const optionText = option.text.toLowerCase();
                option.style.display = optionText.includes(searchTerm) ? '' : 'none';
            });
        });
        selectContainer.appendChild(search);
    }

    options.forEach((option) => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text || optionLabel;
        select.appendChild(opt);
    });


    return container;
}