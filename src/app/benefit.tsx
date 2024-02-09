import Image, { StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

export default function Benefit({
  imageSrc,
  imageAlt = "",
}: PropsWithChildren<{
  imageSrc: string | StaticImageData;
  imageAlt?: string;
}>) {
  return (
    <div className="flex flex-col text-center">
      <Image src={imageSrc} alt={imageAlt} />
      <h5>Improved cost-effectiveness</h5>
    </div>
  );
}
