import { IoSearch } from 'react-icons/io5';
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchPosts = ({ currentRefinement, refine }: any) => {
  return (
    // <div className="relative z-0 w-full group">
    //   <input
    //     type="text"
    //     name="search"
    //     id="search"
    //     value={currentRefinement}
    //     onChange={(event) => refine(event.currentTarget.value)}
    //     placeholder=" "
    //     className="block px-0 mt-5 w-full text-xl md:text-3xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-highlight peer autofill:bg-transparent"
    //   />
    //   <label
    //     htmlFor="search"
    //     className="absolute text-2xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-highlight peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    //   >
    //     Search posts
    //   </label>
    // </div>
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