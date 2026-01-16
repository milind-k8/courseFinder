import { useState, useEffect } from 'react';
import type { ImgHTMLAttributes } from 'react';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    placeholderColor?: string;
}

/**
 * LazyImage component with native lazy loading and fade-in animation.
 * - Uses native loading="lazy" for browser-level lazy loading
 * - Shows a placeholder background while loading
 * - Smooth fade-in transition when image loads
 */
export default function LazyImage({
    src,
    alt,
    className = '',
    placeholderColor = 'var(--color-bg-secondary)',
    style,
    ...props
}: LazyImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    // Reset state when src changes
    useEffect(() => {
        setIsLoaded(false);
        setHasError(false);
    }, [src]);

    return (
        <div
            className="lazy-image-container"
            style={{
                position: 'relative',
                backgroundColor: placeholderColor,
                overflow: 'hidden',
                ...style,
            }}
        >
            {!hasError && (
                <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => setHasError(true)}
                    className={className}
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out',
                    }}
                    {...props}
                />
            )}
            {hasError && (
                <div
                    className="flex items-center justify-center text-[var(--color-text-secondary)] text-sm"
                    style={{ width: '100%', height: '100%' }}
                >
                    Failed to load image
                </div>
            )}
        </div>
    );
}
