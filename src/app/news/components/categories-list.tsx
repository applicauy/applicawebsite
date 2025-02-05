import H4 from "@/components/h4";
import { indexTags } from "@/utils/config/algolia-config";
import { useEffect, useState } from "react"

type Tag = {
    objectID: string;
    name: string;
    url: string;
    meta_description: string;
};

const CategoriesList = () => {

    const [categories, setCategories] = useState<Tag[]>([]);
    
    useEffect(
        () => {
            const fetchCategories = async () => {
                const { hits } = await indexTags.search<Tag>("");
                setCategories( hits );
            }

            fetchCategories();
        },
        []
    )

    return (
        <div className="hidden md:block md:w-1/5">
            <H4 className="text-highlight mb-5 font-medium">Categories</H4>
            <ul>
                {
                    categories.map(
                        ( category ) => (
                            <li key = { category.objectID } className="mb-3">
                                <a 
                                    className="text-2xl hover:text-highlight transition-all duration-300" 
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
