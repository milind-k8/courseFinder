import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ icon, className = '', ...props }) => {
    return (
        <div className={`min-w-[356px] h-10 rounded-[5px] py-2 px-[15px] gap-2 flex items-center bg-white border border-[var(--color-border-subtle)] transition-colors duration-200 ease focus-within:border-[var(--color-brand-primary)] ${className}`}>
            {icon && <span className="flex items-center justify-center text-[var(--color-text-secondary)]" aria-hidden="true">{icon}</span>}
            <input className="border-none outline-none w-full h-full bg-transparent font-[inherit] text-[14px] font-normal text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]" {...props} />
        </div>
    );
};

export default Input;
