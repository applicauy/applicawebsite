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
            {/* TODO Finish this implementation */}
            <div className="w-14 h-14 ">
                <Image src={icon} alt="" layout="responsive" />
            </div>
            <H5>{children}</H5>
        </div>
    );
}
