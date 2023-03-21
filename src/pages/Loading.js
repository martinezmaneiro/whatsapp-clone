import { BsWhatsapp } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

const LoadingScreen =()=> {
    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-[#111a21] w-screen h-screen">
                <span className="text-[#3d464a] text-6xl my-12"><BsWhatsapp/></span>
            </div>
            <div className="flex flex-col justify-evenly items-center h-[150px]">
                <div className="flex flex-col items-center">
                    <h1 className="text-[#c1c6c9] text-lg font-medium">WhatsApp</h1>
                    <div className='flex items-center text-[#687782]'>
                        <span className="text-sm mr-3"><FaLock/></span>
                        <p>End-to-end encrypted</p>
                    </div>
                </div>
            </div>
        </div>
    )
}