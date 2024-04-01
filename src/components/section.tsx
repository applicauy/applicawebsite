import { PropsWithChildren } from "react";

/**
 * Renders a section component with optional custom class name.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The optional class name for the section.
 * @param {ReactNode} props.children - The content to be rendered inside the section.
 * @returns {JSX.Element} The rendered section component.
 */
export default function Section({
    className,
    children,
}: PropsWithChildren<{
    className?: string;
}>) {
    return (
        <section
            className={"container mx-auto px-5 md:px-0" + (className ? " " + className : "")}
        >
            {children}
        </section>
    );
}
