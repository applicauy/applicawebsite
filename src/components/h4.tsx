import { PropsWithChildren } from "react";

const H4 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h4
            className={
                "text-2xl md:text-3xl leading-none" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h4>
    );
};

export default H4;
