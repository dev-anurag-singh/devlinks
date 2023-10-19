import { useEffect, useState } from 'react';
// ICONS
import { HiArrowDownOnSquare } from 'react-icons/hi2';
import IconChevronDown from '../assets/icons/icon-chevron-down.svg?react';

function Select({ onChange, defaultValue, options }) {
  const defValue = {
    icon: HiArrowDownOnSquare,
    label: 'Select a Platform',
    value: 'empty',
  };

  const [selected, setSelected] = useState(
    options.find((option) => option.value === defaultValue) || defValue,
  );

  const [isSelectorOpen, setIsSelectorOpen] = useState(false);

  useEffect(() => {
    document.addEventListener('click', () => {
      setIsSelectorOpen(false);
    });

    return document.removeEventListener('click', () => {
      setIsSelectorOpen(false);
    });
  });

  const renderSelectListItem = () => {
    return options.map(({ value, label, icon: Icon }) => {
      return (
        <li
          key={value}
          onClick={() => {
            setSelected({ value, label, icon: Icon });
            onChange(value);
          }}
          className={`flex ${
            selected && selected.label === label ? 'select-item-active' : ''
          } cursor-pointer items-center gap-3 border-b border-grey-border py-3`}
        >
          <Icon />
          <span>{label}</span>
        </li>
      );
    });
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setIsSelectorOpen((state) => !state);
      }}
      className="relative flex flex-col   text-grey-dark"
    >
      <div
        className={`flex ${
          isSelectorOpen ? 'border-purple shadow-input' : 'border-grey-border'
        } cursor-pointer items-center  gap-3 rounded-lg border bg-white px-4 py-3`}
      >
        <span>{selected.icon()}</span>
        <span>{selected.label}</span>

        <span
          className={`ml-auto transition-transform ${
            isSelectorOpen && 'rotate-180'
          }`}
        >
          <IconChevronDown />
        </span>
      </div>
      {isSelectorOpen && (
        <ul className="absolute top-16 z-50 h-64 w-full overflow-y-scroll rounded-lg bg-white px-4 shadow-sm">
          {renderSelectListItem()}
        </ul>
      )}
    </div>
  );
}

export default Select;
