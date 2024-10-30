import { headers } from "next/headers";
import MobileDetect from "mobile-detect";
import PageClientWrapper from "./page-client-wrapper";

export default function Home() {

    const userAgent = headers().get('user-agent') || '';
    const md = new MobileDetect(userAgent);
    const isMobile = !!md.mobile();

    return (
        <PageClientWrapper initialIsMobile = { isMobile }></PageClientWrapper>
    );
}
