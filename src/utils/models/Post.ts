import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Post {
    objectID: number;
    title: string;
    summary: string;
    tags: string[];
    image: string | StaticImport;
    publishedAt: string;
    author: string;
    position: string;
    avatar: string | StaticImport;
    content: string;
}