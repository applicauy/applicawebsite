import { PropsWithChildren } from "react";
import { avigeaFont } from "@/assets/fonts";

export default function MobileProcessItemBody({
    title,
    children,
}: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <h3 className={`mb-2 text-xl flex leading-4 ${avigeaFont.className}`}>
                {title}
            </h3>
            <p className="text-md md:text-sm flex leading-tight">{children}</p>
        </>
    );
}
