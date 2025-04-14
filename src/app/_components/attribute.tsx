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
    title,
    children,
}: PropsWithChildren<{ icon: any, title: string }>) {
    return (
        <div className="flex items-center md:flex-row flex-col mt-6 md:mt-0">
            <div className="min-w-36 md:min-w-32 min-h-36 md:min-h-32 size-36 md:size-32">
                <Image src={icon} alt="Image" loading="lazy" width={150} height={150} quality={80}/>
            </div>
            <div className="flex flex-col md:ml-8">
                <p className="text-2xl md:text-3xl font-semibold mb-4 md:text-left text-center">{ title }</p>
                <span className = "text-xl md:text-2xl leading-tight text-center md:text-start">{children}</span>
            </div>
        </div>
    );
}
