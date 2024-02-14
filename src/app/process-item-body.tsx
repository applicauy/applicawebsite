import { PropsWithChildren } from "react";

export default function ProcessItemBody({
    title,
    children,
}: PropsWithChildren<{ title: string }>) {
    return (
        <>
            <h3 className="font-medium mb-2">{title}</h3>
            <h5>{children}</h5>
        </>
    );
}
