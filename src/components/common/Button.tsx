import React from 'react';


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'white';
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
    const baseStyles = "h-11 rounded border py-2.5 px-4 gap-2 flex items-center justify-center cursor-pointer text-base transition-all duration-200 ease-in-out w-fit";
    const variantStyles = {
        primary: "bg-[var(--color-brand-primary)] text-white border-transparent hover:opacity-90",
        outline: "bg-white text-[var(--color-brand-primary)] border-[var(--color-brand-primary)] hover:bg-[var(--color-bg-secondary)]",
        white: "bg-white text-[var(--color-brand-primary)] border-transparent hover:opacity-90"
    };

    return (
        <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
