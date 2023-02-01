import jwt_decode from 'jwt-decode'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import avatar from '../../images/avatar.jpg'
import { toggleReviewModal } from '../../services/Mutations/Modal'
import { RootState, useAppDispatch } from '../../store/store'
import config from '../../utils/config'
import Review from '../Review'
import { ITokenDecode } from './../../interfaces/index'
import Button from './../Button/index'

export default function ReviewSection({ reviews }: any) {
  const { pathname } = useLocation()

  const {
    REACT_APP_AWS_AMAZON,
    REACT_APP_AWS_REGION,
    REACT_APP_AWS_HTTP,
    REACT_APP_BUCKET_NAME,
  } = config

  const access: string = JSON.parse(localStorage.getItem('accessToken') || '{}')
  // const [image, setImage] = useState({})

  const { reviewModalOpen } = useSelector(
    (state: RootState) => state.modalReducer,
  )

  const { loading: userLoading, data: userData } = useSelector(
    (state: RootState) => state.getUserById,
  )

  const decodedUser: ITokenDecode = jwt_decode(access)

  const dispatch = useAppDispatch()

  const { id } = useParams<{ id: string }>()

  // const reviewData = reviews?.map((review: any) => {
  //   return {
  //     avatarId: review.avatarId,
  //     review: review.review,
  //     reviewer: review.reviewer,
  //   }
  // })

  const href =
    `${REACT_APP_AWS_HTTP}` +
    `${REACT_APP_AWS_REGION}` +
    `${REACT_APP_AWS_AMAZON}`

  const bucketUrl = href + `${REACT_APP_BUCKET_NAME}` + '/'

  const reviewData = reviews?.map((review: any) => {
    return {
      image:
        bucketUrl +
        'ProfilePhotos%' +
        encodeURIComponent(review.avatarId) +
        '.jpg',
      review: review.review,
      reviewer: review.reviewer,
      id: review.id,
    }
  })

  console.log('>>>>>>>>reviewData', reviewData)

  /**
   * todo: get the images of the reviewer from through the avatarId
   */
  useEffect(() => {
    // for (let i = 0; i < reviewData?.length; i++) {
    //   const { avatarId, review, reviewer } = reviewData[i];
    //   dispatch(getProfileAvatar({ avatarId, setImage }));
    // }
  }, [])

  // console.log(">>>>>img", image)

  return (
    <div className="container max-w-7xl mx-auto pb-14">
      <h1 className="text-base md:text-2xl px-8 md:px-8 font-medium mt-5">
        {decodedUser.user_id === id ? 'Reviews' : 'Your Reviews'}
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
                imageUrl={!reviewData?.image ? avatar : reviewData?.image}
                reviewText={review.review}
                authorName={review.reviewer}
              />
            )
          })}
        </>
      )}

      {pathname === '/profile' ? (
        ''
      ) : (
        <div>
          {decodedUser?.user_id !== id ? (
            <div className="grid place-content-center">
              <Button
                child="Leave a Review"
                className=" bg-secondary mb-3 mt-7 px-8 py-4 text-white"
                type="button"
                onClick={() => {
                  dispatch(toggleReviewModal())
                }}
              />
            </div>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  )
}
