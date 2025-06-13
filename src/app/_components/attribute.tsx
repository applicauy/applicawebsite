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
        <div className="flex items-center justify-center mdplus:flex-row flex-col mt-6 md:mt-0">
            <div className="min-w-28 lg:min-w-32 min-h-28 lg:min-h-32 size-28 lg:size-32 flex justify-center">
                <Image src={icon} alt="Image" loading="lazy" width={150} height={150} quality={80}/>
            </div>
            <div className="flex flex-col mdplus:ml-4 lg:ml-8">
                <p className="text-2xl lg:text-3xl font-semibold mb-4 mdplus:text-left text-center">{ title }</p>
                <span className = "text-xl lg:text-2xl leading-tight text-center mdplus:text-start">{children}</span>
            </div>
        </div>
    );
}
