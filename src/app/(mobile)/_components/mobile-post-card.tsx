import Image, { StaticImageData } from "next/image";
import { MouseEventHandler, PropsWithChildren } from "react";
import arrowIcon from "@/assets/icons/arrow-right.webp";

// Component used to represent a post card.
export default function MobilePostCard({
    imageSrc,
    imageAlt,
    children,
}: PropsWithChildren<{
    imageSrc: string | StaticImageData;
    imageAlt: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}>) {
    return (
        <div className="rounded-tr-[50px] rounded-bl-[15px] w-[calc(50% - 10px)] flex flex-col overflow-hidden border border-secondary-bg m-[5px]">
            {/* Image container */}
            <div className="h-2/3">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-cover object-center h-full w-full"
                    loading="lazy"
                    width={100}
                    height={75}
                />
            </div>

            {/* Lower section container */}
            <div className="flex items-center bg-secondary-bg p-3 flex-grow">
                {/* Text container */}
                <div className="flex-1 pr-2">
                    <p
                        className="line-clamp-2 leading-tight"
                        style={{ fontSize: "0.5rem" }}
                    >
                        {children}
                    </p>
                </div>

                {/* Button container */}
                <div className="shrink-0">
                    <button className="rounded-full p-2 bg-highlight flex items-center justify-center" aria-label="Go to the post">
                        <Image
                            src={arrowIcon}
                            height={10}
                            width={10}
                            alt="Arrow Icon"
                            className="fill-current text-white"
                            loading="lazy"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
