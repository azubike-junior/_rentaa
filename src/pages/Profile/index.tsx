import React, { useState } from "react";
import EmptyGadgetSection from "../../components/EmptyGadgetSection";
import ReviewSection from "./../../components/ReviewSection";
import MyGadgets from "./../../components/MyGadgets";
import ProfileHeader from "./../../components/ProfileHeader";
import Modal from "./../../components/Modal/index";
import ViewContactModal from "./../../components/ViewContactModal/index";
import ReviewModal from "./../../components/ReviewModal/index";
import EditProfileModal from "./../../components/EditProfileModal/index";

export default function Profile() {
  const noGadget = false;

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const toggleContactModal = () => {
    setContactModalOpen(!contactModalOpen);
    // if (typeof window != "undefined" && window.document) {
    //   document.body.style.overflow = "hidden";
    // }
    //  document.body.style.overflow = "unset";
  };

  const toggleReviewtModal = () => {
    setReviewModalOpen(!reviewModalOpen);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  return (
    <div>
      <ProfileHeader
        toggleContactModal={toggleContactModal}
        toggleEditModal={setEditModalOpen}
        toggleReviewModal={toggleReviewtModal}
      />
      <div className="container max-w-7xl flex flex-col items-center my-16 mx-auto px-2 ">
        <h1 className="text-lg md:text-3xl font-medium md:mb-4 w-full mx-auto px-6">
          My Gadgets
        </h1>
        {noGadget ? <EmptyGadgetSection /> : <MyGadgets />}
        <ReviewSection toggleReviewModal={toggleReviewtModal} />
      </div>
      <Modal isOpen={contactModalOpen}>
        <ViewContactModal toggleContactModal={toggleContactModal} />
      </Modal>

      <Modal isOpen={reviewModalOpen}>
        <ReviewModal toggleReviewModal={toggleReviewtModal} />
      </Modal>

      <Modal isOpen={editModalOpen}>
        <EditProfileModal toggleEditModal={toggleEditModal} />
      </Modal>
    </div>
  );
}
