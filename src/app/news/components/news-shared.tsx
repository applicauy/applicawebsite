import { apexFont } from '@/assets/fonts';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

export default function NewsShared(
    {
        isMobile
    } :
    {
        isMobile: boolean
    }
) {

    const NewsFilter = dynamic(() => import('@/app/news/components/news-filter'), { ssr: false });
    const MobileLetsTalkSection = dynamic(() => import('@/(mobile)/_sections/mobile-lets-talk-section'), { ssr: false });
    
    return (
        <>
            <h1 className="sr-only">Applica Corp. | News</h1>
            <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between md:px-24 mt-20 md:mt-8`}>
                <NewsFilter 
                    isMobile = { isMobile }
                />
            </div>
            {
                isMobile && <MobileLetsTalkSection></MobileLetsTalkSection>
            }
        </>
    ); 
}