import { PropsWithChildren } from "react";

/**
 * Displays an H6 heading component for mobile devices.
 *
 * @param children - The content within the H6 heading.
 * @param className - Additional classes to apply to the H6 element.
 * @returns The rendered H6 heading component.
 */
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
