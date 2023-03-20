const Message =({ msg, time, img, isLink, sent})=> {
    return (
        <div className={`flex justify-center items-center rounded-md w-fit my-1 ${
            sent ? 'bg-[#005C4B]' : 'bg-[#202d33]'
        }`}>
            {img ?
                (<div className="relative w-100 p-2">
                    <img src={img} alt="img message" className="rounded-md max-w-[270px] w-100"/>
                    <p className="absolute right-2 bottom-3 text-[#8796a1] text-[10px] min-w-[50px]">{time}</p>
                </div>)
                :
                <h1></h1>
            };
        </div>
    )
};

export default Message;