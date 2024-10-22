import { connectSearchBox } from 'react-instantsearch-dom';

const SearchPosts = ({ currentRefinement, refine }: any) => {
  return (
    <div className="relative z-0 w-full group">
      <input
        type="text"
        name="search"
        id="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
        placeholder=" "
        className="block px-0 mt-5 w-full text-xl md:text-3xl text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-highlight peer autofill:bg-transparent"
      />
      <label
        htmlFor="search"
        className="absolute text-2xl text-gray-500 duration-300 transform -translate-y-6 scale-75 top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-highlight peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Search posts
      </label>
    </div>
  );
};

export default connectSearchBox(SearchPosts);
