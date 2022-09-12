import { useEffect, useState } from "react";
import EditProfileModal from "../../components/EditProfileModal";
import ReviewsSection from "../../components/ReviewsSection";
import SettingsSection from "../../components/SettingsSection";
import UserProfileSection from "../../components/UserProfileSection";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import ChangePasswordModal from "../../components/ChangePasswordModal";
import ChangePasswordSuccessModal from "../../components/changePasswordSuccessModal";
import LogoutModal from "../../components/LogoutModal";
import config from "../../utils/config";
import { getGadgets } from "./../../services/Queries/getGadgets";
import ReviewSection from "../../components/ReviewSection";

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  let { data: gadgets, loading: gadgetLoading } = useSelector(
    (state: RootState) => state.getGadgetReducer
  );

  const {
    REACT_APP_AWS_AMAZON,
    REACT_APP_AWS_REGION,
    REACT_APP_AWS_HTTP,
    REACT_APP_BUCKET_NAME,
  } = config;

  const { loading: userLoading, data } = useSelector(
    (state: RootState) => state.getUserById
  );

  let imageUrls;
  let gadgetData;

  if (gadgets?.length > 0) {
    gadgetData = gadgets?.map((gadget) => {
      return { gadgetKey: gadget.photos[0].key, id: gadget.id };
    });
    const href =
      `${REACT_APP_AWS_HTTP}` +
      `${REACT_APP_AWS_REGION}` +
      `${REACT_APP_AWS_AMAZON}`;

    const bucketUrl = href + `${REACT_APP_BUCKET_NAME}` + "/";

    imageUrls = gadgetData?.map((gadget: any) => {
      return {
        image: bucketUrl + encodeURIComponent(gadget.gadgetKey),
        id: gadget.id,
      };
    });
  }

  const {
    editModalOpen,
    reviewModalOpen,
    changePasswordSuccessOpen,
    changePasswordOpen,
    contactModalOpen,
    logoutOpen,
  } = useSelector((state: RootState) => state.modalReducer);

  useEffect(() => {
    dispatch(getGadgets());
  }, []);

  useEffect(() => {
    const body: any = document.querySelector("body");
    body.style.overflow = reviewModalOpen ? "hidden" : "auto";
  }, [reviewModalOpen]);

  useEffect(() => {
    const body: any = document.querySelector("body");
    body.style.overflow = contactModalOpen ? "hidden" : "auto";
  }, [contactModalOpen]);

  return (
    <>
      <div className="mx-auto container md:max-w-screen-lg xl:max-w-screen-xl w-full xxs:px-0 xs:px-2 md:pt-4 md:px-8 lg:grid lg:grid-cols-profileLayoutM xl:grid-cols-profileLayoutL gap-5">
        <section className="mb-6">
          <UserProfileSection
            gadgets={gadgets}
            imageUrls={imageUrls}
            gadgetLoading={gadgetLoading}
          />
        </section>
        <section className="hidden lg:block flex flex-col gap-9">
          <SettingsSection />
          <ReviewsSection reviews={data?.profile?.reviews} />
        </section>

        <section className="block lg:hidden">
          <ReviewSection reviews={data?.profile?.reviews} />
        </section>

        <Modal isOpen={editModalOpen}>
          <EditProfileModal />
        </Modal>
        <Modal isOpen={changePasswordOpen}>
          <ChangePasswordModal />
        </Modal>
        <Modal isOpen={changePasswordSuccessOpen}>
          <ChangePasswordSuccessModal />
        </Modal>
        <Modal isOpen={editModalOpen}>
          <EditProfileModal />
        </Modal>
        <Modal isOpen={logoutOpen}>
          <LogoutModal />
        </Modal>
      </div>
    </>
  );
};
export default ProfilePage;
