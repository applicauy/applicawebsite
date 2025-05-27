import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import PageClientWrapper from "./page-client-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Applica Corp | Tailored software development for your growth',
  description: 'We are a software company focused on saving you time and delivering peace of mind. Build your dream team with top nearshore IT talent in only 72 hs.',
  keywords: ['staff augmentation', 'software', 'company', 'team', 'talent'],
  alternates: {
    canonical: 'https://applicacorp.com/',
  },
};

export default function Home() {

    const userAgent = headers().get('user-agent') || '';
    const md = new MobileDetect(userAgent);
    const isMobile = !!md.mobile();

    return (
        <PageClientWrapper initialIsMobile = { isMobile }></PageClientWrapper>
    );
}
