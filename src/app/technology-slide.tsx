import Image, { StaticImageData } from "next/image";

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
