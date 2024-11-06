import H5 from "@/components/h5";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import boxImg from '@/assets/shapes/box-benefits.svg';


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
            />
            <Image
                src={ boxImg } 
                alt="Border" 
                className="absolute inset-16 pointer-events-none image-border-benefit"
            />
        </div>
            <span className="text-sm md:text-lg leading-tight">{children}</span>
        </div>
    );
}
