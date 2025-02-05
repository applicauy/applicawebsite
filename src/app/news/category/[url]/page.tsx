import { apexFont } from "@/assets/fonts";
import { indexTags } from "@/utils/config/algolia-config";
import { Cateogry } from "@/utils/models/Category";
import MobileDetect from "mobile-detect";
import { Metadata } from "next";
import { headers } from "next/headers";
import NewsFilter from "../../components/news-filter";
import MobileLetsTalkSection from "@/app/(mobile)/_sections/mobile-lets-talk-section";

interface Props {
  params: { url: string }
}

export async function generateMetadata( { params }: Props ): Promise<Metadata> {
    
  const category: Cateogry | undefined = await findCategory( params.url );
  return {
    title: `News category ${ category?.name }`,
    description: `${ category ? category.meta_description : '' }`,
    keywords: []
  }
}

const findCategory:any = async( url: string ) => {
  const { hits } = await indexTags.search<Cateogry>( url,
    {
      filters: `url:"${ url }"`
    }
  );
  
  return hits[0];
}

const page = async ( { params } : Props ) => { 
    const userAgent = headers().get('user-agent') || '';
    const md = new MobileDetect(userAgent);
    const isMobile = !!md.mobile();  

    const category: Cateogry | undefined = await findCategory( params.url );

    return (
        <>
            <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between md:px-24 mt-20 md:mt-8`}>
                {/* <span className="text-highlight text-3xl">Category:</span> <span className="text-secondary-text text-3xl">{ category!.name }</span>
                <hr/> */}
                <NewsFilter isMobile = { isMobile } category = { category }/>
            </div>
            {
                isMobile && <MobileLetsTalkSection></MobileLetsTalkSection>
            }
        </>
    ); 
}

export default page;