import { avigeaFont } from "@/assets/fonts";
import Button from "../../components/button";
export default function LetsTalkSection() {
    return (
        <div className="flex justify-center items-center min-h-80 w-full gap-8 bg-gradient-to-br from-violet-900 from-15% via-fuchsia-700 to-[--background-color] to-85%">
            <h3>
                Got a{" "}
                <strong className={`font-normal ${avigeaFont.className}`}>
                    project in mind
                </strong>
                ?
            </h3>
            <Button>Let&apos;s talk!</Button>
        </div>
    );
}
