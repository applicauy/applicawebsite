import { ChangeEventHandler } from "react";

export default function TextArea({
    id,
    name,
    placeholder,
    required,
    cols = 30,
    rows = 10,
    onChange,
}: {
    id?: string;
    name?: string;
    placeholder?: string;
    required?: boolean;
    cols?: number;
    rows?: number;
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}) {
    return (
        <textarea
            name={name}
            id={id}
            cols={cols}
            rows={rows}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            className="mt-4 block w-full px-3 border border-[--highlight-color] focus:ring-0 focus:border-[--highlight-color] focus:border-2 bg-transparent rounded-br-[50px] resize-none"
        />
    );
}
