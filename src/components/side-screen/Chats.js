import { useState, useEffect } from 'react';
import { ImFolderDownload } from 'react-icons/im';
import { chatsData } from '../../data/stored';
import Chat from './Chat';

const Chats =({ filter })=> {
    const [chats, setChats] = useState(chatsData);

    //using useEffect hook to call the function any time the prop filter is changed.
    useEffect(() => {
    /*the filter will be applied yo all the chats in chats data. It will return an array
    of the chats where unread prop is true (a number). If unread is falsy (null) the value
    will not be returned*/
        const newChats = filter
        ? chatsData.filter((chat) => chat.unread) : chatsData;
        setChats(newChats);
    }, [filter]);

    return (
        <div className='flex flex-col overflow-y-scroll cursor-pointer h-100'>
            <div className='flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]'>
                <div className='flex justify-around items-center w-[150px]'>
                    <span className='text-emerald-500 text-lg'>
                        <ImFolderDownload/>
                    </span>
                    <h1 className='text-white'>Archived</h1>
                </div>
                <p className='text-emerald-500 text-xs font-light'>3</p>
            </div>
            {chats.map((chat, i) => {
                return (
                    <Chat
                        pic={chat.pic}
                        contact={chat.contact}
                        msg={chat.msg}
                        time={chat.time}
                        unread={chat.unread}
                        active={i === 0}
                        key={chat.contact}
                    />
                );
            })}
        </div>
    )
}

export default Chats;