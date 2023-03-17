const Chat =({ pic, contact, msg, time, unread, active }) => {
    return (
        /*contact container*/
        <div className={`flex justify-between items-center cursor-pointer w-100 h-[85px] px-3 hover:bg-[#202d33] ${
            active ? 'bg-[#202d33]' : ''
        }`}>
            {/*contact picture*/}
            <img src={pic} alt='profile picture' className="rounded-full w-[50px] mr-5"/>
            {/*contact information*/}
            <div className="flex justify-between border-t border-neutral-700 w-100 h-100 py-3">
                <div className="flex flex-col justify-between text-white">
                    {/*contact name*/}
                    <div className="font-medium mb-1">{contact}</div>
                    {/*contact message*/}
                    <p className={`text-sm ${
                        !unread ? 'text-neutral-400' : ''
                    }`}>{msg}</p>
                </div>
                {/*Time and number of messages*/}
                <div className="flex flex-col justify-between items-end h-100 text-xs">
                    <p className="text-emerald-500 min-w-[55px]">{time}</p>
                    {/*The number of messages is only displayed if unread prop is true.*/}
                    {unread && (
                        <div className="flex justify-center item-center bg-emerald-500 rounded-full w-[20px] h-[20px]">
                        <p className="text-emerald-900">{unread}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Chat;