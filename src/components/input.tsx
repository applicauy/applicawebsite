import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export default function Input({
    type = "text",
    id,
    name,
    onChange,
    placeholder,
    required,
    datalistValues,
}: {
    type?: HTMLInputTypeAttribute;
    id?: string;
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    datalistValues?: string[];
    required?: boolean;
}) {
    return (
        <>
            <input
                id={id}
                name={name}
                type={type}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                list={datalistValues ? `${name}-datalist` : undefined}
                className="mt-0 block w-full px-0.5 border-0 border-b border-[--highlight-color] focus:ring-0 focus:border-[--highlight-color] focus:border-b-2 bg-transparent"
            />
            {datalistValues && (
                <datalist id={`${name}-datalist`}>
                    {datalistValues.map((dlv, index) => (
                        <option key={index} value={dlv} />
                    ))}
                </datalist>
            )}
        </>
    );
}
