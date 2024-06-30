import { PropsWithChildren } from "react";

/**
 * Displays an H4 heading component for mobile devices.
 *
 * @param children - The content within the H4 heading.
 * @param className - Additional classes to apply to the H4 element.
 * @returns The rendered H4 heading component.
 */
const MobileH4 = ({
    children,
    className,
}: PropsWithChildren<{ className?: string }>) => {
    return (
        <h4
            className={
                "text-2xl md:text-3xl leading-none" +
                (className ? " " + className : "")
            }
        >
            {children}
        </h4>
    );
};

export default MobileH4;
