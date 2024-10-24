import { apexFont } from "@/assets/fonts";
import NewsFilter from "../_components/news-filter";

export default function Page() {
    return (
        <div className={`${apexFont.className} flex min-h-screen flex-col items-start justify-between md:px-24 mt-20 md:mt-8`}>
            <NewsFilter />
        </div>
    ); 
}