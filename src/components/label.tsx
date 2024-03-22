import { PropsWithChildren } from "react";

/**
 * Renders a label component with an optional title and children.
 *
 * @param {object} props - The component props.
 * @param {boolean} props.required - Indicates if the label is required.
 * @param {string} props.title - The title of the label.
 * @param {ReactNode} props.children - The children elements to be rendered inside the label.
 * @returns {JSX.Element} The rendered label component.
 */
export default function Label({
    required,
    title,
    children,
}: PropsWithChildren<{ required?: boolean; title?: string }>) {
    return (
        <label className="block">
            {title && (
                <span className="text-xl">
                    {title}
                    {required && "*"}
                </span>
            )}

            {children}
        </label>
    );
}
