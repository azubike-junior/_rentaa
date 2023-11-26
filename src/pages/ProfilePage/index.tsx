import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ChangePasswordModal from '../../components/ChangePasswordModal'
import ChangePasswordSuccessModal from '../../components/changePasswordSuccessModal'
import EditProfileModal from '../../components/EditProfileModal'
import LogoutModal from '../../components/LogoutModal'
import Modal from '../../components/Modal'
import ReviewSection from '../../components/ReviewSection'
import ReviewsSection from '../../components/ReviewsSection'
import SettingsSection from '../../components/SettingsSection'
import UserProfileSection from '../../components/UserProfileSection'
import { findReviews } from '../../services/Queries/findReviews'
import { getUserById2 } from '../../services/Queries/getUser2'
import { RootState, useAppDispatch } from '../../store/store'
import config from '../../utils/config'
import { getGadgets } from './../../services/Queries/getGadgets'

// Account's owner profile page

const ProfilePage = () => {
  const dispatch = useAppDispatch()
  let { data: gadgets, loading: gadgetLoading } = useSelector(
    (state: RootState) => state.getGadgetReducer,
  )

  const [openLogout, setOpenLogout] = useState(false)

  let { data: reviewsData } = useSelector(
    (state: RootState) => state.findReviewsSlice,
  )


  // console.log('>>>>>>>>dtaaaaaa', reviewsData)

  const {
    REACT_APP_AWS_AMAZON,
    REACT_APP_AWS_REGION,
    REACT_APP_AWS_HTTP,
    REACT_APP_BUCKET_NAME,
  } = config

  const href =
    `${REACT_APP_AWS_HTTP}` +
    `${REACT_APP_AWS_REGION}` +
    `${REACT_APP_AWS_AMAZON}`

  const { loading: userLoading, data } = useSelector(
    (state: RootState) => state.getUserById2,
  )

  let imageUrls
  let gadgetData

  if (gadgets?.length > 0) {
    gadgetData = gadgets?.map((gadget) => {
      return { gadgetKey: gadget.photos[0].key, id: gadget.id }
    })

    const bucketUrl = href + `${REACT_APP_BUCKET_NAME}` + '/'

    imageUrls = gadgetData?.map((gadget: any) => {
      return {
        image: bucketUrl + encodeURIComponent(gadget.gadgetKey),
        id: gadget.id,
      }
    })
  }

  const bucketUrl = href + `${data?.profile?.avatar?.bucketname}` + '/'
  const image = bucketUrl + encodeURIComponent(data?.profile?.avatar?.key)

  const {
    editModalOpen,
    reviewModalOpen,
    changePasswordSuccessOpen,
    changePasswordOpen,
    contactModalOpen,
    logoutOpen,
  } = useSelector((state: RootState) => state.modalReducer)

  useEffect(() => {
    dispatch(getGadgets())
  }, [])

  useEffect(() => {
    const body: any = document.querySelector('body')
    body.style.overflow = reviewModalOpen ? 'hidden' : 'auto'
  }, [reviewModalOpen])

  useEffect(() => {
    const body: any = document.querySelector('body')
    body.style.overflow = contactModalOpen ? 'hidden' : 'auto'
  }, [contactModalOpen])

  useEffect(() => {
    dispatch(findReviews())
  }, [])

  useEffect(() => {
    dispatch(getUserById2({}))
  }, [])

  // console.log(">>>data from profile", data)

  return (
    <>
      <div className="mx-auto container md:max-w-screen-lg xl:max-w-screen-xl w-full xxs:px-0 xs:px-2 md:pt-4 md:px-8 lg:grid lg:grid-cols-profileLayoutM xl:grid-cols-profileLayoutL gap-5">
        <section className="mb-6">
          <UserProfileSection
            gadgets={gadgets}
            imageUrls={imageUrls}
            gadgetLoading={gadgetLoading}
            image={image}
            data={data}
            setOpenLogout={setOpenLogout}
          />
        </section>
        <section className="hidden lg:block flex flex-col gap-9">
          <SettingsSection setOpenLogout={setOpenLogout} />
          <ReviewsSection reviews={reviewsData} />
        </section>

        <section className="block lg:hidden">
          <ReviewSection reviews={reviewsData} />
        </section>

        {/* <Modal isOpen={editModalOpen}>
          <EditProfileModal />
        </Modal> */}


        <ChangePasswordModal />
        
        
        <Modal isOpen={changePasswordSuccessOpen}>
          <ChangePasswordSuccessModal />
        </Modal>

        
          <EditProfileModal />
        {/* <Modal isOpen={logoutOpen}> */}
        <LogoutModal setOpenLogout={setOpenLogout} openLogout={openLogout} />
        {/* </Modal> */}
      </div>
    </>
  )
}
export default ProfilePage
