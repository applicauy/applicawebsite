import H5 from "@/components/h5";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import boxImg from '@/assets/shapes/box-benefits.webp';
import { apexFont, avigeaFont } from "@/assets/fonts";


export default function Industry({
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
        <div className="flex flex-col text-center mb-12">
            <div className="image-container">
                <Image
                    src={ image }
                    alt={ imageAlt }
                    className="rounded-lg img-industry"
                    loading="lazy"
                    height={150}
                    width={300}
                />
                <Image
                    src={ boxImg } 
                    alt="Border" 
                    className="absolute inset-16 pointer-events-none image-border-industry"
                    loading="lazy"
                    height={150}
                    width={300}
                />
            </div>
            <div className="mt-8 mb-4 px-12">
                <p className="text-3xl font-bold text-highlight leading-tight">{title}</p>
                <p className="text-xl text-white">{ description }</p>
            </div>
        </div>
    );
}
