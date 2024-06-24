import { PropsWithChildren } from "react";

const MobileH5 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h5
            className={
                "text-xs md:text-sm leading-tight" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h5>
    );
};

export default MobileH5;
