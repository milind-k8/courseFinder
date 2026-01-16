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
            borderColor: state.isFocused ? 'var(--color-brand-primary)' : '#E5E7EB',
            boxShadow: state.isFocused ? '0 0 0 2px rgba(59, 130, 246, 0.1)' : 'none',
            paddingLeft: icon ? '12px' : '16px',
            paddingRight: '16px',
            backgroundColor: '#FFFFFF',
            cursor: 'pointer',
            '&:hover': {
                borderColor: state.isFocused ? 'var(--color-brand-primary)' : '#D1D5DB',
            },
        }),
        valueContainer: (base) => ({
            ...base,
            padding: '2px 0',
            paddingLeft: icon ? '8px' : '0',
        }),
        placeholder: (base) => ({
            ...base,
            color: '#9CA3AF',
            fontSize: '14px',
            fontWeight: '400',
        }),
        singleValue: (base) => ({
            ...base,
            color: '#374151',
            fontSize: '14px',
        }),
        input: (base) => ({
            ...base,
            color: '#374151',
            fontSize: '14px',
        }),
        menu: (base) => ({
            ...base,
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            border: '1px solid #E5E7EB',
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
                    ? '#F3F4F6'
                    : 'transparent',
            color: state.isSelected ? '#FFFFFF' : '#374151',
            cursor: 'pointer',
            borderRadius: '4px',
            fontSize: '14px',
            padding: '8px 12px',
            '&:active': {
                backgroundColor: state.isSelected ? 'var(--color-brand-primary)' : '#E5E7EB',
            },
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        dropdownIndicator: (base, state) => ({
            ...base,
            color: '#9CA3AF',
            padding: '8px',
            transition: 'transform 0.2s',
            transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            '&:hover': {
                color: '#6B7280',
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
