import ShareButtons from "@/app/_components/share-buttons";
import { Post } from "@/utils/models/Post";
import Image from "next/image";
import MobileShareButtons from "./mobile-share-buttons";

export default function MobilePostFooter (
    { 
        title,
        avatar,
        author,
        position
    } : 
    Post
) {
    return (
        <div className="flex mb-24 mt-12 bg-violet-background py-6 px-6 rounded-xl flex-col">
            <div className="flex flex-col items-center gap-3">
              <Image
                src = { avatar }
                width={60}
                height={60}
                alt = "Juan Perez"
                className="rounded-full"
              />
              <div className="author flex flex-col justify-center h-full items-center">
                <span className="font-bold text-lg">{ author }</span>
                <span className="text-lg">{ position }</span>
              </div>
            </div>
            <MobileShareButtons title = { title } />
        </div>
    )
}