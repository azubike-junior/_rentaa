import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyGadgetSection from "../../components/EmptyGadgetSection";
import MyGadgets from "../../components/MyGadgets";
import ProfileHeader from "../../components/ProfileHeader";
import ReviewSection from "../../components/ReviewSection";
import { RootState } from "../../store/store";
import { getGadgets } from "../../services/Queries/getGadgets";
import { useParams } from "react-router-dom";
import ExternalProfileHeader from "../../components/ExternalProfileHeader";
import Modal from "../../components/Modal";
import ViewContactModal from "../../components/ViewContactModal";
import ReviewModal from "../../components/ReviewModal";
import EditProfileModal from "../../components/EditProfileModal";
import { getUserById } from "../../services/Queries/getUser";
import config from "../../utils/config";

function ExternalUserProfile() {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const {
    REACT_APP_AWS_AMAZON,
    REACT_APP_AWS_REGION,
    REACT_APP_AWS_HTTP,
    REACT_APP_BUCKET_NAME,
  } = config;

  const { id } = useParams<{ id: string }>();

  const { loading: userLoading, data } = useSelector(
    (state: RootState) => state.getUserById
  );

  // console.log(">>>>>>data from userProfile", data);

  let imageUrls;
  let gadgetData;

  const { data: contactData, loading } = useSelector(
    (state: RootState) => state.findContactReducer
  );

  /**
   * For each of the gadgets, map the gadget key to the bucket url to display the image
   */
  if (data?.gadgets?.length > 0) {
    gadgetData = data?.gadgets?.map((gadget) => {
      // console.log(gadget);
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

  /**
   * if the id is added as a parameter to the getUserById func, this means its getting an external user.
   * it gets an avatarId2 and passes it to  the profile avatar endpoint to get the external user image
   *
   */
  useEffect(() => {
    dispatch(getUserById({ id, setImage }));
  }, []);

  const { editModalOpen, reviewModalOpen, contactModalOpen } = useSelector(
    (state: RootState) => state.modalReducer
  );

  return (
    <div>
      <ExternalProfileHeader
        data={data}
        userLoading={userLoading}
        image={image}
      />
      <div className="container max-w-7xl flex flex-col items-center my-16 mb-32 mx-auto px-2 ">
        <h1 className="text-lg md:text-3xl font-medium md:mb-4 w-full mx-auto px-6">
          Gadgets
        </h1>
        {data?.gadgets?.length === 0 ? (
          <EmptyGadgetSection />
        ) : (
          <MyGadgets gadgets={imageUrls} gadgetLoading={userLoading} />
        )}
        <ReviewSection reviews={data?.profile?.reviews} />
      </div>

      <Modal isOpen={contactModalOpen}>
        <ViewContactModal {...contactData} />
      </Modal>

      <Modal isOpen={reviewModalOpen}>
        <ReviewModal id={id} />
      </Modal>

      <Modal isOpen={editModalOpen}>
        <EditProfileModal />
      </Modal>
    </div>
  );
}

export default ExternalUserProfile;
