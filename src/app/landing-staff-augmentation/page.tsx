import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import PageClientWrapper from "./page-client-wrapper";
import Head from "next/head";

export default function Home() {

    const userAgent = headers().get('user-agent') || '';
    const md = new MobileDetect(userAgent);
    const isMobile = !!md.mobile();

    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <main>
                <PageClientWrapper initialIsMobile = { isMobile }></PageClientWrapper>
            </main>
        </>
    );
}
