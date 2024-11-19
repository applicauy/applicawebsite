import { Post } from "@/utils/models/Post";
import Image from "next/image";
import ShareButtons from "./share-buttons";
import { BASE_URL } from "@/utils/config/algolia-config";

export default function PostFooter (
  { 
    title,
    author
  } : 
  Post
  &
  any
) {    
    return (
        <div className="flex mb-24 mt-16 bg-violet-background py-4 px-6 rounded-full">
            <div className="flex flex-row gap-3 w-1/2">
              <Image
                src = { author.avatar.url }
                width={60}
                height={60}
                alt = { author.name }
                className="rounded-full"
              />
              <div className="author flex flex-row justify-center h-full items-center">
                <span className="font-bold text-xl mr-2">{ author.name }</span>
                <span className="text-2xl mr-2">|</span>
                <span className="text-xl">{ author.position }</span>
              </div>
            </div>
            <ShareButtons title = { title } />
        </div>
    )
}