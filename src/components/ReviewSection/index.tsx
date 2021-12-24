import Review from "../Review";
import Button from "./../Button/index";

export default function ReviewSection({toggleReviewModal}:any) {
  const user = true;
  return (
    <div className="container max-w-7xl mx-auto pb-14">
      <h1 className="text-2xl md:px-8 font-medium mt-5">Reviews</h1>
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

      <div className="grid place-content-center">
        <Button
          child="Leave a Review"
          className=" bg-secondary mb-3 mt-7 px-8 py-4 text-white"
          type="button"
          onClick={toggleReviewModal}
        />
      </div>
    </div>
  );
}
