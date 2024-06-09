import { PropsWithChildren } from "react";
import { avigeaFont } from "@/assets/fonts";
import H3 from "@/components/h3";

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
