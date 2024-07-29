import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark as faRegCircleXmark } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const Dropdown = ({ options = [], withSearch = true, outlined = true, multiple = true, id = 'select' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const searchInputRef = useRef(null);
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const searchQuery = search.trim().toLowerCase();
        setFilteredOptions(
            options.filter(option => option.label && option.label.toLowerCase().includes(searchQuery))
        );
    }, [search, options]);

    useEffect(() => {
        if (isOpen && withSearch && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen, withSearch]);

    const handleSelect = (option) => {
        if (multiple) {
            setSelected(prevSelected =>
                prevSelected.includes(option.value)
                    ? prevSelected.filter(value => value !== option.value)
                    : [...prevSelected, option.value]
            );
        } else {
            setSelected([option.value]);
            setIsOpen(false);
        }
    };

    const handleRemoveSelected = (value) => {
        setSelected(prevSelected => prevSelected.filter(selectedValue => selectedValue !== value));
    };

    const isSelected = (value) => selected.includes(value);

    const highlightText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === highlight.toLowerCase() ? <span key={index} className="bg-cyan-400">{part}</span> : part
        );
    };

    return (
        <div ref={dropdownRef} className={`dropdown ${outlined ? "border border-gray-300" : "bg-gray-200"} w-full min-h-8 flex items-center gap-2 px-2 py-1 rounded relative`} onClick={() => setIsOpen(!isOpen)} id={id}>
            <div
                className="flex flex-wrap items-center gap-2 w-full cursor-pointer"
                role="combobox"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-owns="dropdown-listbox"
                aria-controls="dropdown-listbox"
                aria-labelledby="dropdown-label"
            >
                <FontAwesomeIcon icon={faChevronDown} className='absolute right-2' />
                {multiple && selected.map(value => (
                    <div key={value} className="bg-blue-100 drop-shadow px-2 py-1 rounded-full text-xs text-gray-500 flex items-center gap-1">
                        <span>{options.find(option => option.value === value)?.label}</span>
                        <FontAwesomeIcon icon={faRegCircleXmark} className='hover:text-gray-700' onClick={(e) => { e.stopPropagation(); handleRemoveSelected(value); }} />
                    </div>
                ))}
                {!multiple && selected.length > 0 && (
                    <div className="bg-blue-100 drop-shadow px-2 py-1 rounded-full text-xs text-gray-500 flex items-center gap-1">
                        <span>{options.find(option => option.value === selected[0])?.label}</span>
                        <FontAwesomeIcon icon={faRegCircleXmark} className='hover:text-gray-700' onClick={(e) => { e.stopPropagation(); setSelected([]); }} />
                    </div>
                )}
            </div>
            {isOpen && (
                <div className="absolute w-full -bottom-3 left-0 transform translate-y-full text-sm bg-white border rounded z-50 hover:z-[9999]" id="dropdown-listbox" role="listbox">
                    {withSearch && (
                        <div className="w-full border-b flex items-center gap-2 relative px-2 py-1" onClick={(e) => e.stopPropagation()}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-gray-400 flex-shrink-0' />
                            <input
                                type="text"
                                ref={searchInputRef}
                                className="w-full focus:outline-none p-1"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search..."
                                aria-controls="dropdown-listbox"
                            />
                            {search.trim() !== '' && (
                                <FontAwesomeIcon icon={faCircleXmark} className='text-gray-400 hover:text-gray-700 cursor-pointer' onClick={(e) => { e.stopPropagation(); setSearch(''); }} />
                            )}
                        </div>
                    )}
                    <div className="max-h-60 overflow-y-auto">
                        {filteredOptions.map(option => (
                            <div
                                key={option.value}
                                className={`p-2 cursor-pointer ${isSelected(option.value) ? 'bg-cyan-100' : 'hover:bg-gray-100'}`}
                                onClick={() => handleSelect(option)}
                                role="option"
                                aria-selected={isSelected(option.value)}
                            >
                                {highlightText(option.label, search)}
                            </div>
                        ))}
                        {filteredOptions.length === 0 && <div className="p-2 text-gray-500">No options found</div>}
                    </div>
                </div>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array,
    withSearch: PropTypes.bool,
    outlined: PropTypes.bool,
    multiple: PropTypes.bool
};

export default Dropdown;
