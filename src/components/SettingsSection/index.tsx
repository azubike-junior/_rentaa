import SettingsIcon from '../../images/settingsIcon.svg';
import { Dispatch, SetStateAction } from 'react';
import { toggleReviewModal } from "../../services/Mutations/Modal";
import { useDispatch } from 'react-redux';
import { toggleEditModal } from "../../services/Mutations/Modal";


const SettingsSection : React.FC = () => {
    const dispatch = useDispatch();
    return (
        <section className="w-full max-w-278px xl:max-w-xxxs px-7 py-11 shadow-xmd rounded-20">
            <div className='inline-flex gap-3 mb-5'>
                <img src={SettingsIcon} />
                <p className='text-lg text-secondary'>Settings</p>
            </div>
            <ul className='flex flex-col gap-4 pl-9'>
                <li className='text-lightGrey cursor-pointer' onClick={() => dispatch(toggleEditModal())}>Edit profile</li>
                <li className='text-lightGrey cursor-pointer'>Change Password</li>
                <li className='text-lightRed cursor-pointer'>Log out</li>
            </ul>
        </section>
    );
}
export default SettingsSection;