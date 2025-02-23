import { apexFont } from "@/assets/fonts";
import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: 'News',
    description: 'Stay updated with the latest news and insights from Applica Corp. Discover trends, success stories, and expert advice in IT staff augmentation.',
    keywords: ['blog', 'news', 'posts', 'stories', 'tips', 'articles']
};

export default function Page() {
    const userAgent = headers().get('user-agent') || '';
    const md = new MobileDetect(userAgent);
    const isMobile = !!md.mobile();  

    const NewsFilter = dynamic(() => import('@/app/news/components/news-filter'), { ssr: false });
    const MobileLetsTalkSection = dynamic(() => import('@/(mobile)/_sections/mobile-lets-talk-section'), { ssr: false });
    
    return (
        <>
            <h1 className="sr-only">News</h1>
            <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between md:px-24 mt-20 md:mt-8`}>
                <NewsFilter isMobile = { isMobile }/>
            </div>
            {
                isMobile && <MobileLetsTalkSection></MobileLetsTalkSection>
            }
        </>
    ); 
}