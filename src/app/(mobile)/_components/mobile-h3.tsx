import { PropsWithChildren } from "react";

/**
 * Displays an H3 heading component for mobile devices.
 *
 * @param children - The content within the H3 heading.
 * @param className - Additional classes to apply to the H3 element.
 * @returns The rendered H3 heading component.
 */
const MobileH3 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h3
            className={
                "text-sm md:text-3sm leading-tight" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h3>
    );
};

export default MobileH3;
