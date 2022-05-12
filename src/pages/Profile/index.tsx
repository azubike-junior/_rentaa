import React, { useEffect, useState } from "react";
import EmptyGadgetSection from "../../components/EmptyGadgetSection";
import ReviewSection from "./../../components/ReviewSection";
import MyGadgets from "./../../components/MyGadgets";
import ProfileHeader from "./../../components/ProfileHeader";
import Modal from "./../../components/Modal/index";
import ViewContactModal from "./../../components/ViewContactModal/index";
import ReviewModal from "./../../components/ReviewModal/index";
import EditProfileModal from "./../../components/EditProfileModal/index";
// import { useGetGadgetsQuery } from "../../services/Queries/gadgets";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../services/Queries/getUser";
import { RootState } from "../../store/store";
// import { getGadgets } from "../../services/Queries/getGadgets";
import { useParams } from "react-router-dom";
import { getGadgets } from "./../../services/Queries/getGadgets";
import { useGetGadgetsQuery } from "../../services/Queries/queries";
import { IGadgets } from "./../../interfaces/index";
import ChangePasswordModal from "./../../components/ChangePasswordModal/index";
import ChangePasswordSuccessModal from "./../../components/changePasswordSuccessModal/index";
import config from "../../utils/config";
import LogoutModal from './../../components/LogoutModal/index';

export default function Profile() {
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

  /**
   *
   */
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
    logoutOpen
  } = useSelector((state: RootState) => state.modalReducer);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const body: any = document.querySelector("body");
  //   body.style.overflow = editModalOpen ? "hidden" : "auto";
  // }, [editModalOpen]);

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

  console.log(">>>>>review", data?.profile?.reviews);

  return (
    <div>
      <ProfileHeader />
      <div className="container max-w-7xl flex flex-col items-center my-16 mb-32 mx-auto px-2 ">
        <h1 className="text-lg md:text-3xl font-medium md:mb-4 w-full mx-auto px-6">
          My Gadgets
        </h1>
        {gadgets?.length === 0 ? (
          <EmptyGadgetSection />
        ) : (
          <MyGadgets gadgets={imageUrls} gadgetLoading={gadgetLoading} />
        )}

        <ReviewSection reviews={data?.profile?.reviews} />
      </div>

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
  );
}
