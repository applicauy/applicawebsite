import { apexFont, avigeaFont } from "@/assets/fonts"; // Import necessary fonts
import MobileButton from "../_components/mobile-button"; // Import mobile button component
import MobileH2 from "../_components/mobile-h2"; // Import mobile H2 title component

/**
 * Component representing a section of the UI for starting a conversation.
 * @returns {JSX.Element} React element representing the UI section.
 */
export default function MobileLetsTalkSection(): JSX.Element {
    return (
        <section className="flex justify-center items-center w-full bg-gradient-to-br from-violet-900 from-15% via-fuchsia-700 to-[--background-color] to-85% px-0 mx-0 gap-6 pt-8 md:pt-16">
            <div className="flex flex-col text-center items-center w-full">
                <div className="w-full bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-600 flex flex-col justify-center items-center py-8 md:py-16 px-4 md:px-36">
                    <MobileH2 className={`font-normal ${apexFont.className}`}>
                        {" "}
                        Got a
                        <strong
                            className={`font-normal ${avigeaFont.className}`}
                        >
                            {" "}
                            project in mind{" "}
                        </strong>
                        ?
                    </MobileH2>
                    <br /> {/* Simple line break */}
                    <MobileButton>Let&apos;s talk!</MobileButton>{" "}
                    {/* Customized MobileButton with text "Let's talk!" */}
                </div>
            </div>
        </section>
    );
}
