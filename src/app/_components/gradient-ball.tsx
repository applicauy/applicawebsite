import { avigeaFont } from "@/assets/fonts";
import H4 from "@/components/h4";
import H5 from "@/components/h5";

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
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className="rounded-full min-w-36 min-h-36 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col justify-center items-center">
            <H4 className={`${avigeaFont.className} font-normal`}>{title}</H4>
            <H5>{subtitle}</H5>
        </div>
    );
}
