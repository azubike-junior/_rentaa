import SettingsIcon from '../../images/settingsIcon.svg';
const SettingsSection = () => {
    //TODO: Make the following styles more accurate with tailwind config: 
    // Box shadow
    // Border radius
    // Left Padding of the list
    return (
        <section className="w-full max-w-xxxs px-7 py-11 shadow-xl rounded-3xl">
            <div className='inline-flex gap-3 mb-5'>
                <img src={SettingsIcon} />
                <p className='text-lg text-secondary'>Settings</p>
            </div>
            <ul className='flex flex-col gap-4 pl-9'>
                <li className='text-lightGrey'>Edit profile</li>
                <li className='text-lightGrey'>Change Password</li>
                <li className='text-lightRed'>Log out</li>
            </ul>
        </section>
    );
}
export default SettingsSection;