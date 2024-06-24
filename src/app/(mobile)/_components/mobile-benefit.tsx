import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import MobileH5 from "./mobile-h5";

export default function MobileBenefit({
    children,
    imageSrc,
    imageAlt = "",
}: PropsWithChildren<{
    imageSrc: string | StaticImageData;
    imageAlt?: string;
}>) {
    return (
        <div className="flex flex-col text-center">
            <Image src={imageSrc} alt={imageAlt} />
            <MobileH5>{children}</MobileH5>
        </div>
    );
}
