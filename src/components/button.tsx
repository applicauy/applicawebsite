import { MouseEventHandler, PropsWithChildren } from "react";
import Image from "next/image";
import arrowIcon from "@/assets/icons/arrow-right.svg";

export default function Button({
    arrowIconColor,
    onClick,
    children,
}: PropsWithChildren<{
    arrowIconColor: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}>) {
    return (
        <button
            onClick={onClick}
            className="flex content-center pe-4 ps-9 py-4 items-center border border-white rounded-full font-medium w-fit"
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
