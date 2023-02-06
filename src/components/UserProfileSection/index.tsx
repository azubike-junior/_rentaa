/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import domAvatar from '../../images/avatar.jpg'
import burgerIcon from '../../images/burgerIcon.svg'
import gridImage1 from '../../images/gridImage1.png'
import gridImage2 from '../../images/gridImage2.png'
import gridImage3 from '../../images/gridImage3.png'
import gridImage4 from '../../images/gridImage4.png'
import gridImage5 from '../../images/gridImage5.png'
import gridImage6 from '../../images/gridImage6.png'
import ProfileHeaderBackground from '../../images/profileHeaderBackground.png'
import {
  toggleChangePasswordModal,
  toggleContactModal,
  toggleEditModal,
  toggleLogoutModal,
} from '../../services/Mutations/Modal'
import { getUserById } from '../../services/Queries/getUser'
import { getUserById2 } from '../../services/Queries/getUser2'
import { RootState, useAppDispatch } from '../../store/store'
import config from '../../utils/config'
import { capitalizeFirstLetter } from '../../utils/helper'
import Button from '../Button'
import EmptyGadgetSection from '../EmptyGadgetSection'
import Loader from '../Loader'

const UserProfileSection = ({ gadgets, imageUrls, gadgetLoading, image, data }: any) => {

  const access = localStorage.getItem('accessToken')
  const [user, setUser] = useState(access)
  // const [image, setImage] = useState<any>()
  const [openSettings, setOpenSettings] = useState(false)
  const dispatch = useAppDispatch()

  localStorage.setItem('first_name', data?.first_name)
  localStorage.setItem('last_name', data?.last_name)

  const profile = data?.profile

  const avatarId = localStorage.getItem('avatarId')

  const profileDescriptions = profile?.description
    ? profile?.description.split('.')
    : ''

  const showSettings = () => {
    setOpenSettings(true)
  }

  const closeSettings = () => {
    setOpenSettings(false)
  }


  return (
    <div
      onClick={() => {
        if (openSettings) {
          closeSettings()
        }
      }}
      className="w-full md:shadow-xmd md:rounded-20 font-dm-sans"
    >
      <header className="mb-0 xs:mb-2 md:px-9 md:h-52 md:mb-10 lg:mb-87px">
        <figure className="w-full h-10 lg:h-full">
          <img
            src={ProfileHeaderBackground}
            className="w-full h-50 lg:h-full md:object-cover md:rounded-b-20 lg:rounded-b-100 overflow-hidden"
          />
        </figure>
        <figure className="relative w-full flex justify-center -top-7 md:top-0 lg:top-135px">
          <div className="bg-white md:w-30 xxs:p-1 xs:p-1.5 md:h-30 md:p-1.5 lg:p-2 rounded-full mt-2">
            <img
              className="xxs:w-20 xxs:h-20 w-28 h-28 md:w-40 md:h-40 rounded-full mx-auto md:mx-0 border-2"
              src={!image ? domAvatar : image}
            />
          </div>
        </figure>
      </header>
      <section className="px-7">
        <p className="text-lg md:text-2xl lg:text-3xl font-semibold text-center">
          {' '}
          {data?.first_name && capitalizeFirstLetter(data?.first_name)}{' '}
          {data?.last_name && capitalizeFirstLetter(data?.last_name)}
        </p>
        <p className="inline-flex text-sm items-center gap-2 text-mediumGrey w-full justify-center mt-3">
          <span>
            {profile?.lga ? capitalizeFirstLetter(profile?.lga) : ''}{' '}
          </span>
          <span className="inline-block  w-1 h-1 bg-mediumGrey rounded-full"></span>
          <span>
            {profile?.state ? capitalizeFirstLetter(profile?.state) : ''}
          </span>
        </p>
        <p className="text-center text-lg font-semibold md:text-2xl mt-14 mb-4">
          About me
        </p>
        <p className="text-sm xxs:px-0 xs:text-base md:text-lg text-center mb-0 md:mb-10 lg:mb-4 px-0 md:px-6">
          {profile?.description ? profileDescriptions[0] : ''}{' '}
          {profile?.description ? profileDescriptions[1] : ''}
          {profile?.description ? profileDescriptions[2] : ''}
        </p>
        {/* <p className="text-base md:text-lg text-center">
          {profile?.description ? profileDescriptions[1] : ""}
          {profile?.description ? profileDescriptions[2] : ""}
        </p> */}
        <div className="xxs:flex xs:flex sm:flex pt-0 md:pt-1 justify-center items-center">
          {user ? (
            <Link to="/post_product">
              <Button
                child="Post a Gadget"
                className=" bg-secondary transition-all duration-150 delay-75 hover:bg-blue-700  mt-10 md:mt-0 text-xs xxs:py-3 xxs:px-3 md:text-sm lg:mt-20 lg:text-base mb-3 px-8 py-5 md:py-4 text-white"
                type="button"
              />
            </Link>
          ) : (
            <Button
              child="View Contact Info"
              className=" bg-secondary transition-all duration-150 delay-75 hover:bg-blue-700 mt-3 md:mt-0 text-xs md:text-sm lg:text-base mb-3 px-6 py-4 mr-3 text-white"
              type="button"
              onClick={() => dispatch(toggleContactModal())}
            />
          )}

          <div onClick={() => showSettings()}>
            <img
              src={burgerIcon}
              alt=""
              className="xxs:w-7  w-10 mt-6 ml-5 md:mb-3 md:mt-0 lg:hidden"
            />
            {openSettings && (
              <div className="font-dm-sans bg-white ml-1 mt-4 px-4 md:px-6 py-5 cursor-pointer shadow-xl text-sm md:text-base absolute">
                <ul className="space-y-3">
                  <li
                    onClick={() => {
                      dispatch(getUserById({}))
                      dispatch(toggleEditModal())
                    }}
                  >
                    Edit Profile
                  </li>
                  <li
                    onClick={() => {
                      dispatch(toggleChangePasswordModal())
                    }}
                  >
                    Change Password
                  </li>
                  <li
                    className="text-red-700"
                    onClick={() => {
                      dispatch(toggleLogoutModal())
                    }}
                  >
                    Log out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <p className="mt-20 text-lg md:text-2xl font-semibold md:text-center">
          View My Gadgets
        </p>
      </section>

      {gadgets?.length === 0 ? (
        <EmptyGadgetSection />
      ) : (
        <>
          {gadgetLoading ? (
            <Loader />
          ) : (
            <section className="xxs:block grid mx-auto mt-9 grid-cols-2 md:grid-cols-3 max-w-3xl gap-x-6 gap-y-9 pb-24 px-7">
              {imageUrls?.map((item: any) => {
                return (
                  <Link to={`/product_description/${item.id}`}>
                    <div key={item.id} className="border rounded-lg mb-4 ">
                      <img
                        src={item.image}
                        className=" w-64 h-40 xs:w-52 xs:h-36 md:w-72 md:h-48 rounded-lg"
                      />
                    </div>
                  </Link>
                )
              })}
            </section>
          )}
        </>
      )}

      {/* <div className="flex flex-col items-center mx-auto w-full mt-14 pb-24">
        <figure className="max-w-xs">
          <img src={noGadgetImage} className="w-full" />
        </figure>
        <p className="mt-4">Nothing to see here. Try posting some gadgets</p>
      </div> */}
    </div>
  )
}
export default UserProfileSection
