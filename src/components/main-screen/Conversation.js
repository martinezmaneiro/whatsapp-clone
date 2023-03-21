import Message from './Message';

export const Conversation =({messages})=> {
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
        </div>
    )
};