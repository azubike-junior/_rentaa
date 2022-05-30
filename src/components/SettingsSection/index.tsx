import SettingsIcon from '../../images/settingsIcon.svg';
const SettingsSection = () => {
    return (
        <section className="w-full max-w- px-7">
            <div className='inline-flex gap-3'>
                <img src={SettingsIcon} />
                <p className='text-lg text-secondary'>Settings</p>
            </div>
            <ul className='flex flex-col gap-4'>
                <li className='text-lightGrey'>Edit profile</li>
                <li className='text-lightGrey'>Change Password</li>
                <li className='text-lightRed'>Log out</li>
            </ul>
        </section>
    );
}
export default SettingsSection;