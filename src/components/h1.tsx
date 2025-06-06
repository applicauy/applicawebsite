import { PropsWithChildren } from "react";

const H1 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h1
            className={
                "text-3xl md:text-6xl" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h1>
    );
};

export default H1;
