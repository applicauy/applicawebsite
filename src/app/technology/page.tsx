import TechnologyPageClientWrapper from "./technology-page-client-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Technology Software Development Services & Solutions',
  description: 'We turn technology into better care: custom digital health platforms to improve patient outcomes and clinical efficiency.',
  keywords: [
    'technology software development services',
    'technology software development company',
    'technology software solutions',
    'technology software development solutions'
  ],
  alternates: {
    canonical: 'https://applicacorp.com/technology',
  },
  openGraph: {
    title: 'Technology Software Development Services & Solutions',
    description: 'We turn technology into better care: custom digital health platforms to improve patient outcomes and clinical efficiency.',
    url: 'https://applicacorp.com/technology',
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
    title: 'Technology Software Development Services & Solutions',
    description: 'We turn technology into better care: custom digital health platforms to improve patient outcomes and clinical efficiency.',
    images: ['https://applicacorp.com/images/og_image.jpg'],
  }
};

export default function Home() {

    return (
        <TechnologyPageClientWrapper></TechnologyPageClientWrapper>
    );
}
