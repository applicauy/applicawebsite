import { PropsWithChildren } from "react";

const H5 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h5
            className={
                "text-md md:text-lg leading-tight" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h5>
    );
};

export default H5;
