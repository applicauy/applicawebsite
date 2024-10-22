import { apexFont } from "@/assets/fonts";
import { PropsWithChildren } from "react";

export default function Badge({
    category,
    className,
    onClick
}: PropsWithChildren<{
    category: string;
    className?: string;
    onClick?: () => void;
}>) { 
    return (
        <div 
            className={`${apexFont.className} px-5 rounded-3xl center relative inline-block py-2 leading-none bg-gray-700 transition-all duration-300`}
            onClick={onClick}>
            <p className={`${apexFont.className} ${ className } capitalize leading-none text-white antialiased`}>
                { category }
            </p>
        </div>
    );
}