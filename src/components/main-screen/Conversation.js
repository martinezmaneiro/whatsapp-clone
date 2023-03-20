import { useState } from 'react';
import { messagesData } from '../../data/stored';
import Message from './Message';

export const Conversation =()=> {
    const [messages, setMessages] = useState(messagesData);
    return (
        <div
            className="bg-[#0a131a] bg-[url('assets/images/bg.webp')] bg-contain overflow-y-scroll h-100"
            style={{ padding: '12px 7%' }}
        >
            {messages.map((msg) => (
                <Message/>
            ))}
        </div>
    )
};