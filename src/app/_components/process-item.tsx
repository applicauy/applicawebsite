import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

export enum ContentPosition {
    Left,
    Right,
}

export default function ProcessItem({
    children,
    iconSrc,
    colored,
    contentPosition,
    customLineHeight,
    dashedEndOfLine,
    dashedEndOfLineHeight,
}: PropsWithChildren<{
    iconSrc: string | StaticImageData;
    colored?: boolean;
    contentPosition: ContentPosition;
    customLineHeight?: string;
    dashedEndOfLine?: boolean;
    dashedEndOfLineHeight?: string;
}>) {
    return (
        <div className={`flex gap-20 w-full min-h-36`}>
            {/* Content box */}
            <div className="w-full text-right py-2">
                {contentPosition === ContentPosition.Left && children}
            </div>

            {/* Central line box */}
            <div className="min-h-full w-fit flex flex-col items-center">
                {iconSrc ? (
                    <Image src={iconSrc} alt="" />
                ) : (
                    <div className="dot bg-white"></div>
                )}

                <div
                    className="w-[2px] bg-white"
                    style={{
                        minHeight: customLineHeight ?? "100%",
                    }}
                ></div>

                {dashedEndOfLine && (
                    <div
                        className="border border-white border-dashed"
                        style={{ minHeight: dashedEndOfLineHeight }}
                    ></div>
                )}
            </div>

            {/* Content box */}
            <div className="w-full text-left py-2">
                {contentPosition === ContentPosition.Right && children}
            </div>
        </div>
    );
}
