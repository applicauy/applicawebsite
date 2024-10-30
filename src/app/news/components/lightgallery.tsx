import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';

// Plugins opcionales
import lgZoom from 'lightgallery/plugins/zoom';
import Image from 'next/image';
import { Slide } from '@/utils/models/Slide';

export default function ImageCarousel(
    {
        images
    }:
    {
        images: Slide[]
    }
) {
    return (
        <div className="flex flex-row items-center justify-center w-full mt-16 mb-10">
            <LightGallery speed={500} plugins={[lgZoom]} selector=".gallery-item">
                <div className="grid-container grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-3 m-auto">
                    {images.map(({ image, alt }, index) => (
                        <a key={index} href={image} data-src={image} className="gallery-item h-32 md:h-64 transition-transform duration-300 ease-in-out transform hover:scale-105">
                            <Image
                                src={image}
                                alt={alt}
                                className="thumbnail"
                                objectFit='cover'
                                height={300}
                                width={500}
                                unoptimized
                            />
                        </a>
                    ))}
                </div>
            </LightGallery>
        </div>
    );
}
