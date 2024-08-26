import FormSection from "./_sections/form-section";
import H2 from "@/components/h2";
import H4 from "@/components/h4";
import StrongText from "@/app/_components/strong-text";
import placeholderImg from "@/assets/placeholder-img-2.png";
import Image from "next/image";

export default function Contact() {
    return (
        <main className="container mx-auto min-h-screen flex flex-col md:flex-row gap-8 contact-section">
            <div className="relative md:w-1/2">
                <div className="relative md:w-2/3">
                    <H2 className="mb-4">
                        Looking for help to{" "}
                        <StrongText content="ramp up your development" />
                    </H2>
                    <H4 className="mb-16">Let&apos;s #MakeIThappen</H4>
                </div>
                <div className="mb-6">
                    <p className="md:text-2xl">
                        First, we need some information from you. <br />
                        Please, fill the form or just send us an email to{" "}
                        <a
                            href="mailto:info@applicacorp.com"
                            className="font-bold text-highlight"
                        >
                            info@applicacorp.com
                        </a>{" "}
                        and we will contact you shortly!
                    </p>
                </div>
                <div className="md:text-2xl">
                    <p className="inline">
                        Looking for <StrongText content="career?" />{" "}
                    </p>
                    <a
                        href="https://recruitcrm.io/jobs/applica_corp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline inline"
                    >
                        View all jobs opening
                    </a>
                </div>
                <div>
                    <Image
                        src={placeholderImg}
                        alt={"placeholder image"}
                        className="transform-image"
                    />
                </div>
            </div>

            <div className="md:w-1/2">
                <FormSection />
            </div>
        </main>
    );
}
