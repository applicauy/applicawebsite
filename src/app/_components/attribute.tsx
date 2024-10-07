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
        <div className="flex items-center">
            <div className="min-w-10 md:min-w-20 min-h-10 md:min-h-20 size-10 md:size-20">
                <Image src={icon} alt="" />
            </div>
            <h5 className = "text-2xl">{children}</h5>
        </div>
    );
}
