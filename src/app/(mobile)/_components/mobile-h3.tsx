import { PropsWithChildren } from "react";

const MobileH3 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h3
            className={
                "text-sm md:text-3sm leading-tight" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h3>
    );
};

export default MobileH3;
