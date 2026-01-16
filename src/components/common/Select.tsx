import React from 'react';
import ReactSelect, { type Props as ReactSelectProps, type StylesConfig, components } from 'react-select';

interface SelectOption {
    label: string;
    value: string;
}

interface SelectProps extends Omit<ReactSelectProps<SelectOption, false>, 'styles'> {
    icon?: React.ReactNode;
    className?: string;
}

const Select: React.FC<SelectProps> = ({ icon, className = '', ...props }) => {
    const customStyles: StylesConfig<SelectOption, false> = {
        control: (base, state) => ({
            ...base,
            minHeight: '44px',
            borderRadius: '8px',
            borderColor: state.isFocused ? 'var(--color-brand-primary)' : 'var(--color-border-subtle)',
            boxShadow: state.isFocused ? '0 0 0 2px var(--color-brand-primary-focus)' : 'none',
            paddingLeft: icon ? '12px' : '16px',
            paddingRight: '16px',
            backgroundColor: 'var(--color-bg-primary)',
            cursor: 'pointer',
            '&:hover': {
                borderColor: state.isFocused ? 'var(--color-brand-primary)' : 'var(--color-border-light)',
            },
        }),
        valueContainer: (base) => ({
            ...base,
            padding: '2px 0',
            paddingLeft: icon ? '8px' : '0',
        }),
        placeholder: (base) => ({
            ...base,
            color: 'var(--color-text-placeholder)',
            fontSize: '14px',
            fontWeight: '400',
        }),
        singleValue: (base) => ({
            ...base,
            color: 'var(--color-text-primary)',
            fontSize: '14px',
        }),
        input: (base) => ({
            ...base,
            color: 'var(--color-text-primary)',
            fontSize: '14px',
        }),
        menu: (base) => ({
            ...base,
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px var(--color-shadow-dropdown), 0 2px 4px -1px var(--color-shadow-dropdown)',
            border: '1px solid var(--color-border-subtle)',
            marginTop: '4px',
        }),
        menuList: (base) => ({
            ...base,
            padding: '4px',
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
                ? 'var(--color-brand-primary)'
                : state.isFocused
                    ? 'var(--color-bg-option-hover)'
                    : 'transparent',
            color: state.isSelected ? 'var(--color-bg-primary)' : 'var(--color-text-primary)',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '14px',
            padding: '8px 12px',
            '&:active': {
                backgroundColor: state.isSelected ? 'var(--color-brand-primary)' : 'var(--color-border-subtle)',
            },
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            color: 'var(--color-icon-muted)',
            padding: '8px',
            transition: 'transform 0.2s',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            '&:hover': {
                color: 'var(--color-text-muted)',
            },
        }),
    };

    const Control = ({ children, ...props }: any) => (
        <components.Control {...props}>
            {icon && (
                <div className="flex items-center justify-center ml-3" style={{ width: '20px', height: '20px' }}>
                    {icon}
                </div>
            )}
            {children}
        </components.Control>
    );

    return (
        <ReactSelect
            {...props}
            styles={customStyles}
            components={{ Control }}
            className={className}
            classNamePrefix="react-select"
        />
    );
};

export default Select;
