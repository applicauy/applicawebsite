import { PropsWithChildren } from "react";

const MobileH6 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h6
            className={"leading-tight" + (className ? " " + className : "")}
            style={{ fontSize: "0.6rem" }}
        >
            {children}
        </h6>
    );
};

export default MobileH6;
