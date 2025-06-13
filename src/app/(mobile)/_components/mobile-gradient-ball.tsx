import { avigeaFont } from "@/assets/fonts";
import MobileH4 from "./mobile-h4";
import MobileH6 from "./mobile-h6";
import CountUp from 'react-countup';

/**
 * Renders a gradient ball component with a title and subtitle.
 *
 * @param props - The component props.
 * @param props.title - The title of the gradient ball.
 * @param props.subtitle - The subtitle of the gradient ball.
 * @returns The rendered gradient ball component.
 */
export default function MobileGradientBall({
    title,
    startSymbol,
    endSymbol,
    duration,
    subtitle,
}: {
    title: number;
    startSymbol?: string;
    endSymbol?: string;
    duration: number;
    subtitle: string;
}) {
    return (
        <div className="rounded-full p-6 w-40 h-40 lg:w-24 lg:h-24 xl:w-36 xl:h-36 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col justify-center items-center leading-tight">
            <MobileH4
                className={`${avigeaFont.className} font-normal text-3xl lg:text-base`}
            >
                {
                    startSymbol && startSymbol
                }
                <CountUp
                    end = { title } 
                    duration = { duration } 
                    decimals = { Number.isInteger(title) ? 0 : String(title).split('.')[1]?.length || 1 } 
                    separator="."
                ></CountUp>
                {
                    endSymbol && endSymbol
                }
            </MobileH4>
            <span className="text-lg text-center leading-none">{subtitle}</span>
        </div>
    );
}
