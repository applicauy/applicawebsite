'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import arrowDown from "@/assets/icons/arrow-down.webp";
import { Category } from "@/utils/models/Category";

export default function ShowMoreButton({
  isMobile,
  currentPage,
  fromCategory,
  category
}: {
  isMobile: boolean;
  currentPage: number;
  fromCategory: boolean;
  category?: Category | null;
}) {
  const router = useRouter();
  const nextPage = currentPage + 1;
  const nextHref = `/news${ fromCategory ? '/category/' + category?.url : '' }?page=${nextPage}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(nextHref);
    setTimeout(() => {
        const target = document.getElementById('posts-section');
        if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: top + ( isMobile ? 2800 * currentPage : 1400 * currentPage ),
              behavior: 'smooth'
            });
        }
    }, 300);
  };

  return (
    <div className="flex flex-col w-full items-center mt-10">
      <a
        href={nextHref}
        onClick={handleClick}
        className={`flex content-center pe-2.5 md:pe-4 ps-6 md:ps-9  mt-5 py-2 items-center border border-white rounded-full font-medium w-fit ${
          isMobile ? 'text-2xl' : 'text-3xl'
        } leading-none transition-all duration-300 hover:bg-white hover:text-black`}
        aria-label="Show more"
      >
        <div className="flex flex-col justify-center pb-1">
          <span className={`text-2xl md:text-3xl leading-none relative ${!isMobile && 'translate-y-[2px]'}`}>
            Show more
          </span>
        </div>

        <div className={`rounded-full w-fit p-1.5 md:p-3 ms-4 md:ms-9 bg-white image-arrow`}>
          <Image
            src={arrowDown}
            className="h-7 w-7 md:h-10 md:w-10"
            alt="Arrow Icon"
            color="transparent"
            loading="lazy"
            width={75}
            height={75}
          />
        </div>
      </a>
    </div>
  );
}
