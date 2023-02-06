import jwt_decode from 'jwt-decode'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import EditProfileModal from '../../components/EditProfileModal'
import Modal from '../../components/Modal'
import ReviewSection from '../../components/ReviewSection'
import ReviewsSection from '../../components/ReviewsSection'
import SettingsSection from '../../components/SettingsSection'
import ViewContactModal from '../../components/ViewContactModal'
import { ITokenDecode } from '../../interfaces'
import { findReviewsByReviewerId } from '../../services/Queries/findReviewByReviewerId'
import { getUserById } from '../../services/Queries/getUser'
import { RootState, useAppDispatch } from '../../store/store'
import config from '../../utils/config'
import ExternalProfileHeader2 from './../../components/ExternalProfileHeader2/index'
import ReviewModal from './../../components/ReviewModal/index'

// Visiting user's account page

const ExternalProfilePage = () => {
  const access: string = localStorage.getItem('accessToken') || ''
  const decodedUser: ITokenDecode = jwt_decode(access)

  const dispatch = useAppDispatch()
  // const [image, setImage] = useState()

  const {
    REACT_APP_AWS_AMAZON,
    REACT_APP_AWS_REGION,
    REACT_APP_AWS_HTTP,
    REACT_APP_BUCKET_NAME,
  } = config

  const { id } = useParams<{ id: string }>()

  console.log()

  const { loading: userLoading, data } = useSelector(
    (state: RootState) => state.getUserById,
  )

  const { loading: reviewsLoading, data: reviewData } = useSelector(
    (state: RootState) => state.findReviewsByReviewerSlice,
  )

  let imageUrls
  let gadgetData

  const { data: contactData, loading } = useSelector(
    (state: RootState) => state.findContactReducer,
  )

  const href =
    `${REACT_APP_AWS_HTTP}` +
    `${REACT_APP_AWS_REGION}` +
    `${REACT_APP_AWS_AMAZON}`

  const bucketUrl = href + `${REACT_APP_BUCKET_NAME}` + '/'

  const image = bucketUrl + encodeURIComponent(data?.profile?.avatar?.key)

  /**
   * For each of the gadgets, map the gadget key to the bucket url to display the image
   */
  if (data?.gadgets?.length > 0) {
    gadgetData = data?.gadgets?.map((gadget) => {
      // console.log(gadget);
      return { gadgetKey: gadget.photos[0].key, id: gadget.id }
    })

    imageUrls = gadgetData?.map((gadget: any) => {
      return {
        image: bucketUrl + encodeURIComponent(gadget.gadgetKey),
        id: gadget.id,
      }
    })
  }

  /**
   * if the id is added as a parameter to the getUserById func, this means its getting an external user.
   * it gets an avatarId2 and passes it to  the profile avatar endpoint to get the external user image
   *
   */
  useEffect(() => {
    dispatch(getUserById({ id }))
  }, [])

  useEffect(() => {
    dispatch(findReviewsByReviewerId({ id }))
  }, [])

  const { editModalOpen, reviewModalOpen, contactModalOpen } = useSelector(
    (state: RootState) => state.modalReducer,
  )

  return (
    <>
      <div className="mx-auto container md:max-w-screen-lg xl:max-w-screen-xl w-full xxs:px-0 xs:px-2 md:pt-4 md:px-8 lg:grid lg:grid-cols-profileLayoutM xl:grid-cols-profileLayoutL gap-5">
        <section className="mb-6">
          <ExternalProfileHeader2
            gadgets={data?.gadgets}
            imageUrls={imageUrls}
            gadgetLoading={userLoading}
            image={image}
          />
        </section>

        <section className="hidden lg:block flex flex-col gap-9">
          {decodedUser?.user_id === id && <SettingsSection />}
          <ReviewsSection reviews={reviewData} />
        </section>

        <section className="block lg:hidden">
          <ReviewSection reviews={reviewData} />
        </section>

        <Modal isOpen={contactModalOpen}>
          <ViewContactModal {...contactData} />
        </Modal>

        <Modal isOpen={reviewModalOpen}>
          <ReviewModal id={id} />
        </Modal>

        <Modal isOpen={editModalOpen}>
          <EditProfileModal />
        </Modal>
      </div>
    </>
  )
}
export default ExternalProfilePage
