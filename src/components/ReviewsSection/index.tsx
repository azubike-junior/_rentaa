import jwt_decode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import avatar from '../../images/avatar.jpg'
import ProfileIcon from '../../images/profileIcon.svg'
import { ITokenDecode } from '../../interfaces'
import { toggleReviewModal } from '../../services/Mutations/Modal'
import { getUserById } from '../../services/Queries/getUser'
import { RootState, useAppDispatch } from '../../store/store'
import config from '../../utils/config'
import Button from '../Button'
import ProfileReview from '../ProfileReview'

const ReviewsSection = ({ reviews }: any) => {
  const dispatch = useAppDispatch()

  // const reviews = data?.profile?.reviews

  console.log('>>>>>>>reviews', reviews)


  const { pathname } = useLocation()

  const {
    REACT_APP_AWS_AMAZON,
    REACT_APP_AWS_REGION,
    REACT_APP_AWS_HTTP,
    REACT_APP_BUCKET_NAME,
  } = config

  const access: string = JSON.parse(localStorage.getItem('accessToken') || '{}')
  const [image, setImage] = useState({})

  const { reviewModalOpen } = useSelector(
    (state: RootState) => state.modalReducer,
  )

  const { loading: userLoading, data: userData } = useSelector(
    (state: RootState) => state.getUserById,
  )


  const decodedUser: ITokenDecode = jwt_decode(access)

  const { id } = useParams<{ id: string }>()

  const href =
    `${REACT_APP_AWS_HTTP}` +
    `${REACT_APP_AWS_REGION}` +
    `${REACT_APP_AWS_AMAZON}`

  const bucketUrl = href + `${REACT_APP_BUCKET_NAME}` + '/'

  const reviewData = reviews?.map((review: any) => {
    return {
      image: bucketUrl + 'ProfilePhotos%' + encodeURIComponent(review.avatarId) + '.jpg',
      review: review.review,
      reviewer: review.reviewer,
      id: review.id,
    }
  })

  // console.log(">>>>>>.reviewImg", reviewData[0]?.image)

  // const reviewData = reviews?.map((review: any) => {
  //   return {
  //     avatarId: review.avatarId,
  //     review: review.review,
  //     reviewer: review.reviewer,
  //     id: review.id,
  //   }
  // })

  /**
   * todo: get the images of the reviewer from through the avatarId
   */
  useEffect(() => {
    for (let i = 0; i < reviewData?.length; i++) {
      const { avatarId, review, reviewer, id } = reviewData[i]
      //  dispatch(getProfileAvatar({}));
      dispatch(getUserById(id))
    }
  }, [])

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
                imageUrl={!review?.image ? avatar : review.image}
                name={review.reviewer}
                reviewText={review.review}
              />
            )
          })}
        </div>
      )}

      {pathname === '/profile' ? (
        ''
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
  )
}
export default ReviewsSection
