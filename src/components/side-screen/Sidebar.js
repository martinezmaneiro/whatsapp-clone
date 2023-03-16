import LeftMenu from "./LeftMenu";
import ProfileNav from "./ProfileNav";
import SearchInput from "./SearchInput";

const Sidebar =()=> {
    return (
        <div  className='flex flex-col border-r border-neutral-700 w-100 h-screen'>
            <ProfileNav/>
            <SearchInput/>
            <LeftMenu/>
        </div>
    )
}

export default Sidebar;