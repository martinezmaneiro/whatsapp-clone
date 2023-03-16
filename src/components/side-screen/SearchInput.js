import FilterButton from './FilterButton';

const SearchInput =()=> {

    return (
        <div className="flex justify-between items-center h-[60px] p-2">
            <input type='text' placeholder='Search or start a new chat' className="rounded-lg bg-[#202d33] text-[#87896a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"></input>
            <FilterButton/>
        </div>
    )
};

export default SearchInput;