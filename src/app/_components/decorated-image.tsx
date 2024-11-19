import { PropsWithChildren } from "react";
import Image from "next/image";
import boxImg from '@/assets/shapes/box.svg';
import leftLineImg from '@/assets/shapes/left-line.svg';
import rightLineImg from '@/assets/shapes/right-line.svg';
import { BASE_URL } from "@/utils/config/algolia-config";

export default function DecoratedImage({
    className,
    image,
    alt = "",
    fromPost = false,
    onlyBox = false
}: PropsWithChildren<{
    className?: string;
    image: any;
    alt?: string;
    fromPost?: boolean,
    onlyBox?: boolean
}>) {
    return (
        <>
            {
                fromPost ?
                    <Image
                        src={ image.url }
                        alt={ alt }
                        height={150}
                        width={500}
                        className="rounded-lg img-blog"
                    /> :
                    <Image
                        src={image}
                        className="image"
                        layout="responsive"
                        height={300}
                        width={600}
                        alt={alt}
                    />
            }
                  
            <Image
                src={ boxImg } 
                alt="Border" 
                className={ `absolute inset-16 pointer-events-none ${ fromPost ? 'image-border-blog' : 'image-border' }` }
            /> 

            {
                !onlyBox &&
                    <Image
                        src={ fromPost ? rightLineImg : leftLineImg }
                        alt="Line"
                        className={`${ fromPost ? 'left-line-blog' : 'left-line' }`}
                    />
            }

            {
                !onlyBox &&
                    <Image
                        src={ rightLineImg }
                        alt="Line"
                        className={`${ fromPost ? 'right-line-blog' : 'right-line' }`}
                    />
            }
           
        </>
    );
}
