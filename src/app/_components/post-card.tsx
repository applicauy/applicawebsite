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
        <div className="rounded-tr-[80px] rounded-bl-[35px] h-[456px] w-[465px] flex flex-col overflow-hidden border border-[--background-color-86]">
            {/* Image container */}
            <div className="max-h-[75%]">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-cover object-center"
                />
            </div>

            {/* Lower section container */}
            <div className="grow flex bg-[--background-color-86] px-6 py-4 items-center gap-9">
                {/* Text container */}
                <div>
                    <h4 className="line-clamp-2 leading-tight">{children}</h4>
                </div>

                {/* Button container */}
                <div className="shrink-0">
                    <button className="rounded-full size-fit p-2.5 bg-[--highlight-color]">
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
