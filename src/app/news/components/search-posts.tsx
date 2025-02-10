import { IoSearch } from 'react-icons/io5';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchPosts = ({ currentRefinement, refine }: any) => {
  return (
    <div className="relative w-full mt-7 md:mt-0">
        <IoSearch className="icon-search absolute left-3 transform -translate-y-1/2 text-gray text-2xl text-[#6b7280]" />
        <input 
            type="text" 
            name="search"
            id="search"
            placeholder="Search posts" 
            className="py-2 pl-10 pr-4 bg-transparent text-white rounded-md focus:outline-none focus:ring-1 focus:ring-highlight focus:border-highlight w-full text-xl" 
            onChange={(event) => refine(event.currentTarget.value)}
        />
    </div>
  );
};

export default connectSearchBox(SearchPosts);