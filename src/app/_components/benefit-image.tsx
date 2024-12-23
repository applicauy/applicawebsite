import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import boxImg from '@/assets/shapes/box-benefits.svg';

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
            />
            <Image
                src={ boxImg } 
                alt="Border" 
                className="absolute inset-16 pointer-events-none image-border-benefit"
            />
        </div>
    );
}