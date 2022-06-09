import ProfileIcon from '../../images/profileIcon.svg';
import ReviewImage from '../../images/reviewImage.png';
import ReviewImage2 from '../../images/reviewImage2.png';
import ReviewImage3 from '../../images/reviewImage3.png';
import ProfileReview from '../ProfileReview';
const ReviewsSection : React.FC = () => {
    return (
        <section className="w-full max-w-278px xl:max-w-xxxs px-7 pt-11 pb-40 shadow-xmd rounded-20">
            <div className='inline-flex gap-3 mb-9'>
                <img src={ProfileIcon} />
                <p className='text-lg text-secondary'>Reviews</p>
            </div>
            <div className='flex flex-col gap-9'>
                <ProfileReview imageUrl={ReviewImage} name="John Okafor" reviewText='“Working with Donald was very engaging. He was timely and made sure all our dealings were very transparent”'/>
                <ProfileReview imageUrl={ReviewImage2} name="Felicia Kingsmeadow" reviewText='“Working with Donald was very engaging. He was timely and made sure all our dealings were very transparent”'/>
                <ProfileReview imageUrl={ReviewImage3} name="Breesha Clinton" reviewText='“Working with Donald was very engaging. He was timely and made sure all our dealings were very transparent”'/>
            </div>
        </section>
    );
}
export default ReviewsSection;