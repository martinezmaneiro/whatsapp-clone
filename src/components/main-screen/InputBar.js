import { MdSend } from 'react-icons/md';
import { BiHappy } from 'react-icons/bi';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import Button from '../hoc/Button';

export const InputBar =()=> {
    return (
        <div className='flex items-center bg-[#202d33] w-100 h-[70px] p-2'>
            <Button icon={<BiHappy/>}/>
            <span className='mr-2'>
                <Button icon={<AiOutlinePaperClip/>}/>
            </span>
            <input
                type='text'
                placeholder='Type a message'
                className='bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#8796a1]'
            />
            <span className='ml-2'>
                <Button icon={<BsFillMicFill/>}/>
                <Button icon={<MdSend/>}/>
            </span>
        </div>
    )
};


