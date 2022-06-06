import { useState } from "react";
import EditProfileModal from "../../components/EditProfileModal";
import ReviewsSection from "../../components/ReviewsSection";
import SettingsSection from "../../components/SettingsSection";
import UserProfileSection from "../../components/UserProfileSection";
import Modal from "../../components/Modal";

const ProfilePage = () => {
    const [EditProfileModalIsShowing, setEditProfileModalIsShowing] = useState(false);
    return (
    <>
        <div className="mx-auto container w-full pt-4 px-8 grid grid-cols-profileLayoutM xl:grid-cols-profileLayoutL gap-5">
            <section>
                <UserProfileSection />
            </section>
            <section className="flex flex-col gap-9">       
                <SettingsSection setEditProfileModalIsShowing={setEditProfileModalIsShowing}/>
                <ReviewsSection />
            </section>
        </div>
            {
                <Modal isOpen={EditProfileModalIsShowing}>
                        <EditProfileModal/>
                </Modal>
            }
    </>
    );
}
export default ProfilePage;