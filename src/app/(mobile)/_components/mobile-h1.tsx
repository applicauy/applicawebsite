import { PropsWithChildren } from "react";

const MobileH1 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h2
            className={
                "text-3xl md:text-4xl leading-none" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h2>
    );
};

export default MobileH1;
