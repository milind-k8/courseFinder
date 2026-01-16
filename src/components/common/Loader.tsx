interface LoaderProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const Loader = ({ className = '', size = 'md' }: LoaderProps) => {
    const sizeClasses = {
        sm: 'h-6 w-6 border-2',
        md: 'h-10 w-10 border-4',
        lg: 'h-16 w-16 border-4'
    };

    return (
        <div className={`flex items-center justify-center w-full h-full min-h-[400px] ${className}`}>
            <div className={`animate-spin rounded-full ${sizeClasses[size]} border-[var(--color-brand-primary)] border-t-transparent`}></div>
        </div>
    );
};
