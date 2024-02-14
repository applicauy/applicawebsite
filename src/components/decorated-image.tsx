import { PropsWithChildren } from "react";
import Image from "next/image";

export default function DecoratedImage({
  className,
  src,
  imageHeight,
  imageWidth,
  alt = "",
  children,
}: PropsWithChildren<{
  className?: string;
  src: any;
  imageHeight: number;
  imageWidth: number;
  alt?: string;
}>) {
  return (
    <div className="flex flex-col gap-8">
      <div className={`relative${className ? " " + className : ""}`}>
        <Image
          src={src}
          className="image"
          height={imageHeight}
          width={imageWidth}
          alt={alt}
        />

        {/* Image decoration border */}
        <div className="absolute inset-[10%] top-20 bottom-12 border border-white rounded-tl-[60px] rounded-br-[150px] -z-10"></div>
      </div>

      {children}
    </div>
  );
}
