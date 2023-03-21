import { useEffect, useRef } from 'react';
import Message from './Message';

export const Conversation =({messages})=> {

    const bottomRef = useRef(null);

    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior:'smooth',})
    },[messages]);

    return (
        <div
            className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-100"
            style={{ padding: '12px 7%' }}
        >
            {messages.map((msg) => (
                <Message
                    msg={msg.msg}
                    time={msg.time}
                    isLink={msg.isLink}
                    img={msg.img}
                    sent={msg.sent}/>
            ))}
            <div ref={bottomRef}> </div>
        </div>
    )
};