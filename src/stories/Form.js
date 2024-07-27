import 'form-select.css';

export const createFormSelect = ({
    id,
    withSearch = false,
    options = [],
    multiple = false,
    optionLabel = '-',
    onChange,
    outlined = false,
}) => {
    const select = document.createElement('select');
    select.id = id;
    select.multiple = multiple;
    select.addEventListener('change', onChange);

    if (outlined) {
        select.classList.add('form-select--outlined');
    }

    if (withSearch) {
        const search = document.createElement('input');
        search.type = 'search';
        search.placeholder = 'Search...';
        select.appendChild(search);
    }

    options.forEach((option) => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.text = option.text || optionLabel;
        select.appendChild(opt);
    });

    return select;
}