import { apexFont } from "@/assets/fonts";
import { PropsWithChildren } from "react";

export default function Badge({
    category,
    className,
    url
}: PropsWithChildren<{
    category: string;
    className?: string;
    url: string;
}>) { 
    return (
        <a 
            className={`${apexFont.className} px-5 rounded-3xl center relative inline-block py-2 leading-none bg-gray-700 transition-all duration-300 hover:cursor-pointer hover:bg-gray-500`}
            href = { `/news/category/${ url }` }>
            <p className={`${apexFont.className} ${ className } capitalize leading-none text-white antialiased`}>
                { category }
            </p>
        </a>
    );
}