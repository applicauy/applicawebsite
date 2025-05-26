import H3 from "@/components/h3";
import H4 from "@/components/h4";
import { indexPosts, indexTags } from "@/utils/config/algolia-config";
import { Cateogry } from "@/utils/models/Category";
import { Post } from "@/utils/models/Post";
import { useEffect, useState } from "react"

type Tag = {
    objectID: string;
    name: string;
    url: string;
    meta_description: string;
    meta_title: string;
};

const CategoriesList = () => {

    const [categories, setCategories] = useState<Cateogry[]>([]);
    const [activeTags, setActiveTags] = useState<Set<string>>(new Set());


      useEffect(() => {
      const fetchCategories = async () => {
        const { hits } = await indexTags.search<Cateogry>("");
        setCategories(hits); 
      };

      const fetchActiveTags = async () => {
        const { hits } = await indexPosts.search<Post>("");
        const usedTags = new Set(hits.flatMap((post) => post.tags.map((tag) => tag.name)));
        setActiveTags(usedTags);
      };

      fetchCategories();
      fetchActiveTags();
    }, []);

    const filteredCategories = categories.filter((category) => activeTags.has(category.name));

    return (
        <div className="hidden md:block md:w-1/5">
            <h2 className="text-2xl md:text-3xl leading-none text-highlight mb-5 font-medium">Categories</h2>
            <ul>
                {
                    filteredCategories.map(
                        ( category ) => (
                            <li key = { category.objectID } className="mb-3">
                                <a 
                                    className="text-xl hover:text-highlight transition-all duration-300" 
                                    href = { `/news/category/${ category.url }` }>
                                        { category.name }
                                </a>
                            </li>
                        )
                    )
                }
            </ul>
        </div>  
    )
}

export default CategoriesList
