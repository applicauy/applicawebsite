import { apexFont } from "@/assets/fonts";
import { indexTags } from "@/utils/config/algolia-config";
import { Cateogry } from "@/utils/models/Category";
import MobileDetect from "mobile-detect";
import { Metadata } from "next";
import { headers } from "next/headers";
import dynamic from "next/dynamic";
import NewsHeader from "../../components/news-header";

interface Props {
  params: { url: string }
}

export async function generateMetadata( { params }: Props ): Promise<Metadata> {
    
  const category: Cateogry | undefined = await findCategory( params.url );
  return {
    title: `${ category?.meta_title } | Applica Corp.`,
    description: `${ category?.meta_description }`,
    keywords: [],
    alternates: {
      canonical: `https://applicacorp.com/news/category/${ params.url }`,
    }
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
    const category: Cateogry | undefined = await findCategory( params.url );

    const NewsFilter = dynamic(() => import('@/app/news/components/news-filter'), { ssr: false });
    const MobileLetsTalkSection = dynamic(() => import('@/(mobile)/_sections/mobile-lets-talk-section'), { ssr: false });

    return (
        <>
            <NewsHeader />
            <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between px-4 lg:px-24 lg:mt-20 mt-12`}>
                <NewsFilter category = { category }/>
            </div>
        </>
    ); 
}

export default page;