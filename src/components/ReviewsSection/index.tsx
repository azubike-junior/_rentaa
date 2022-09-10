import ProfileIcon from "../../images/profileIcon.svg";
import ReviewImage from "../../images/reviewImage.png";
import ReviewImage2 from "../../images/reviewImage2.png";
import ReviewImage3 from "../../images/reviewImage3.png";
import avatar from "../../images/avatar.jpg";
import Button from "../Button";
import ProfileReview from "../ProfileReview";
import { useDispatch, useSelector } from "react-redux";
import { toggleReviewModal } from "../../services/Mutations/Modal";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { RootState } from "../../store/store";
import jwt_decode from "jwt-decode";
import { ITokenDecode } from "../../interfaces";
import { getProfileAvatar } from "../../services/Queries/getProfileAvatar";

const ReviewsSection = ({ reviews }: any) => {
  const dispatch = useDispatch();

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

  const { id } = useParams<{ id: string }>();

  const reviewData = reviews?.map((review: any) => {
    return {
      avatarId: review.avatarId,
      review: review.review,
      reviewer: review.reviewer,
    };
  });

  /**
   * todo: get the images of the reviewer from through the avatarId
   */
  useEffect(() => {
    for (let i = 0; i < reviewData?.length; i++) {
      const { avatarId, review, reviewer } = reviewData[i];

      dispatch(getProfileAvatar({ avatarId, setImage }));
    }
  }, []);

  return (
    <section className="w-full max-w-278px xl:max-w-xxxs px-7 pt-11 pb-40 shadow-xmd rounded-20">
      <div className="inline-flex gap-3 mb-9">
        <img src={ProfileIcon} />
        <p className="text-lg text-secondary">Reviews</p>
      </div>

      {reviews?.length === 0 ? (
        <p className="pt-2 md:pt-5">
          <i className="text-sm md:text-xl px-8 md:px-8 pt-5">No Reviews yet</i>
        </p>
      ) : (
        <div className="flex flex-col gap-9">
          {reviewData?.map((review: any) => {
            return (
              <ProfileReview
                imageUrl={!image ? avatar : image}
                name={review.reviewer}
                reviewText={review.review}
              />
            );
          })}
        </div>
      )}

      {pathname === "/profile" ? (
        ""
      ) : (
        <div className="xxs:grid xs:flex sm:flex pt-3 md:pt-7 justify-center items-center">
          {decodedUser?.user_id !== id && (
            <Button
              child="Post Review"
              className=" bg-secondary mt-20 md:mt-0 text-xs md:text-sm lg:mt-20 lg:text-base mb-3 px-6 py-4 text-white"
              type="button"
              onClick={() => dispatch(toggleReviewModal())}
            />
          )}
        </div>
      )}
    </section>
  );
};
export default ReviewsSection;
