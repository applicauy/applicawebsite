import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import PageClientWrapper from "./page-client-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Applica Corp | Building technology that drives global impact',
  description: 'Delivering cutting-edge software solutions designed to fuel growth, scale innovation, and turn bold ideas into global impact.',
  keywords: ['software', 'company', 'team', 'talent'],
  alternates: {
    canonical: 'https://applicacorp.com/',
  },
  openGraph: {
    title: 'Applica Corp | Building technology that drives global impact',
    description: 'We deliver high-performance software solutions that drive innovation, accelerate growth, and create global impact.',
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
    title: 'Applica Corp | Building technology that drives global impact',
    description: 'We deliver high-performance software solutions that drive innovation, accelerate growth, and create global impact.',
    images: ['https://applicacorp.com/images/og_image.jpg'],
  }
};

export default function Home() {

    return (
        <PageClientWrapper></PageClientWrapper>
    );
}
