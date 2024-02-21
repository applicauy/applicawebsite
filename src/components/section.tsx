import { PropsWithChildren } from "react";

export default function Section({
    className,
    children,
}: PropsWithChildren<{
    className?: string;
}>) {
    return (
        <section
            className={"container mx-auto" + (className ? " " + className : "")}
        >
            {children}
        </section>
    );
}
