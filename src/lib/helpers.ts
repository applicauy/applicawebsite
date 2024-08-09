import { useRouter } from "next/navigation";

// export const onMeetOurProcessClick = () => {
//     const { protocol, hostname, port } = window.location;
//     window.location.href = `${protocol}//${hostname}:${port}/#hiring-process`;
// };

// export const onStartNowClick = () => {
//     window.location.href = "/contact";
// };

// export const onLetsTalkClick = () => {
//     window.location.href = "/contact";
// };

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

    return {
        onStartNowClick,
        onLetsTalkClick,
        onMeetOurProcessClick,
    };
};
