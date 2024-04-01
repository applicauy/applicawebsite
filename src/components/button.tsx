import { MouseEventHandler, PropsWithChildren } from "react";
import Image from "next/image";
import arrowIcon from "@/assets/icons/arrow-right.svg";

/**
 * Button component.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} [props.arrowIconColor="white"] - The color of the arrow icon.
 * @param {function} [props.onClick] - The click event handler.
 * @param {ReactNode} props.children - The content of the button.
 * @param {("button" | "submit" | "reset")} [props.type] - The type of the button.
 * @param {boolean} [props.disabled=false] - Whether the button is disabled.
 * @returns {JSX.Element} The rendered Button component.
 */
export default function Button({
    highlightedArrow = false,
    onClick,
    children,
    type,
    disabled = false,
}: PropsWithChildren<{
    highlightedArrow?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}>) {
    return (
        <button
            onClick={onClick}
            className="flex content-center pe-4 ps-9 py-4 items-center border border-white rounded-full font-medium w-fit text-4xl leading-none"
            type={type}
            disabled={disabled}
        >
            <span className="relative translate-y-[2px]">{children}</span>

            <div
                className={`rounded-full w-fit p-3 ms-9 ${
                    highlightedArrow ? "bg-highlight" : "bg-white"
                }`}
            >
                <Image
                    src={arrowIcon}
                    height={40}
                    width={40}
                    alt=""
                    color="transparent"
                />
            </div>
        </button>
    );
}
