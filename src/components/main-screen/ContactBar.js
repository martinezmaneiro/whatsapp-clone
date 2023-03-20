import { MdSearch } from 'react-icons/md';
import { HiDotsVertical } from 'react-icons/hi';
import { personal } from '../../assets/whatsapp'; //this line will be substituted in the future
import Button from '../hoc/Button';

export const ContactBar =()=> {
    return (
        <div className='flex justify-between bg-[#202d33] h-60px p-3'>
            <div className='flex items-center'>
                <img src={personal} alt='profile-picture' className='rounded-full w-[45px] h-[45px] mr-5'/>
                <div className='flex flex-col'>
                    <h1 className='text-white font-medium'></h1>
                    {Math.random() > 0.5 ? <p className='text-[#8796a1] text-xs'>Online</p>:<p className='text-[#8796a1] text-xs'>Offline</p>}
                </div>
            </div>
            <div className='flex justify-between items-center w-[85]'>
                <Button icon={<MdSearch/>}/>
                <Button icon={<HiDotsVertical/>}/>
            </div>
        </div>
    )
}