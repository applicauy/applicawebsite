import Image from "next/image";
import { PropsWithChildren } from "react";
import boxImg from '@/assets/shapes/box.svg';
import leftLineImg from '@/assets/shapes/left-line.svg';
import rightLineImg from '@/assets/shapes/right-line.svg';

export default function MobileDecoratedImage({
    className,
    image,
    alt = "",
    fromPost = false,
}: PropsWithChildren<{
    className?: string;
    image: any;
    alt?: string;
    fromPost?: boolean
}>) {
    return (
        <>
            {
                fromPost ?
                    <Image
                        src={ image }
                        alt={ alt }
                        className="rounded-lg img-blog-mobile"
                        priority
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
                className={`absolute inset-16 pointer-events-none ${ fromPost ? 'image-border-mobile-post' : 'image-border-mobile' }`}
                priority
            /> 

            <Image
                src={ fromPost ? rightLineImg : leftLineImg }
                alt="Line"
                className={ `md:left-line ${ fromPost ? 'left-line-blog-mobile' : 'left-line-mobile' }` }
                priority
            />
            <Image
                src={ rightLineImg }
                alt="Line"
                className={ `md:right-line  ${ fromPost ? 'right-line-blog-mobile' : 'right-line-mobile' }` }
                priority
            />
        </>
    );
}