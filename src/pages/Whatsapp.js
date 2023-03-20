import Sidebar from '../components/side-screen/Sidebar';
import ChatScreen from '../components/main-screen/ChatScreen';

const Whatsapp =()=> {
    return (
        <div className='w-screen h-screen overflow-hidden'>
            <div className='flex justify-start whatsapp-bp:justify-center items-center bg-[#111a21] h-screen'>
                <div className='bg-[#111a21] min-w-[340px] max-w-[500px] w-100 h-100'>
                    <Sidebar/>
                </div>
                <div className='bg-[#222f35] min-w-[415px] max-w-[1120px] w-100 h-100'>
                    <ChatScreen/>
                </div>
            </div>
        </div>
    )
};

export default Whatsapp;