import LazyImage from './LazyImage';

const BASE_URL = 'https://static.photos';

export type ImageSize = '200x200' | '320x240' | '640x360' | '1024x576' | '1200x630';

interface RandomImageProps {
    category: string;
    size: ImageSize;
    alt: string;
    id?: string;
    className?: string;
}
export default function RandomImage({
    category,
    size,
    alt,
    id,
    className,
}: RandomImageProps) {
    const imageUrl = `${BASE_URL}/${category}/${size}${id ? `?id=${id}` : ''}`;

    return (
        <LazyImage
            src={imageUrl}
            alt={alt}
            className={className}
        />
    );
}
