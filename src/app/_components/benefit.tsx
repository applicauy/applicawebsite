import H5 from "@/components/h5";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

export default function Benefit({
    imageSrc,
    imageAlt = "",
}: PropsWithChildren<{
    imageSrc: string | StaticImageData;
    imageAlt?: string;
}>) {
    return (
        <div className="flex flex-col text-center">
            <Image src={imageSrc} alt={imageAlt} />
            <H5>Improved cost-effectiveness</H5>
        </div>
    );
}
