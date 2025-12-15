import { MouseEventHandler, PropsWithChildren } from "react";
import Image from "next/image";
import arrowIcon from "@/assets/icons/arrow-right.webp";
import MobileH4 from "./mobile-h4";

export default function MobileButton({
    highlightedArrow = false,
    href,
    target,
    onClick,
    children,
    type,
    disabled = false,
    isLoading = false,
    isButton = false
}: PropsWithChildren<{
    highlightedArrow?: boolean;
    href?: string;
    target?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    isLoading?: boolean;    
    isButton?: boolean;
}>) {
    const handleClick = ( e: React.MouseEvent<HTMLButtonElement> ) => {
        if( onClick )
            onClick( e );
        else if( href ) {
            if( target && target.toLowerCase() === '_blank' ){
                window.open( href, target );
            }
            else {
                window.location.href = href;
            }
        }
    }

    return (
        isButton ?
        (
            <button
                onClick={handleClick}
                className={`flex z-20 justify-center px-3 md:px-3 py-2 items-center border rounded-full font-medium w-fit text-sm md:text-base leading-none transition-all duration-300 ${ highlightedArrow ? "border-highlight active:bg-highlight active:text-black" : "border-white active:bg-white active:text-black" }`}
                type={type}
                disabled={disabled}
                aria-label={typeof children === "string" ? children : undefined}
            >
                <span className="relative md:text-3xl leading-none top-0.5 pl-2 pr-2 text-2xl pb-1">{children}</span>

                {

                }
                <div
                    className={`rounded-full w-10 h-10 md:w-${highlightedArrow ? "10" : "8"} 
                        ${ isLoading ? 'p-1' : 'p-1.5 lg:p-2.5' }
                        ${ !isLoading ? 'ms-2 md:ms-3' : 'ms-1' }
                        ${ ( highlightedArrow && !isLoading ) && "bg-highlight" } 
                        ${ ( !highlightedArrow && !isLoading ) && "bg-white" }`
                    }
                >
                    {
                        isLoading ?
                            <svg role="status" className="inline h-8 w-8 animate-spin text-gray-200 dark:text-gray-600 fill-highlight"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill" />
                            </svg> :
                            <Image
                                src={arrowIcon}
                                className="h-7 w-7 md:h-7 md:w-7"
                                alt="Arrow Icon"
                                color="transparent"
                                loading="lazy"
                                height={50}
                                width={50}
                            />
                    }
                </div>
            </button>
        ) :
        (
            <a
                href={ href }
                className={`flex z-20 justify-center px-3 md:px-3 py-2 items-center border rounded-full font-medium w-fit text-sm md:text-base leading-none transition-all duration-300 ${ highlightedArrow ? "border-highlight active:bg-highlight active:text-black" : "border-white active:bg-white active:text-black" }`}
                type={type}
                aria-label={typeof children === "string" ? children : undefined}
            >
                <span className="relative md:text-3xl leading-none top-0.5 pl-2 pr-2 text-2xl pb-1">{children}</span>

                {

                }
                <div
                    className={`rounded-full w-10 h-10 md:w-${highlightedArrow ? "10" : "8"} 
                        ${ isLoading ? 'p-1' : 'p-1.5 lg:p-2.5' }
                        ${ !isLoading ? 'ms-2 md:ms-3' : 'ms-1' }
                        ${ ( highlightedArrow && !isLoading ) && "bg-highlight" } 
                        ${ ( !highlightedArrow && !isLoading ) && "bg-white" }`
                    }
                >
                    {
                        isLoading ?
                            <svg role="status" className="inline h-8 w-8 animate-spin text-gray-200 dark:text-gray-600 fill-highlight"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill" />
                            </svg> :
                            <Image
                                src={arrowIcon}
                                className="h-7 w-7 md:h-7 md:w-7"
                                alt="Arrow Icon"
                                color="transparent"
                                loading="lazy"
                                height={50}
                                width={50}
                            />
                    }
                </div>
            </a>
        )
    );
}
