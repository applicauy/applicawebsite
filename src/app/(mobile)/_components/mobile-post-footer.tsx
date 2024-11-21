import { Post } from "@/utils/models/Post";
import Image from "next/image";
import MobileShareButtons from "./mobile-share-buttons";

export default function MobilePostFooter (
    { 
        title,
        author
    } : 
    Post
    &
    any
) {
    return (
        <div className="flex mb-24 mt-12 bg-violet-background py-6 px-6 rounded-xl flex-col">
            <div className="flex flex-col items-center gap-3">
              <Image
                src = { author.avatar.url }
                width={60}
                height={60}
                alt = { author.name }
                className="rounded-full object-cover w-16 h-16"
              />
              <div className="author flex flex-col justify-center h-full items-center">
                <span className="font-bold text-lg">{ author.name }</span>
                <span className="text-lg">{ author.position }</span>
              </div>
            </div>
            <MobileShareButtons title = { title } />
        </div>
    )
}