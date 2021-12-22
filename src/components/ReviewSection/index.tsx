import Review from "../Review";

export default function ReviewSection() {
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
    </div>
  );
}
