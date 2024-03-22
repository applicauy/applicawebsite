import Image, { StaticImageData } from "next/image";

/**
 * Renders a technology slide component.
 *
 * @param {Object} props - The component props.
 * @param {string | StaticImageData} props.src - The source of the image to be displayed.
 * @param {string} [props.alt=""] - The alternative text for the image.
 * @returns {JSX.Element} The rendered technology slide component.
 */
export default function TechnologySlide({
    src,
    alt = "",
}: {
    src: string | StaticImageData;
    alt?: string;
}) {
    return (
        <div className="mx-auto w-fit">
            <Image
                src={src}
                alt={alt}
                width={100}
                height={100}
                className="grayscale hover:filter-none"
            />
        </div>
    );
}
