import { PropsWithChildren } from "react";

const H3 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h3 className={"text-xl" + (className ? " " + className : "")}>
            {children}
        </h3>
    );
};

export default H3;
