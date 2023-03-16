import { useState } from 'react';
import { BiFilter } from 'react-icons/bi';

const FilterButton =()=> {
    //Added chat filter state
    const [filter, setFilter] = useState(false);

    return (
        <button
            //Tailwind classes conditional rendering depending on component's state.
            className={`text-2xl m-2 p-1 rounded-full ${
                filter ? 'bg-emerald-500 text-white rounded-full hover:bg-text-emerald-700'
                : 'text-[#8796a1] hover:bg-[#3c454c]'
            }`}
            onClick={()=> setFilter(!filter)}
        >
            <BiFilter/>
        </button>
    )
}

export default FilterButton;