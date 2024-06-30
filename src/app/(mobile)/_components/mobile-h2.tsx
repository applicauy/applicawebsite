import { PropsWithChildren } from "react";

/**
 * Displays an H2 heading component for mobile devices.
 *
 * @param children - The content within the H2 heading.
 * @param className - Additional classes to apply to the H2 element.
 * @returns The rendered H2 heading component.
 */
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
