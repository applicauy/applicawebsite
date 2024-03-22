import { MouseEventHandler } from "react";

/**
 * Checkbox component.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.id] - The ID of the checkbox.
 * @param {string} [props.name] - The name of the checkbox.
 * @param {boolean} [props.checked] - Whether the checkbox is checked.
 * @param {MouseEventHandler<HTMLInputElement>} [props.onClick] - The click event handler for the checkbox.
 * @param {boolean} [props.defaultChecked=true] - Whether the checkbox is checked by default.
 * @returns {JSX.Element} The rendered Checkbox component.
 */
export default function Checkbox({
    id,
    name,
    checked,
    onClick,
    defaultChecked = true,
}: {
    id?: string;
    name?: string;
    checked?: boolean;
    onClick?: MouseEventHandler<HTMLInputElement>;
    defaultChecked?: boolean;
}) {
    return (
        <input
            id={id}
            name={name}
            type="checkbox"
            className="appearance-none default:ring-2 ring-[--highlight-color] focus:ring-[--highlight-color] checked:text-[--highlight-color]"
            checked={checked}
            onClick={onClick}
            defaultChecked={defaultChecked}
        />
    );
}
