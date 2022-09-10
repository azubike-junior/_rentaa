import ReviewImage from '../../images/reviewImage.png';
interface ProfileReviewProps {
    imageUrl : any;
    name: string;
    reviewText: string;
}

const ProfileReview : React.FC<ProfileReviewProps> = ({imageUrl, name, reviewText}) => {
    return (
      <div>
        <div className="inline-flex items-center gap-4 font-dm-sans">
          <img
            src={imageUrl}
            className="w-8 h-8 sm:w-20 sm:h-20 object-cover rounded-full"
          />
          <p className="text-base font-bold">{name}</p>
        </div>
        <article className="italic text-base mt-2">"{reviewText}"</article>
      </div>
    );
}
export default ProfileReview;
