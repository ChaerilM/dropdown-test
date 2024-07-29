"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Dropdown = _ref => {
  var _options$find2;
  let {
    options = [],
    withSearch = true,
    outlined = true,
    multiple = true,
    id = 'select'
  } = _ref;
  const [isOpen, setIsOpen] = (0, _react.useState)(false);
  const dropdownRef = (0, _react.useRef)(null);
  const searchInputRef = (0, _react.useRef)(null);
  const [selected, setSelected] = (0, _react.useState)([]);
  const [search, setSearch] = (0, _react.useState)('');
  const [filteredOptions, setFilteredOptions] = (0, _react.useState)(options);
  (0, _react.useEffect)(() => {
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
  (0, _react.useEffect)(() => {
    const searchQuery = search.trim().toLowerCase();
    setFilteredOptions(options.filter(option => option.label && option.label.toLowerCase().includes(searchQuery)));
  }, [search, options]);
  (0, _react.useEffect)(() => {
    if (isOpen && withSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, withSearch]);
  const handleSelect = option => {
    if (multiple) {
      setSelected(prevSelected => prevSelected.includes(option.value) ? prevSelected.filter(value => value !== option.value) : [...prevSelected, option.value]);
    } else {
      setSelected([option.value]);
      setIsOpen(false);
    }
  };
  const handleRemoveSelected = value => {
    setSelected(prevSelected => prevSelected.filter(selectedValue => selectedValue !== value));
  };
  const isSelected = value => selected.includes(value);
  const highlightText = (text, highlight) => {
    const parts = text.split(new RegExp("(".concat(highlight, ")"), 'gi'));
    return parts.map((part, index) => part.toLowerCase() === highlight.toLowerCase() ? /*#__PURE__*/_react.default.createElement("span", {
      key: index,
      className: "bg-cyan-400"
    }, part) : part);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: dropdownRef,
    className: "dropdown ".concat(outlined ? "border border-gray-300" : "bg-gray-200", " w-full min-h-8 flex items-center gap-2 px-2 py-1 rounded relative"),
    onClick: () => setIsOpen(!isOpen),
    id: id
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-wrap items-center gap-2 w-full cursor-pointer",
    role: "combobox",
    "aria-haspopup": "listbox",
    "aria-expanded": isOpen,
    "aria-owns": "dropdown-listbox",
    "aria-controls": "dropdown-listbox",
    "aria-labelledby": "dropdown-label"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faChevronDown,
    className: "absolute right-2"
  }), multiple && selected.map(value => {
    var _options$find;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: value,
      className: "bg-blue-100 drop-shadow px-2 py-1 rounded-full text-xs text-gray-500 flex items-center gap-1"
    }, /*#__PURE__*/_react.default.createElement("span", null, (_options$find = options.find(option => option.value === value)) === null || _options$find === void 0 ? void 0 : _options$find.label), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeRegularSvgIcons.faCircleXmark,
      className: "hover:text-gray-700",
      onClick: e => {
        e.stopPropagation();
        handleRemoveSelected(value);
      }
    }));
  }), !multiple && selected.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-blue-100 drop-shadow px-2 py-1 rounded-full text-xs text-gray-500 flex items-center gap-1"
  }, /*#__PURE__*/_react.default.createElement("span", null, (_options$find2 = options.find(option => option.value === selected[0])) === null || _options$find2 === void 0 ? void 0 : _options$find2.label), /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeRegularSvgIcons.faCircleXmark,
    className: "hover:text-gray-700",
    onClick: e => {
      e.stopPropagation();
      setSelected([]);
    }
  }))), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute w-full bottom-0 left-0 transform translate-y-full text-sm bg-white border rounded",
    id: "dropdown-listbox",
    role: "listbox"
  }, withSearch && /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full border-b flex items-center gap-2 relative px-2 py-1",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faMagnifyingGlass,
    className: "text-gray-400 flex-shrink-0"
  }), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    ref: searchInputRef,
    className: "w-full focus:outline-none p-1",
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Search...",
    "aria-controls": "dropdown-listbox"
  }), search.trim() !== '' && /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faCircleXmark,
    className: "text-gray-400 hover:text-gray-700 cursor-pointer",
    onClick: e => {
      e.stopPropagation();
      setSearch('');
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "max-h-60 overflow-y-auto"
  }, filteredOptions.map(option => /*#__PURE__*/_react.default.createElement("div", {
    key: option.value,
    className: "p-2 cursor-pointer ".concat(isSelected(option.value) ? 'bg-cyan-100' : 'hover:bg-gray-100'),
    onClick: () => handleSelect(option),
    role: "option",
    "aria-selected": isSelected(option.value)
  }, highlightText(option.label, search))), filteredOptions.length === 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "p-2 text-gray-500"
  }, "No options found"))));
};
Dropdown.propTypes = {
  options: _propTypes.default.array,
  withSearch: _propTypes.default.bool,
  outlined: _propTypes.default.bool,
  multiple: _propTypes.default.bool
};
var _default = exports.default = Dropdown;
