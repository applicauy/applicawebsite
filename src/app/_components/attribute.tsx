import { PropsWithChildren } from "react";
import Image from "next/image";
import H5 from "@/components/h5";

/**
 * Renders an attribute component with an icon and children.
 *
 * @param icon - The icon to be displayed.
 * @param children - The content to be displayed inside the component.
 * @returns The rendered attribute component.
 */
export default function Attribute({
    icon,
    children,
}: PropsWithChildren<{ icon: any }>) {
    return (
        <div className="flex items-center md:flex-row flex-col">
            <div className="min-w-24 md:min-w-20 min-h-24 md:min-h-20 size-24 md:size-20">
                <Image src={icon} alt="Image" loading="lazy"/>
            </div>
            <span className = "text-xl md:text-2xl leading-tight text-center md:text-start">{children}</span>
        </div>
    );
}
