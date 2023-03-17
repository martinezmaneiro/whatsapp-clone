import Button from '../hoc/Button';
import { MdPeopleAlt } from 'react-icons/md';
import { TbCircleDashed } from 'react-icons/tb';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi';
import { personal } from '../../assets/whatsapp';

const ProfileNav =()=> {
    return (
        <div className='flex justify-between items-center bg-[#202d33] h-[60px] p-3'>
            <img src= {personal} alt='profile' className='rounded-full w-[40px]' />
            <div className='flex justify-between w-[175px]'>
                <Button icon={<MdPeopleAlt/>}/>
                <Button icon={<TbCircleDashed/>}/>
                <Button icon={<BsFillChatLeftTextFill/>}/>
                <Button icon={<HiDotsVertical/>}/>
            </div>
        </div>
    )
}

export default ProfileNav;