import { PropsWithChildren } from "react";
import { avigeaFont } from "@/assets/fonts";

/**
 * Component to display the body of a process item in a mobile view.
 *
 * @param title - The title of the process item body.
 * @returns The rendered component for the process item body.
 */
export default function MobileProcessItemBody({
    title,
    children,
}: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <h3 className={`mb-2 text-md leading-4 ${avigeaFont.className}`}>
                {title}
            </h3>
            <p className="text-xs md:text-sm leading-tight">{children}</p>
        </>
    );
}
