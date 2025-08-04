import HealthcarePageClientWrapper from "./healthcare-page-client-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Healthcare Software Development Services & Solutions',
  description: 'We turn technology into better care: custom digital health platforms to improve patient outcomes and clinical efficiency.',
  keywords: [
    'healthcare software development services',
    'healthcare software development company',
    'healthcare software solutions',
    'healthcare software development solutions'
  ],
  alternates: {
    canonical: 'https://applicacorp.com/healthcare',
  },
  openGraph: {
    title: 'Healthcare Software Development Services & Solutions',
    description: 'We turn technology into better care: custom digital health platforms to improve patient outcomes and clinical efficiency.',
    url: 'https://applicacorp.com/healthcare',
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
    title: 'Healthcare Software Development Services & Solutions',
    description: 'We turn technology into better care: custom digital health platforms to improve patient outcomes and clinical efficiency.',
    images: ['https://applicacorp.com/images/og_image.jpg'],
  }
};

export default function Home() {

    return (
        <HealthcarePageClientWrapper></HealthcarePageClientWrapper>
    );
}
