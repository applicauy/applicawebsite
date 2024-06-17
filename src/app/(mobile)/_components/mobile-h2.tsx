import { PropsWithChildren } from "react";

const MobileH2 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h2
            className={
                "text-xl md:text-3xl leading-none" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h2>
    );
};

export default MobileH2;
