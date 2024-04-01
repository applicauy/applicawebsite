import { PropsWithChildren } from "react";

const H3 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h3 className={"text-xl md:text-4xl leading-tight" + (className ? " " + className : "")}>
            {children}
        </h3>
    );
};

export default H3;
