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
    arrowIconColor = "white",
    onClick,
    children,
    type,
    disabled = false,
}: PropsWithChildren<{
    arrowIconColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}>) {
    return (
        <button
            onClick={onClick}
            className="flex content-center pe-4 ps-9 py-4 items-center border border-white rounded-full font-medium w-fit"
            type={type}
            disabled={disabled}
        >
            <span className="relative translate-y-[2px]">{children}</span>

            <div
                className="rounded-full w-fit p-3 ms-9"
                style={{
                    backgroundColor: arrowIconColor,
                }}
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
