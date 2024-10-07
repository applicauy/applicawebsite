import { apexFont } from "@/assets/fonts";
import { PropsWithChildren } from "react";

export default function Badge({
    category,
    children
}: PropsWithChildren<{
    category: string;
}>) { 
    return (
        <div className={`${apexFont.className} px-5 rounded-3xl center relative inline-block py-2 leading-none bg-gray-700`}>
            <p className={`${apexFont.className} text-lg block font-medium capitalize leading-none text-white antialiased`}>
                { category }
            </p>
        </div>
    );
}