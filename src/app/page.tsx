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
  openGraph: {
    title: 'Applica Corp | Tailored software development for your growth',
    description: 'We deliver peace of mind and time savings through our expert nearshore IT teams. Get started in 72 hours.',
    url: 'https://applicacorp.com/',
    siteName: 'Applica Corp',
    images: [
      {
        url: 'https://applicacorp.com/images/og_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Applica Corp Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Applica Corp | Tailored software development for your growth',
    description: 'We deliver peace of mind and time savings through our expert nearshore IT teams. Get started in 72 hours.',
    images: ['https://applicacorp.com/images/og_image.jpg'],
  }
};

export default function Home() {

    return (
        <PageClientWrapper></PageClientWrapper>
    );
}
