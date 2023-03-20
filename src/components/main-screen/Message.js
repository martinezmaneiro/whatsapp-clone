const Message =({ msg, time, img, isLink, sent})=> {
    return (
        <div className={`flex justify-center items-center rounded-md w-fit my-1 ${
            sent ? 'bg-[#005C4B]' : 'bg-[#202d33]'
        }`}>Message</div>
    )
};

export default Message;