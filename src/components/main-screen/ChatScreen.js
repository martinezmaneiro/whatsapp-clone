import { useState, useEffect, useRef } from 'react'
import { MdSend } from 'react-icons/md';
import { BiHappy } from 'react-icons/bi';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import Button from '../hoc/Button';
import { messagesData } from '../../data/stored';
import { ContactBar } from './ContactBar';
import { Conversation } from './Conversation';
import { getTime } from '../../logic/whatsapp';

const ChatScreen =()=> {
    const [messages, setMessages] = useState(messagesData);
    const [typing, setTyping] = useState(false);
    const inputRef = useRef(null);

    const handleInputChange =()=>{
        inputRef.current.value.length === 0?
        setTyping(false): setTyping(true);
    };

    const addMessage =(msg)=>{
        const newMessages = [...messages, msg];
        setMessages(newMessages);
    }

    const handleSending =()=> {
        if (inputRef.current.value.length > 0){
            addMessage({
                msg: inputRef.current.value,
                time: getTime(),
                sent: true
            })
            inputRef.current.value = '';
            inputRef.current.focus();
            setTyping(false);
        }
    };

    useEffect(()=> {
        const listener =(e)=> {
            if (e.code === 'Enter'){
                handleSending();
            }
        };
        document.addEventListener('keydown', listener);
        return ()=> document.removeEventListener('keydown', listener)
    })

    return (
        <div className='flex flex-col h-screen'>
            <ContactBar/>
            <Conversation messages={messages}/>
            <div className='flex items-center bg-[#202d33] w-100 h-[70px] p-2'>
                <Button icon={<BiHappy/>}/>
                <span className='mr-2'>
                    <Button icon={<AiOutlinePaperClip/>}/>
                </span>
                <input
                    type='text'
                    placeholder='Type a message'
                    ref={inputRef}
                    className='bg-[#2c3943] rounded-lg outline-none text-sm text-neutral-200 w-100 h-100 px-3 placeholder:text-sm placeholder:text-[#8796a1]'
                    onChange={handleInputChange}
                />
                <span className='ml-2'>
                    {typing ? <Button icon={<MdSend/>} onClick={handleSending}/>:<Button icon={<BsFillMicFill/>}/>}
                </span>
            </div>
        </div>
    )
};

export default ChatScreen;