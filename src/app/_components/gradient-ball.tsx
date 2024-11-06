import { avigeaFont } from "@/assets/fonts";
import H4 from "@/components/h4";
import H5 from "@/components/h5";
import CountUp from "react-countup";

/**
 * Renders a gradient ball component with a title and subtitle.
 *
 * @param props - The component props.
 * @param props.title - The title of the gradient ball.
 * @param props.subtitle - The subtitle of the gradient ball.
 * @returns The rendered gradient ball component.
 */
export default function GradientBall({
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
        <div className="rounded-full size-28 md:size-36 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col justify-center items-center">
            <H4 className={`${avigeaFont.className} font-normal`}>
            {
                    startSymbol && startSymbol
                }
                <CountUp end = { title } duration = { duration } separator="."></CountUp>
                {
                    endSymbol && endSymbol
                }
            </H4>
            <span className="text-sm md:text-lg leading-tight">{subtitle}</span>
        </div>
    );
}
