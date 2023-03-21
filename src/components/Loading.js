import ProgressBar from 'react-bootstrap/ProgressBar';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

export const Loading = ({progress})=> {
    return (
        <div>
            <div className="flex flex-col justify-center items-center bg-[#111a21] w-screen h-screen">
                <span className="text-[#3d464a] text-6xl my-12"><BsWhatsapp/></span>
                <div className="flex flex-col justify-evenly items-center h-[150px]">
                    <ProgressBar variant='success' now={progress} className='bg-[#243138] rounded-lg w-[320px] h-[3px]'/>
                    <div className="flex flex-col items-center">
                        <h1 className="text-[#c1c6c9] text-lg font-medium">WhatsApp</h1>
                        <div className='flex items-center text-[#687782]'>
                            <span className="text-sm mr-3"><FaLock/></span>
                            <p>End-to-end encrypted</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}