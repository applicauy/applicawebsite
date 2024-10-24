import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import MobileH5 from "./mobile-h5";
import boxImg from '@/assets/shapes/box-benefits.svg';
import MobileH2 from "./mobile-h2";

export default function MobileBenefit({
    children,
    imageSrc,
    imageAlt = "",
}: PropsWithChildren<{
    imageSrc: string | StaticImageData;
    imageAlt?: string;
}>) {
    return (
        <div className="flex flex-col text-center mb-10">
            <div className="image-container mb-5">
                <Image
                    src={ imageSrc }
                    alt={ imageAlt }
                    className="rounded-lg img-benefit-mobile"
                />
                <Image
                    src={ boxImg } 
                    alt="Border" 
                    className="absolute inset-16 pointer-events-none image-border-benefit-mobile"
                />
            </div>
            <MobileH2>{children}</MobileH2>
        </div>
    );
}
