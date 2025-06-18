import { PropsWithChildren } from "react";

const MobileH2 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h3
            className={
                "text-2xl mdplus:text-3xl leading-none" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h3>
    );
};

export default MobileH2;
