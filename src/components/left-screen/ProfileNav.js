import Button from '../hoc/Button';

const ProfileNav =()=> {
    return (
        <div className='flex justify-between items-center bg-[#202d33] h-[60px] p-3'>
            <img src='' alt='profile picture'/>
            <div className='flex justify-between w-[175px]'>
                <Button/>
                <Button/>
                <Button/>
                <Button/>
            </div>
        </div>
    )
}

export default ProfileNav;