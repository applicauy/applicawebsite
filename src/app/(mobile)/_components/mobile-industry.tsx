import '../../styles/images.scss';
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import boxImg from '@/assets/shapes/box-benefits.webp';

export default function MobileIndustry({
    image,
    imageAlt,
    title,
    description
}: PropsWithChildren<{
    image: string | StaticImageData;
    imageAlt: string;
    title: string;
    description: string;
}>) {
    return (
        <div className="flex flex-col text-center mb-10">
            <div className="image-container mb-8">
                <Image
                    src={ image }
                    alt={ imageAlt }
                    className="rounded-lg img-industry-mobile"
                    loading="lazy"
                    height={150}
                    width={300}
                />
                <Image
                    src={ boxImg } 
                    alt="Border" 
                    className="absolute inset-16 pointer-events-none image-border-industry-mobile"
                    loading="lazy"
                    height={150}
                    width={300}
                />
            </div>
            <p className="text-2xl font-semibold text-highlight text-center mb-4">{title}</p>
            <p className="text-xl text-white text-center mb-4">{description}</p>
        </div>
    );
}
