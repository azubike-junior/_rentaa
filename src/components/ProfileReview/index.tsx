import ReviewImage from '../../images/reviewImage.png';
interface ProfileReviewProps {
    imageUrl : string;
    name: string;
    reviewText: string;
}

const ProfileReview : React.FC<ProfileReviewProps> = ({imageUrl, name, reviewText}) => {
    return (
        <div>
            <div className='inline-flex items-center gap-4'>
                <img src={imageUrl} className="w-12 h-12" />
                <p className='text-base font-medium'>{name}</p>
            </div>
            <article className='italic text-base mt-2'>
            {reviewText}
            </article>
        </div>
    );
}
export default ProfileReview;
