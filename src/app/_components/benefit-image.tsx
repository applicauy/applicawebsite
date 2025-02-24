import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import boxImg from '@/assets/shapes/box-benefits.webp';

export default function BenefitImage({
    imageSrc,
    imageAlt = "",
}: PropsWithChildren<{
    imageSrc: string | StaticImageData;
    imageAlt?: string;
}>) {
    return (
        <div className="image-container">
            <Image
                src={ imageSrc }
                alt={ imageAlt }
                className="rounded-lg img-benefit"
                loading="lazy"
                width={500}
                height={350}
            />
            <Image
                src={ boxImg } 
                alt="Border" 
                className="absolute inset-16 pointer-events-none image-border-benefit"
                loading="lazy"
                width={500}
                height={350}
            />
        </div>
    );
}