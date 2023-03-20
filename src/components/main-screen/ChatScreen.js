import { ContactBar } from './ContactBar';
import { InputBar } from './InputBar';
import { Conversation } from './Conversation';

const ChatScreen =()=> {
    return (
        <div className='flex flex-col h-screen'>
            <ContactBar/>
            <Conversation/>
            <InputBar/>
        </div>
    )
};

export default ChatScreen;