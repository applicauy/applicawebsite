import { avigeaFont } from "@/assets/fonts";

export default function GradientBall({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className="rounded-full min-w-36 min-h-36 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col justify-center items-center">
            <h4 className={`${avigeaFont.className} font-normal`}>{title}</h4>
            <h5>{subtitle}</h5>
        </div>
    );
}
