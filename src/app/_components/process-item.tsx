'use client'

import { PropsWithChildren, ReactNode, useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

import '../styles/process.scss';

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

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    // Uso de IntersectionObserver para detectar cuándo el elemento está en la vista
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            }
        },
        {
            threshold: 0.7, // Activar cuando el 50% del elemento esté en la vista
        }
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        if (ref.current) {
            observer.disconnect();
        }
        };
    }, []);

    const itemVariants = {
        hidden: { opacity: 0, x: contentPosition === ContentPosition.Left ? -100 : 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            ref={ref}
            className={`flex gap-5 md:gap-20 w-full min-h-36${className ? " " + className : ""}`}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={itemVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            {/* Content box */}
            <div className="w-full text-right pb-2 mt-[-10px]">
                {contentPosition === ContentPosition.Left && children}
            </div>

            {/* Central line box */}
            <div className="min-h-full w-fit flex flex-col items-center">
                {customIcon ? (
                    customIcon
                ) : (
                    <div
                        className={`dot ${colored ? "bg-highlight" : "bg-white"}`}
                    ></div>
                )}

                <div
                    className={`w-[1px] min-h-20 ${colored ? "bg-highlight" : "bg-white"}`}
                    style={{
                        height: customLineHeight ?? "100%",
                    }}
                ></div>

                {dashedEndOfLine && (
                    <div
                        className={`border-r border-dashed ${colored ? "border-highlight" : "border-white"}`}
                        style={{ minHeight: dashedEndOfLineHeight }}
                    ></div>
                )}
            </div>

            {/* Content box */}
            <div className="w-full text-left pb-2 mt-[-4px]">
                {contentPosition === ContentPosition.Right && children}
            </div>
        </motion.div>
    );
}
