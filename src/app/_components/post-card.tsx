import Image, { StaticImageData } from "next/image";
import { MouseEventHandler, PropsWithChildren } from "react";
import arrowIcon from "@/assets/icons/arrow-right.svg";

export default function PostCard({
    imageSrc,
    imageAlt,
    children,
}: PropsWithChildren<{
    imageSrc: string | StaticImageData;
    imageAlt: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}>) {
    return (
        <div className="rounded-tr-[100px] rounded-bl-[50px] overflow-hidden h-[400px] w-[400px] flex flex-col flex-nowrap">
            {/* Image container */}
            <div className="flex-grow max-h-[75%]">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full max-h-[100%] object-cover"
                />
            </div>

            {/* Lower section container */}
            <div className="flex bg-[--background-color-86] px-6 py-4 flex-shrink-0">
                {/* Text container */}
                <div className="flex-grow">{children}</div>

                {/* Button container */}
                <div className="flex-shrink-0">
                    <button className="rounded-full w-fit p-3 ms-9 bg-[--highlight-color]">
                        <Image
                            src={arrowIcon}
                            height={40}
                            width={40}
                            alt=""
                            color="transparent"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
