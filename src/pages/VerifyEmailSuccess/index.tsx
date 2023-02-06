import React, { useEffect } from "react";
import verifyImage from "../../images/verifyImage.png";
import logo from "../../images/rentaa_w.svg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "./../../services/Queries/verifyEmail";
import { RootState, useAppDispatch } from "../../store/store";

export default function VerifyEmailSuccess() {
  const dispatch = useAppDispatch();
  const { token } = useParams<{ token: string | any }>();

  const { data: response, error } = useSelector(
    (state: RootState) => state.verifyEmailReducer
  );

  useEffect(() => {
    dispatch(verifyEmail(token));
  }, []);

  return (
    <div className="bg-secondary font-dm-sans">
      <div className="flex flex-col items-center">
        <div className="mb-8 mt-24">
          <Link to="/">
            <img
              src={logo}
              className="h-24 w-24 md:h-40 md:w-40"
              alt="rentaa logo"
            />
          </Link>
        </div>

        <div className="flex flex-col text-left container uppercase bg-white md:pb-20 md:w-900 text-sm rounded-lg">
          <img
            src={verifyImage}
            className="w-30 h-48 md:h-64 container round-t-lg md:rounded-none"
            alt="verifyImage"
          />

          {response?.status === 200 && (
            <h1 className="text-center mb-6 text-xl md:text-3xl pt-32 capitalize bolder">
              Email verification successful
            </h1>
          )}

          {error?.statusCode === 400 && (
            <h1 className="text-center mb-6 text-xl md:text-3xl pt-32 capitalize bolder">
              This Link has Expired
            </h1>
          )}

          <p className="text-center md:text-xl lowercase">
            You can now log in to your account
          </p>
          <p className="pb-4 text-center md:text-xl lowercase "></p>

          <div className=" bg-bgAsh my-16 w-56  md:w-400 h-0.5 text-center items-center justify-center mx-auto "></div>

          {/* <p className="text-center md:text-xl lowercase">
            Didn't get your email?
          </p> */}
          <Link to="/login">
            <p className="pb-8 text-center md:text-xl lowercase text-secondary ">
              Click here to Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
