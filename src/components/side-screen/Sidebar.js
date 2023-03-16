import LeftMenu from "./LeftMenu";
import ProfileNav from "./ProfileNav";

const Sidebar =()=> {
    return (
        <div  className='flex flex-col border-r border-neutral-700 w-100 h-screen'>
            <ProfileNav/>
            <LeftMenu/>
        </div>
    )
}

export default Sidebar;