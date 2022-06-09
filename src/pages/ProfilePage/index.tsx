import { useState } from "react";
import EditProfileModal from "../../components/EditProfileModal";
import ReviewsSection from "../../components/ReviewsSection";
import SettingsSection from "../../components/SettingsSection";
import UserProfileSection from "../../components/UserProfileSection";
import Modal from "../../components/Modal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const ProfilePage = () => {
    const { editModalOpen } = useSelector(
        (state: RootState) => state.modalReducer
      );
    
    return (
    <>
        <div className="mx-auto container md:max-w-screen-lg xl:max-w-screen-xl w-full pt-4 px-8 grid grid-cols-profileLayoutM xl:grid-cols-profileLayoutL gap-5">
            <section>
                <UserProfileSection />
            </section>
            <section className="flex flex-col gap-9">       
                <SettingsSection />
                <ReviewsSection />
            </section>
        </div>
            {
                <Modal isOpen={editModalOpen}>
                        <EditProfileModal/>
                </Modal>
            }
    </>
    );
}
export default ProfilePage;