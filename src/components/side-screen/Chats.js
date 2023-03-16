import { ImFolderDownload } from 'react-icons/im'

const Chats =({ filter })=> {
    return (
        <div className='flex flex-col overflow-y-scroll cursor-pointer h-100'>
            <div className='flex justify-between items-center w-100 min-h-[55px] px-3 hover:bg-[#202d33]'>
                <div className='flex justify-around items-center w-[150px]'>
                    <span className='text-emerald-500 text-lg'>
                        <ImFolderDownload/>
                    </span>
                    <h1 className='text-white'>Archived</h1>
                </div>
                <p className='text-emerald-500 text-xs font-light'>3</p>
            </div>
        </div>
    )
}

export default Chats;