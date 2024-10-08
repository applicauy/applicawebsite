"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TrackPageView = () => {
    const pathname = usePathname();

    useEffect(() => {
        if (!window.dataLayer) {
            return;
        }

        window.dataLayer.push({
            event: "page_view",
            page_path: pathname,
        });
    }, [pathname]);

    return null;
};

export default TrackPageView;
