import { PropsWithChildren, ReactNode } from "react";

export enum ContentPosition {
    Left,
    Right,
}


/**
 * Renders a process item component.
 *
 * @param children - The content of the process item.
 * @param customIcon - An optional custom icon to display.
 * @param colored - A boolean indicating whether the process item should be colored.
 * @param contentPosition - The position of the content within the process item.
 * @param customLineHeight - An optional custom line height for the central line.
 * @param dashedEndOfLine - A boolean indicating whether the end of the line should be dashed.
 * @param dashedEndOfLineHeight - The height of the dashed end of the line.
 * @param className - An optional class name for the process item.
 * @returns The rendered process item component.
 */
export default function ProcessItem({
    children,
    customIcon,
    colored,
    contentPosition,
    customLineHeight,
    dashedEndOfLine,
    dashedEndOfLineHeight,
    className,
}: PropsWithChildren<{
    customIcon?: ReactNode;
    colored?: boolean;
    contentPosition: ContentPosition;
    customLineHeight?: string;
    dashedEndOfLine?: boolean;
    dashedEndOfLineHeight?: string;
    className?: string;
}>) {
    return (
        <div
            className={`flex gap-20 w-full min-h-36${
                className ? " " + className : ""
            }`}
        >
            {/* Content box */}
            <div className="w-full text-right py-2">
                {contentPosition === ContentPosition.Left && children}
            </div>

            {/* Central line box */}
            <div className="min-h-full w-fit flex flex-col items-center">
                {customIcon ? customIcon : <div className="dot bg-white"></div>}

                <div
                    className="w-[1px] bg-white min-h-20"
                    style={{
                        height: customLineHeight ?? "100%",
                    }}
                ></div>

                {dashedEndOfLine && (
                    <div
                        className="border-r border-white border-dashed"
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
