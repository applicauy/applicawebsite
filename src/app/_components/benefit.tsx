import '../styles/images.scss';
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import boxImg from '@/assets/shapes/box-benefits.webp';


export default function Benefit({
    imageSrc,
    imageAlt = "",
    children,
}: PropsWithChildren<{
    imageSrc: string | StaticImageData;
    imageAlt?: string;
}>) {
    return (
        <div className="flex flex-col text-center mb-5">
            <div className="image-container">
            <Image
                src={ imageSrc }
                alt={ imageAlt }
                className="rounded-lg img-benefit"
                loading="lazy"
                height={150}
                width={300}
            />
            <Image
                src={ boxImg } 
                alt="Border" 
                className="absolute inset-16 pointer-events-none image-border-benefit"
                loading="lazy"
                height={150}
                width={300}
            />
        </div>
            <span className="text-sm md:text-lg leading-tight">{children}</span>
        </div>
    );
}
