import { PropsWithChildren } from "react";

const H2 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h2 className={"text-3xl md:text-6xl leading-none" + (className ? " " + className : "")}>
            {children}
        </h2>
    );
};

export default H2;
