import { PropsWithChildren } from "react";

/**
 * Displays an H5 heading component for mobile devices.
 *
 * @param children - The content within the H5 heading.
 * @param className - Additional classes to apply to the H5 element.
 * @returns The rendered H5 heading component.
 */
const MobileH5 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h5
            className={
                "text-xs md:text-sm leading-tight" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h5>
    );
};

export default MobileH5;
