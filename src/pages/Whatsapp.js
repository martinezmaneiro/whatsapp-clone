import Sidebar from '../components/Sidebar';
import MainScreen from '../components/MainScreen';

const Whatsapp =()=> {
    return (
        <div className='w-screen h-screen overflow-hidden'>
            <div className='flex justify-start whatsapp-bp:justify-center item-center bg-[#111a21] h-screen'></div>
            <Sidebar/>
            <MainScreen/>
        </div>
    )
};

export default Whatsapp;