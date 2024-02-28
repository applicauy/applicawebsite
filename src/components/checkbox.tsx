import { MouseEventHandler } from "react";

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
