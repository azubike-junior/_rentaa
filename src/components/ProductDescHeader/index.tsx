import React from "react";
import Button from "./../Button";
import bookmark from "../../images/bookmarkGray.svg";
import camera from "../../images/soundEquipment.png";
import phone from "../../images/whitePhone.svg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleContactModal,
  toggleDeleteModal,
} from "../../services/Mutations/Modal";
import { findContact } from "../../services/Queries/findUserContact";
import { RootState, useAppDispatch } from "../../store/store";
import Modal from "./../Modal/index";
import ViewContactModal from "../ViewContactModal";
import { ITokenDecode } from "../../interfaces";
import jwt_decode from "jwt-decode";
import deleteIcon from "../../images/deleteIcon.svg";
import DeleteModal from "./../deleteModal/index";
import { findGadget } from "./../../services/Queries/findGadget";
import config from "../../utils/config"

export default function ProductDescHeader({ photoKey, gadget }: any) {
  const access: string = localStorage.getItem("accessToken") || "";
  const decodedUser: ITokenDecode = jwt_decode(access);

  const {
    REACT_APP_AWS_AMAZON,
    REACT_APP_AWS_REGION,
    REACT_APP_AWS_HTTP,
    REACT_APP_BUCKET_NAME,
  } = config

  // console.log(">>>>>>>>react_aws", REACT_APP_BUCKET_NAME)

  

  const { id } = useParams<{ id: string | any }>();

  const dispatch = useAppDispatch();
  const { data: contactData, loading } = useSelector(
    (state: RootState) => state.findContactReducer
  );
  const { contactModalOpen, deleteModalOpen } = useSelector(
    (state: RootState) => state.modalReducer
  );
  const {
    user,
    name,
    price,
    condition,
    lga,
    category,
    state,
    description,
    photos,
  } = gadget;

  const href =
    `${REACT_APP_AWS_HTTP}` +
    `${REACT_APP_AWS_REGION}` +
    `${REACT_APP_AWS_AMAZON}`;

  const bucketUrl = href + `${REACT_APP_BUCKET_NAME}` + "/";
  const image = bucketUrl + encodeURIComponent(photoKey?.key);


  // console.log(">>>>>>gadget", gadget)

  return (
    <div className="max-w-7xl mx-auto px-8 py-16 font-dm-sans">
      <h1 className="text-2xl text-center md:text-justify md:text-4xl font-dm-sans pb-8">
        {name}
      </h1>
      <div className="pb-14 md:flex items-center ">
        <img
          src={image}
          alt="my gadget"
          className="mx-auto md:mx-0 h-52 w-64 lg:w-[300px] lg:h-[200px] rounded-lg p-3 xl:w-[300px] xl:h-[200px] border md:mr-10 lg:mr-14 xl:mr-14"
        />
        <div className="pt-3 lg:pt-7">
          <p className="text-xl text-center md:text-justify text-gray-400 pb-5">
            Posted by{" "}
            <span
              className=" text-secondary"
              onClick={() => window.location.reload()}
            >
              <Link
                to={`/user_profile/${user?.id}`}
              >{`${user?.first_name} ${user?.last_name}`}</Link>
            </span>{" "}
          </p>
          <p className="text-xl text-center md:text-justify md:text-2xl text-gray-400 pb-9">
            &#x20A6;{price}
          </p>

          <div className="grid place-content-center place-items-center lg:flex">
            {decodedUser?.user_id === user?.id ? (
              <Link to={`/edit_gadget/${id}`}>
                <Button
                  className="py-5 px-8 bg-secondary text-sm md:text-lg lg:px-4 lg:py-4 xl:px-8 xl:py-5 mb-6 text-white lg:mr-10"
                  child="Edit Gadget Info"
                  type="button"
                  img={phone}
                  onClick={() => {
                    dispatch(findGadget(id));
                  }}
                />
              </Link>
            ) : (
              <Button
                className="py-5 px-8 bg-secondary text-sm md:text-lg lg:px-4 lg:py-4 xl:px-8 xl:py-5 mb-6 text-white lg:mr-8"
                child="View Contact Info"
                onClick={() => {
                  dispatch(toggleContactModal());
                  dispatch(findContact(user?.id));
                }}
                type="button"
                img={phone}
              />
            )}

            <div className="flex lg:justify-center lg:items-center lg:pb-4">
              {" "}
              {decodedUser?.user_id === user?.id ? (
                <div
                  className="cursor-pointer flex"
                  onClick={() => dispatch(toggleDeleteModal())}
                >
                  <img src={deleteIcon} className="w-7 mr-3" alt="" />
                  <p className="text-base md:text-xl text-red-500">
                    Delete Gadget
                  </p>
                </div>
              ) : (
                <div className="cursor-pointer flex">
                  <img src={bookmark} className="w-5 mr-3" alt="" />
                  <p className="text-base md:text-xl text-gray-400">
                    Save to Bookmarks
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className=" font-dm-sans text-base md:text-xl space-y-4 text-center md:text-left ">
        <p className="">
          Product Category:{" "}
          <Link to={`/view_categories/${category?.id}`}>
            <span className="text-secondary">{category?.name}</span>
          </Link>
        </p>
        <p>Location: {`${lga}, ${state}`}</p>
        <p>Gadget Condition: {condition}</p>
      </div>

      <Modal isOpen={contactModalOpen}>
        <ViewContactModal {...contactData} />
      </Modal>

      <Modal isOpen={deleteModalOpen}>
        <DeleteModal id={id} />
      </Modal>
    </div>
  );
}
