import Review from "../Review";
import Button from "./../Button/index";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function ReviewSection({ toggleReviewModal }: any) {
  const user = JSON.parse(localStorage.getItem("accessToken") || "{}") 

  const dispatch = useDispatch();
  const { loading, data } = useSelector(
    (state: RootState) => state.getUserById
  );

  const { profile } = data;

  return (
    <div className="container max-w-7xl mx-auto pb-14">
      <h1 className="text-2xl md:px-8 font-medium mt-5">{user ? "Your Reviews" : "Reviews"}</h1>

      {profile?.reviews.length === 0 ? (
        <p className="pt-5">
          <i className="md:px-8 pt-5">No Reviews yet</i>
        </p>
      ) : (
        <>
          <Review
            imageUrl="https://st2.depositphotos.com/3758943/6040/i/950/depositphotos_60400959-stock-photo-a-break-at-work.jpg"
            reviewText="'Working with Donald was very engaging. He was timely and made sure all our dealings were
                very transparent'"
            authorName="John Okafor"
          />
          <Review
            imageUrl="https://st2.depositphotos.com/3758943/6040/i/950/depositphotos_60400959-stock-photo-a-break-at-work.jpg"
            reviewText="'Working with Donald was very engaging. He was timely and made sure all our dealings were
                very transparent'"
            authorName="John Okafor"
          />
          <Review
            imageUrl="https://st2.depositphotos.com/3758943/6040/i/950/depositphotos_60400959-stock-photo-a-break-at-work.jpg"
            reviewText="'Working with Donald was very engaging. He was timely and made sure all our dealings were
                very transparent'"
            authorName="John Okafor"
          />
        </>
      )}

      {!user && (
        <div className="grid place-content-center">
          <Button
            child="Leave a Review"
            className=" bg-secondary mb-3 mt-7 px-8 py-4 text-white"
            type="button"
            onClick={toggleReviewModal}
          />
        </div>
      )}
    </div>
  );
}
