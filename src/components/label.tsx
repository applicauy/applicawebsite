import { PropsWithChildren } from "react";

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
