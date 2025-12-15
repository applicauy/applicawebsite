'use client';
import '../../styles/news.scss';
import StrongText from "@/app/_components/strong-text";
import { apexFont } from '@/assets/fonts';
import H1 from "@/components/h1";
import { usePathname } from 'next/navigation';

export default function NewsHeader() {

    const pathName = usePathname();
    
    return (
        <div className={`${apexFont.className} news-header-background pt-4 md:pt-8 pb-0 md:pb-4 px-4 flex flex-row text-center items-center justify-center mt-20 mdplus:mt-0 mb-0 md:mb-16`}>
            {
                pathName === '/news' ?
                <H1 className="mb-4 text-center lg:text-start">
                    <StrongText content="Latest news" />
                    {" "} in software development
                </H1> :
                <div className="mb-4 text-center lg:text-start text-4xl lg:text-6xl">
                    <StrongText content="Latest news" />
                    {" "} in software development
                </div>
            }
        </div>
    )
}