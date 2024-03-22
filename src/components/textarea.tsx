import { ChangeEventHandler } from "react";

/**
 * Renders a textarea input element.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.id] - The ID of the textarea.
 * @param {string} [props.name] - The name of the textarea.
 * @param {string} [props.placeholder] - The placeholder text for the textarea.
 * @param {boolean} [props.required] - Indicates whether the textarea is required.
 * @param {number} [props.cols=30] - The number of columns for the textarea.
 * @param {number} [props.rows=10] - The number of rows for the textarea.
 * @param {Function} [props.onChange] - The event handler for the textarea's change event.
 * @returns {JSX.Element} The rendered textarea component.
 */
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
