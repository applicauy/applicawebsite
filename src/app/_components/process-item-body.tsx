import H3 from "@/components/h3";
import H5 from "@/components/h5";
import { PropsWithChildren } from "react";

// Component used to represent a process item's body. It should be used inside a ProcessItem component.
export default function ProcessItemBody({
    title,
    children,
}: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <H3 className="font-medium mb-2">{title}</H3>
            <H5>{children}</H5>
        </>
    );
}
