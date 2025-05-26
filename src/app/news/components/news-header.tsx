import '../../styles/news.scss';
import StrongText from "@/app/_components/strong-text";
import { apexFont } from '@/assets/fonts';
import H1 from "@/components/h1";

export default function NewsHeader() {
    return (
        <div className={`${apexFont.className} news-header-background pt-4 md:pt-8 pb-0 md:pb-4 px-4 flex flex-row text-center justify-center mt-20 md:mt-0 mb-0 md:mb-16`}>
            <H1 className="mb-4 text-center md:text-start">
                <StrongText content="Insights and trends" />
                {" "} in software development
            </H1>
        </div>
    )
}