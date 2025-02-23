import { PropsWithChildren } from "react";

const H1Main = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h1
            className={
                "text-lg md:text-3xl text-violet" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h1>
    );
};

export default H1Main;
