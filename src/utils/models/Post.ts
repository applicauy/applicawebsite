import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Slide } from "./Slide";

export interface Post {
    objectID: number;
    urlTitle: string;
    title: string;
    summary: string;
    tags: string[];
    image: string | StaticImport;
    publishedAt: string;
    author: string;
    position: string;
    avatar: string | StaticImport;
    content: string;
    slide?: Slide[];
}