import { PropsWithChildren } from "react";

const H2 = ({
    children,
    className,
    subtitle
}: PropsWithChildren<{ className?: string, subtitle?: boolean }>) => {
    return (
        <h2 className={`${ subtitle ? 'text-2xl md:text-3xl' : 'text-4xl lg:text-6xl' }  leading-none` + (className ? " " + className : "")}>
            {children}
        </h2>
    );
};

export default H2;
