import EducationPageClientWrapper from "./education-page-client-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Education Software Development Services & Solutions',
  description: 'We turn technology into better care: custom digital health platforms to improve patient outcomes and clinical efficiency.',
  keywords: [
    'education software development services',
    'education software development company',
    'education software solutions',
    'education software development solutions'
  ],
  alternates: {
    canonical: 'https://applicacorp.com/education',
  },
  openGraph: {
    title: 'Education Software Development Services & Solutions',
    description: 'We turn technology into better care: custom digital health platforms to improve patient outcomes and clinical efficiency.',
    url: 'https://applicacorp.com/education',
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
    title: 'Education Software Development Services & Solutions',
    description: 'We turn technology into better care: custom digital health platforms to improve patient outcomes and clinical efficiency.',
    images: ['https://applicacorp.com/images/og_image.jpg'],
  }
};

export default function Home() {

    return (
        <EducationPageClientWrapper></EducationPageClientWrapper>
    );
}
