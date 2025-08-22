import FinancePageClientWrapper from "./finance-page-client-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Finance Software Development Services & Solutions',
  description: 'We turn technology into smarter finance: custom digital solutions to enhance customer experience and operational efficiency.',
  keywords: [
    'finance software development services',
    'finance software development company',
    'finance software solutions',
    'finance software development solutions'
  ],
  alternates: {
    canonical: 'https://applicacorp.com/finance',
  },
  openGraph: {
    title: 'Finance Software Development Services & Solutions',
    description: 'We turn technology into smarter finance: custom digital solutions to enhance customer experience and operational efficiency.',
    url: 'https://applicacorp.com/finance',
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
    title: 'Finance Software Development Services & Solutions',
    description: 'We turn technology into smarter finance: custom digital solutions to enhance customer experience and operational efficiency.',
    images: ['https://applicacorp.com/images/og_image.jpg'],
  }
};

export default function Home() {

    return (
        <FinancePageClientWrapper></FinancePageClientWrapper>
    );
}
