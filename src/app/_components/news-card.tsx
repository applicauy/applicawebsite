'use client'

import '../styles/cards.scss';
import Image from "next/image";
import arrowIcon from "@/assets/icons/arrow-right.webp";
import { useNavigationHandlers } from "@/lib/helpers";
import { Post } from "@/utils/models/Post";
import Badge from "./badge";
import { useEffect, useState } from 'react';


const NewsCard = (
    { objectID,
      title,
      slug,
      summary,
      tags,
      image,
      author,
      publishedDate,
      fromNews = true,
      handleClick,
      isMobile,
      fromLanding = false
    } : 
    Post & 
    { fromNews?: boolean } &
    { handleClick: any } &
    { isMobile: boolean } &
    { fromLanding?: boolean }
) => {

    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    const { onGoToPost } = useNavigationHandlers();    

    return (
        <div className={`relative flex ${ ( fromLanding && width < 1025 && width > 767 ) && 'min-w-[400px]' } flex-col overflow-hidden card-border bg-clip-border hover:shadow-lg hover:cursor-pointer bg-secondary-bg group md:z-[1] z-[10] w-full`}
            onClick={ () => onGoToPost( slug ) }>
           <div className="relative h-[200px] lg:h-[250px] m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                <Image 
                    src={ image.url }
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={title}
                    className="absolute inset-0"
                    quality={70}
                    loading="lazy"
                />
           </div>
           <div className="p-6 text-white flex flex-col flex-grow">
                <div className="flex flex-row flex-wrap gap-2 mt-2 mb-5">
                    {
                        tags.map(
                            ( tag: any ) => (
                                <Badge 
                                    key={tag.id} 
                                    category={tag.name}
                                    url = { tag.url }
                                />
                            )
                        )
                    }
                </div>
               <h3 className={ `text-2xl text-left w-[80%] flex-col font-medium ${ fromNews ? 'text-highlight' : 'text-white' }` }>{ title }</h3>
               {
                fromNews &&
                <p className="text-lg mt-5">{ summary }</p>
               }
               <div className="flex flex-row flex-wrap my-3 mb-1 w-full h-full items-center justify-between self-end">
                    <p className="text-md flex items-end text-secondary-text">
                        { publishedDate }
                    </p>
                    <div className='flex items-end'>
                         <a className="rounded-full p-2 md:p-2 bg-highlight hover:bg-white hover:cursor-pointer transition-all duration-300"
                             onClick={ () => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                isMobile && handleClick();
                             }}
                             href={ `/news/${ slug }` }>
                             <Image
                                src={arrowIcon}
                                width={25}
                                height={25}
                                alt="Arrow Icon"
                                color="transparent"
                                className="w-8 md:w-6 h-8 md:h-6"
                                loading="lazy"
                             />
                         </a>
                    </div>
               </div>
                
           </div>
        </div>
    );
}

export default NewsCard;