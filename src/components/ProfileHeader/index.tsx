import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import domAvatar from "../../images/avatar.jpg";
import {
  toggleContactModal,
  toggleEditModal,
  toggleReviewModal,
  toggleChangePasswordModal,
  toggleLogoutModal,
} from "../../services/Mutations/Modal";
import { RootState } from "../../store/store";
import { capitalizeFirstLetter } from "../../utils/helper";
import Button from "../Button";
import { AiOutlineEdit } from "react-icons/ai";
import { getUserById } from "./../../services/Queries/getUser";
import { getProfileAvatar } from "./../../services/Queries/getProfileAvatar";
import settingIcon from "../../images/settingIcons.svg";
import Loader from "../Loader";

export default function ProfileHeader() {
  const access = localStorage.getItem("accessToken");
  const [user, setUser] = useState(access);
  const [image, setImage] = useState<any>();
  const [openSettings, setOpenSettings] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading: userLoading, data } = useSelector(
    (state: RootState) => state.getUserById
  );

  localStorage.setItem("first_name", data?.first_name);
  localStorage.setItem("last_name", data?.last_name);

  const { profile } = data;

  const avatarId = localStorage.getItem("avatarId");

  const profileDescriptions = profile?.description
    ? profile?.description.split(".")
    : "";

  const showSettings = () => {
    setOpenSettings(true);
  };

  const closeSettings = () => {
    setOpenSettings(false);
  };

  /**
   * when the getUserById func is called after a user logs in
   * it get a response (Profile: avatarId), the response is set to the local storage
   *
   */
  useEffect(() => {
    dispatch(getUserById({ setImage }));
  }, []);

  /**
   * the value(avatarId) in the localStorage Is used to get an image
   * in the getProfileAvatar func, the user image is fetched by the avatarId
   * the setImage func is used to set the buffer response returned from the getProfileAvatar.
   */
  useEffect(() => {
    if (avatarId) {
      dispatch(getProfileAvatar({ avatarId, setImage }));
    }
  }, []);

  return (
    <div
      className="px-6 max-w-7xl my-16 mb-32 mx-auto"
      onClick={() => {
        if (openSettings) {
          closeSettings();
        }
      }}
    >
      {userLoading ? (
        <Loader />
      ) : (
        <div className="md:flex">
          <div className="pb-2 ">
            <img
              src={!image ? domAvatar : image}
              alt=""
              className=" w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto md:mx-0 border-2"
            />
          </div>

          <div className="md:pl-14">
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
                    className=" bg-secondary mt-3 md:mt-0 text-xs md:text-sm lg:text-base mb-3 px-6 py-4 md:mr-8 text-white"
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
                <div className="">
                  <div
                    onClick={() => showSettings()}
                    className="cursor-pointer flex font-dm-sans md:justify-center md:items-center md:pt-2"
                  >
                    <img
                      src={settingIcon}
                      className="w-6 ml-4 md:ml-0 md:w-10 mr-2"
                      alt=""
                    />
                    <p className="text-base md:text-xl text-secondary">
                      Settings
                    </p>
                  </div>
                  {openSettings && (
                    <div className="font-dm-sans ml-1 mt-4 px-4 md:px-6 py-5 cursor-pointer shadow-xl text-sm md:text-base absolute">
                      <ul className="space-y-3">
                        <li
                          onClick={() => {
                            dispatch(getUserById({}));
                            dispatch(toggleEditModal());
                          }}
                        >
                          Edit Profile
                        </li>
                        <li
                          onClick={() => {
                            dispatch(toggleChangePasswordModal());
                          }}
                        >
                          Change Password
                        </li>
                        <li
                          className="text-red-700"
                          onClick={() => {
                            dispatch(toggleLogoutModal());
                          }}
                        >
                          Log out
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
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
