/* eslint-disable react-hooks/rules-of-hooks */
import Review from "../Review";
import Button from "./../Button/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { toggleReviewModal } from "../../services/Mutations/Modal";
import { useLocation, useParams } from "react-router-dom";
import { ITokenDecode } from "./../../interfaces/index";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { getProfileAvatar } from "./../../services/Queries/getProfileAvatar";
import { useState } from "react";
import { getUserById } from "./../../services/Queries/getUser";
import Modal from "../Modal";
import ReviewModal from "../ReviewModal";
import avatar from "../../images/avatar.jpg";
import { getReviewerImage } from "./../../services/Queries/getReviewerImage";

export default function ExternalReviewSection({ reviews }: any) {
  const { pathname } = useLocation();

  const access: string = JSON.parse(
    localStorage.getItem("accessToken") || "{}"
  );
  const [image, setImage] = useState({});

  const { reviewModalOpen } = useSelector(
    (state: RootState) => state.modalReducer
  );

  const { loading: userLoading, data: userData } = useSelector(
    (state: RootState) => state.getUserById
  );

  const decodedUser: ITokenDecode = jwt_decode(access);

  const dispatch = useDispatch();

  const { id } = useParams<{ id: string }>();

  const reviewData = reviews?.map((review: any) => {
    return {
      avatarId: review.avatarId,
      review: review.review,
      reviewer: review.reviewer,
    };
  });

  // console.log(">>>>>>reviewData", reviews);

  /**
   * todo: get the images of the reviewer from through the avatarId
   */
  useEffect(() => {
    for (let i = 0; i < reviewData?.length; i++) {
      const { avatarId, review, reviewer } = reviewData[i];

      // console.log(">>>>>>avatr ooo", avatarId);

      useAppDispatch(getReviewerImage({ avatarId, setImage }));
    }
  }, []);

  // console.log(">>>>>image", image);

  return (
    <div className="container max-w-7xl mx-auto pb-14">
      <h1 className="text-base md:text-2xl px-8 md:px-8 font-medium mt-5">
        {decodedUser.user_id === id ? "Reviews" : "Your Reviews"}
      </h1>

      {reviews?.length === 0 ? (
        <p className="pt-2 md:pt-5">
          <i className="text-sm md:text-xl px-8 md:px-8 pt-5">No Reviews yet</i>
        </p>
      ) : (
        <>
          {reviewData?.map((review: any) => {
            return (
              <Review
                imageUrl={!image ? avatar : image}
                reviewText={review.review}
                authorName={review.reviewer}
              />
            );
          })}
        </>
      )}

      {pathname === "/profile" ? (
        ""
      ) : (
        <div>
          {decodedUser?.user_id !== id ? (
            <div className="grid place-content-center">
              <Button
                child="Leave a Review"
                className=" bg-secondary mb-3 mt-7 px-8 py-4 text-white"
                type="button"
                onClick={() => {
                  useAppDispatch(toggleReviewModal());
                }}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}
