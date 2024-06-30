import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";
import MobileH5 from "./mobile-h5";

/**
 * Common mobile component for displaying a benefit.
 * @param {PropsWithChildren<{ imageSrc: string | StaticImageData; imageAlt?: string; }>} param0 Props for the MobileBenefit component
 * @returns {JSX.Element} Returns a React element representing the MobileBenefit component
 */
export default function MobileBenefit({
    children,
    imageSrc,
    imageAlt = "",
}: PropsWithChildren<{
    imageSrc: string | StaticImageData;
    imageAlt?: string;
}>): JSX.Element {
    return (
        <div className="flex flex-col text-center">
            <Image src={imageSrc} alt={imageAlt} />
            <MobileH5>{children}</MobileH5>
        </div>
    );
}
