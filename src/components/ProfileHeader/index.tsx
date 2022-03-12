import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import domAvatar from "../../images/avatar.jpg";
import {
  toggleContactModal,
  toggleEditModal,
  toggleReviewModal,
} from "../../services/Mutations/Modal";
import { RootState } from "../../store/store";
import { capitalizeFirstLetter } from "../../utils/helper";
import Button from "../Button";
import { AiOutlineEdit } from "react-icons/ai";
import { getUserById } from "./../../services/Queries/getUser";
import { getProfileAvatar } from "./../../services/Queries/getProfileAvatar";
import Loader from "../Loader";

export default function ProfileHeader() {
  const access = localStorage.getItem("accessToken");
  const [user, setUser] = useState(access);
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const { loading: userLoading, data } = useSelector(
    (state: RootState) => state.getUserById
  );

  const { data: avatarData, loading: profileAvatarLoading } = useSelector(
    (state: RootState) => state.getProfileAvatarReducer
  );
  const { profile } = data;

  console.log("====================================");
  console.log(data);
  console.log("====================================");

  const avatarId = localStorage.getItem("avatarId");

  const profileDescriptions = profile?.description
    ? profile?.description.split(".")
    : "";

  useEffect(() => {
    dispatch(getUserById());
  }, []);

  useEffect(() => {
    if (avatarId) {
      dispatch(getProfileAvatar({ avatarId, setImage }));
    }
  }, []);

  return (
    <div className="px-6 max-w-7xl my-16 mb-32 mx-auto">
      {userLoading ? (
        <Loader />
      ) : (
        <div className="md:flex">
          <div className="md:pr-8 pb-2 ">
            <img
              src={!image ? domAvatar : image}
              alt=""
              className=" w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto md:mx-0"
            />
          </div>

          <div>
            <h1 className="text-base md:text-xl font-dm-sans pb-2 text-center md:text-left">
              {data?.first_name && capitalizeFirstLetter(data?.first_name)}{" "}
              {data?.last_name && capitalizeFirstLetter(data?.last_name)}
            </h1>

            <p className="text-base text-center md:text-left font-dm-sans mb-4">
              {profile?.lga ? capitalizeFirstLetter(profile?.lga) : ""}{" "}
              {profile?.state ? capitalizeFirstLetter(profile?.state) : ""}
            </p>

            <p className="text-sm text-center md:text-left font-dm-sans pb-1">
              {profile?.description ? profileDescriptions[0] : ""}{" "}
            </p>
            <p className="text-sm text-center md:text-left font-dm-sans">
              {profile?.description ? profileDescriptions[1] : ""}
              {profile?.description ? profileDescriptions[2] : ""}
            </p>

            <div className="xxs:grid xs:flex sm:flex pt-3 md:pt-7 justify-center items-center md:justify-start md:items-start ">
              {user ? (
                <Link to="/post_product">
                  <Button
                    child="Post a Gadget"
                    className=" bg-secondary mt-3 md:mt-0 text-xs md:text-sm lg:text-base mb-3 px-6 py-4 mr-3 text-white"
                    type="button"
                  />
                </Link>
              ) : (
                <Button
                  child="View Contact Info"
                  className=" bg-secondary mt-3 md:mt-0 text-xs md:text-sm lg:text-base mb-3 px-6 py-4 mr-3 text-white"
                  type="button"
                  onClick={() => dispatch(toggleContactModal())}
                />
              )}

              {user ? (
                <Button
                  child="Edit Profile"
                  className="px-8 border-2 border-secondary text-xs md:text-sm lg:text-base text-secondary sm:px-9 py-3.5"
                  type="button"
                  onClick={() => {
                    dispatch(getUserById());
                    dispatch(toggleEditModal());
                  }}
                />
              ) : (
                <Button
                  child="Post Review"
                  className="border-2 border-secondary text-xs md:text-sm lg:text-base text-secondary px-9 py-3.5"
                  type="button"
                  onClick={() => dispatch(toggleReviewModal())}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
