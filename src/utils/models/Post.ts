import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Slide } from "./Slide";

export interface Post {
    objectID: number;
    slug: string;
    title: string;
    summary: string;
    tags: any[];
    image?: any | string | StaticImport;
    publishedAt?: string;
    publishedDate?: string;
    author?: any;
    position?: string;
    avatar?: string | StaticImport;
    content?: string;
    medias?: any[] | Slide[];
    meta_description?: string;
    meta_title?: string;
}
