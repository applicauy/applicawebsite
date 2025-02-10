import { useRouter } from "next/navigation";

export const useNavigationHandlers = () => {
    const router = useRouter();

    const onStartNowClick = () => {
        router.push("/contact");
    };

    const onLetsTalkClick = () => {
        router.push("/contact");
    };

    const onMeetOurProcessClick = () => {
        router.push("/#hiring-process");
    };

    const onGoToNews = ( tag?: string ) => {
        router.push(`/news${ tag && `?tag=${ tag }` }`);
    }

    const onGoToPost = ( title: string ) => {       
        router.push(`/news/${ title }`);
    } 

    const onGoToCategory = ( category: string ) => {
        router.push(`/news/category/${ category }`);
    }

    return {
        onStartNowClick,
        onLetsTalkClick,
        onMeetOurProcessClick,
        onGoToNews,
        onGoToPost,
        onGoToCategory
    };
};
