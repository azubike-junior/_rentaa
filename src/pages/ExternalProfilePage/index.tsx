import { useEffect, useState } from "react";
import EditProfileModal from "../../components/EditProfileModal";
import ReviewsSection from "../../components/ReviewsSection";
import SettingsSection from "../../components/SettingsSection";
import UserProfileSection from "../../components/UserProfileSection";
import Modal from "../../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import ChangePasswordModal from "../../components/ChangePasswordModal";
import ChangePasswordSuccessModal from "../../components/changePasswordSuccessModal";
import LogoutModal from "../../components/LogoutModal";
import config from "../../utils/config";
import { getGadgets } from "./../../services/Queries/getGadgets";
import ReviewSection from "../../components/ReviewSection";
import ExternalProfileHeader from "../../components/ExternalProfileHeader";
import ViewContactModal from "../../components/ViewContactModal";
import ReviewModal from "./../../components/ReviewModal/index";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { getUserById } from "../../services/Queries/getUser";
import { ITokenDecode } from "../../interfaces";
import ExternalProfileHeader2 from './../../components/ExternalProfileHeader2/index';

const ExternalProfilePage = () => {
  const access: string = localStorage.getItem("accessToken") || "";
  const decodedUser: ITokenDecode = jwt_decode(access);

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
    <>
      <div className="mx-auto container md:max-w-screen-lg xl:max-w-screen-xl w-full xxs:px-0 xs:px-2 md:pt-4 md:px-8 lg:grid lg:grid-cols-profileLayoutM xl:grid-cols-profileLayoutL gap-5">
        <section className="mb-6">
          <ExternalProfileHeader2
            gadgets={data?.gadgets}
            imageUrls={imageUrls}
            gadgetLoading={userLoading}
            image={image}
          />
        </section>
        <section className="hidden lg:block flex flex-col gap-9">
          {decodedUser?.user_id === id && <SettingsSection />}
          <ReviewsSection reviews={data?.profile?.reviews} />
        </section>

        <section className="block lg:hidden">
          <ReviewSection reviews={data?.profile?.reviews} />
        </section>

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
    </>
  );
};
export default ExternalProfilePage;
