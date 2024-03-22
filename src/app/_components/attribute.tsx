import { PropsWithChildren } from "react";
import Image from "next/image";

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
            <Image src={icon} alt="" width={80} />
            <h5>{children}</h5>
        </div>
    );
}
