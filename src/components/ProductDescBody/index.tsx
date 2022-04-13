import React, { useEffect } from "react";
import camera from "../../images/camera-2.svg";
import Button from "./../Button/index";
import phone from "../../images/whitePhone.svg";
import Product from "../Product";
import { toggleContactModal } from "../../services/Mutations/Modal";
import { findContact } from "../../services/Queries/findUserContact";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Modal from "../Modal";
import ViewContactModal from "../ViewContactModal";
import { ITokenDecode } from "../../interfaces";
import jwt_decode from "jwt-decode";
import { Link, useParams } from "react-router-dom";
import config from "../../utils/config";
import { viewMoreGadget } from "./../../services/Queries/viewMoreGadget";

function SingleProduct({ img }: any) {
  return (
    <div className="border w-48 h-56">
      <img src={img} alt="" className="w-48 h-56" />
    </div>
  );
}

export default function ProductDescBody({ gadget }: any) {
  const access: string = localStorage.getItem("accessToken") || "";
  const decodedUser: ITokenDecode = jwt_decode(access);

  const {
    REACT_APP_AWS_AMAZON,
    REACT_APP_AWS_REGION,
    REACT_APP_AWS_HTTP,
    REACT_APP_BUCKET_NAME,
  } = config;

  const dispatch = useDispatch();
  const { photos, user, description } = gadget;

  const { data: contactData, loading } = useSelector(
    (state: RootState) => state.findContactReducer
  );
  const { contactModalOpen } = useSelector(
    (state: RootState) => state.modalReducer
  );

  const { data: moreGadgets } = useSelector(
    (state: RootState) => state.viewMoreGadgetReducer
  );

  console.log(moreGadgets);

  let imageUrls;

  const href =
    `${REACT_APP_AWS_HTTP}` +
    `${REACT_APP_AWS_REGION}` +
    `${REACT_APP_AWS_AMAZON}`;

  const bucketUrl = href + `${REACT_APP_BUCKET_NAME}` + "/";
  imageUrls = photos?.map((photo: any) => {
    return bucketUrl + encodeURIComponent(photo.key);
  });

  let moreGadgetsPhotos;

  console.log(">>>>moreGadgets", moreGadgets);

  if (moreGadgets.length > 0) {
    moreGadgetsPhotos = moreGadgets
      ?.map((gadget: any) => {
        return {
          photos: gadget.photos,
          price: gadget.price,
          name: gadget.name,
        };
      })
      .map((photo: any) => {
        return { ...photo.photos, name: photo.name, price: photo.price };
      })
      .map((photo: any) => {
        return {
          imageUrl: bucketUrl + encodeURIComponent(photo[0].key),
          name: photo.name,
          price: photo.price,
        };
      });
  }

  // console.log("moreGadgetPhotos", moreGadgetsPhotos);

  return (
    <div className="max-w-7xl mx-auto px-8 font-dm-sans mb-20">
      <h1 className="text-base md:text-xl pb-3">Product Description:</h1>
      <p className="mx-auto leading-7 md:leading-9 text-sm md:text-base pb-3">
        {description ? description : "No Description for this gadget"}
      </p>
      <div className="pt-16">
        <h1 className="text-base md:text-xl pb-5">Product Pictures:</h1>
        <div className="place-content-center grid grid-flow-row md:gap-x-14 md:gap-y-6 md:pb-6 md:grid-cols-3 gap-y-2 lg:gap-y-7 lg:grid-cols-4 xl:grid-cols-6 ">
          {imageUrls?.map((image: string) => {
            return <SingleProduct img={image} />;
          })}
        </div>
      </div>

      {decodedUser?.user_id === user?.id ? (
        ""
      ) : (
        <div className="">
          <p className="pt-14 pb-10 text-xl">
            Do you want to rent this gadget from{" "}
            <span className="text-secondary">
              {`${user?.last_name} ${user?.first_name}`}?
            </span>{" "}
          </p>
          <Button
            className="py-5 px-4 bg-secondary text-sm md:text-base lg:px-4 lg:py-4 xl:px-14 xl:py-4 mb-4 text-white mr-8"
            child={`View ${user?.last_name}'s Contact`}
            type="button"
            img={phone}
            onClick={() => {
              dispatch(toggleContactModal());
              dispatch(findContact(user?.id));
            }}
          />
          <Link to={`/user_profile/${user?.id}`}>
            <Button
              className="py-4 px-8 text-sm md:text-lg lg:px-4 lg:py-3 xl:px-10 xl:py-3.5 mb-6 border-2 border-secondary text-secondary mr-8"
              child={`View ${user?.last_name}'s Profile`}
              type="button"
            />
          </Link>
        </div>
      )}

      {decodedUser?.user_id === user?.id ? (
        ""
      ) : (
        <div>
          <p className="pt-14 pb-10 text-xl">
            More gadgets from{" "}
            <span className="text-secondary">{`${user?.last_name} ${user?.first_name}`}</span>{" "}
          </p>

          <div className="place-content-center grid grid-flow-row md:gap-x-16 md:gap-y-6 md:pb-6 md:grid-cols-3 gap-y-2 lg:gap-y-7 lg:grid-cols-4 xl:grid-cols-6 ">
            {moreGadgetsPhotos?.map((gadget: any) => {
              return (
                <Product
                  imageUrl={gadget.imageUrl}
                  productName={gadget.name}
                  price={gadget.price}
                />
              );
            })}
          </div>
        </div>
      )}
      <Modal isOpen={contactModalOpen}>
        <ViewContactModal {...contactData} />
      </Modal>
    </div>
  );
}
