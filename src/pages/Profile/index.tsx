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
import { getGadgets } from "../../services/Queries/getGadgets";
import { useParams } from "react-router-dom";
const REGION = "us-east-1";
const bucketName: string = "rentaa-gadgets";

export default function Profile() {
  const { user_name }: any = useParams();

  // console.log("==============username======================");
  // console.log(user_name);
  // console.log("====================================");

  let { data: gadgets, loading: gadgetLoading } = useSelector(
    (state: RootState) => state.getGadgetReducer
  );

  let imageUrls;
  let gadgetKeys;

  if (gadgets?.length > 0) {
    gadgetKeys = gadgets?.map((gadget) => {
      return gadget.photos[0].key;
    });
    const href = "https://s3." + REGION + ".amazonaws.com/";
    const bucketUrl = href + bucketName + "/";
    imageUrls = gadgetKeys?.map((key: any) => {
      return bucketUrl + encodeURIComponent(key);
    });
  }

  const { editModalOpen, reviewModalOpen, contactModalOpen } = useSelector(
    (state: RootState) => state.modalReducer
  );

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
        <ReviewSection />
      </div>

      <Modal isOpen={contactModalOpen}>
        <ViewContactModal />
      </Modal>

      <Modal isOpen={reviewModalOpen}>
        <ReviewModal />
      </Modal>

      <Modal isOpen={editModalOpen}>
        <EditProfileModal />
      </Modal>
    </div>
  );
}
