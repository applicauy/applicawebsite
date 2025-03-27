import { PropsWithChildren } from "react";

const H3 = ({
    children,
    className,
    subtitle
}: PropsWithChildren<{ className?: string, subtitle?: boolean }>) => {
    return (
        <h3 className={`${ subtitle ? 'text-2xl md:text-3xl' : 'text-xl md:text-4xl' } leading-tight` + (className ? " " + className : "")}>
            {children}
        </h3>
    );
};

export default H3;
