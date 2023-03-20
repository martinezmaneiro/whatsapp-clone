import { useState } from 'react';
import ProfileNav from "./ProfileNav";
import Chats from './Chats';
import { BiFilter } from 'react-icons/bi'

const Sidebar =()=> {
        const [filter, setFilter] = useState(false);

    return (
        <div  className='flex flex-col border-r border-neutral-700 w-100 h-screen'>
            <ProfileNav/>
            <div className="flex justify-between items-center h-[60px] p-2">
                <input type='text' placeholder='Search or start a new chat' className="rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none px-4 py-2 w-[400px] h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"></input>
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
            </div>
            <Chats filter={filter}/>
        </div>
    )
}

export default Sidebar;