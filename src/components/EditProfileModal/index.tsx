import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import NaijaStates from 'naija-state-local-government'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { InputField, SelectInput } from '../../components/BasicInputField'
import avatar from '../../images/avatar.jpg'
import { toggleEditModal } from '../../services/Mutations/Modal'
import { getProfileAvatar } from '../../services/Queries/getProfileAvatar'
import { RootState, useAppDispatch } from '../../store/store'
import {
  FileService,
  getLga,
  getStates,
  setAllValues,
  validateFileSize,
  validateFileType,
} from '../../utils/helper'
import Button from '../Button'
import { IEditProfile } from './../../interfaces/index'
import { editProfile } from './../../services/Mutations/editProfile'
import Loader from './../Loader/index'

export default function EditProfileModal() {
  const [state, setState] = useState('')
  const [image, setImage] = useState('')
  const [fileError, setFileError] = useState('')
  const [photoError, setPhotoError] = useState('')
  const [doc, setDoc] = useState<any>()
  const [photo, setPhoto] = useState<any>({ image: avatar })
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { loading, data: userData } = useSelector(
    (state: RootState) => state.getUserById,
  )

  const { loading: loadingHandler, data: editResponse } = useSelector(
    (state: RootState) => state.editProfileReducer,
  )

  const avatarId = localStorage.getItem('avatarId')

  useEffect(() => {
    if (avatarId) {
      dispatch(getProfileAvatar({ avatarId, setImage }))
    }
  }, [])

   const { editModalOpen } = useSelector(
    (state: RootState) => state.modalReducer,
  )

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IEditProfile>({
    mode: 'onTouched',
  })

  useEffect(() => {
    if (userData) {
      /**
       * set all the values in there fields
       */
      setAllValues(setValue, userData)
    }
  }, [userData])

  const lga = NaijaStates.lgas(
    getValues('state') ? getValues('state') : 'lagos',
  )

  const handleClick = () => {
    const newState = getValues('state')
    setState(newState)
  }

  const handleFile = async (e: any) => {
    setImage('')
    const file = e.target.files[0]
    const validFileSize = await validateFileSize(file?.size)

    const validFileType = await validateFileType(
      FileService.getFileExtension(file?.name),
    )

    if (!validFileSize.isValid) {
      setFileError(validFileSize.errorMessage)
      return
    }

    if (!validFileType.isValid) {
      setFileError(validFileType.errorMessage)
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPhoto({ image: reader.result })
      }
    }
    reader.readAsDataURL(file)
    setDoc(file)
    setFileError('')
  }

  const editProfileHandler = (data: IEditProfile) => {
    const pic = doc ? doc : photo.image

    const {
      first_name,
      last_name,
      twitter,
      instagram,
      phone_number,
      state,
      lga,
      description,
    } = data
    const formData = new FormData()
    formData.append('first_name', first_name)
    formData.append('last_name', last_name)
    formData.append('state', state)
    formData.append('lga', lga)
    formData.append('phone_number', phone_number)
    formData.append('twitter', twitter)
    formData.append('instagram', instagram)
    formData.append('description', description)
    formData.append('photo', pic)
    const newData = {
      formData,
      navigate,
      dispatch,
      setImage,
      avatarId,
    }

    dispatch(editProfile(newData))
  }

  return (
    <Modal
      isOpen={editModalOpen}
      onClose={() => dispatch(toggleEditModal())}
      isCentered
    >
      <ModalOverlay/>
      <ModalContent>
        <div className="xxs:w-72 xs:w-90 mx-4 h-700 md:h-700 md:w-600 lg:h-700 lg:w-900 xl:w-1000 font-dm-sans bg-white  text-white rounded-lg px-4 overflow-y-scroll scrollbar-hidden md:p-10 shadow-2xl">
          <div className="block lg:flex lg:space-x-20 w-full pt-7 pl-10">
            <div className="pb-2 md:mx-auto lg:mx-0">
              <label>
                <img
                  src={image ? image : photo.image}
                  alt=""
                  className="w-28 h-28 md:h-40 md:w-40 lg:w-48 lg:h-48 rounded-full mx-auto lg:mx-0 xl:h-28 xl:w-28 border "
                />
                {fileError && (
                  <p className="ml-4 pt-2 text-red-500 text-xs">{fileError}</p>
                )}
                <input
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleFile}
                  name="photos"
                />
                <p className="text-gray-400 text-sm mt-4 text-center pb-3 cursor-pointer">
                  Change Profile Picture
                </p>
              </label>
            </div>

            <form
              className="font-dm-sans text-black lg:w-500 xl:w-700"
              onSubmit={handleSubmit(editProfileHandler)}
            >
              <div className="flex justify-between">
                <h1 className="hidden md:block md:text-2xl lg:text-4xl pb-7">
                  Edit Profile
                </h1>
                <AiOutlineClose
                  className="text-2xl cursor-pointer"
                  onClick={() => dispatch(toggleEditModal())}
                />
              </div>
              <div className="w-full ">
                <div className="block md:flex justify-between">
                  <InputField
                    label="First Name"
                    className="w-full pb-4 md:pr-7 "
                    name="first_name"
                    register={register}
                    required
                    errors={errors?.first_name}
                    message="required"
                  />
                  <InputField
                    label="Last Name"
                    className="w-full"
                    name="last_name"
                    register={register}
                    required
                    errors={errors?.last_name}
                    message="required"
                  />
                </div>
                <SelectInput
                  selectArray={[
                    { value: '', text: '-Select-' },
                    ...getStates(),
                  ]}
                  label="State"
                  className="w-full pt-5"
                  setState={handleClick}
                  register={register}
                  name="state"
                  required
                  errors={errors?.state}
                  message="required"
                />
                <SelectInput
                  selectArray={[
                    { value: '', text: '-Select-' },
                    ...getLga(lga),
                  ]}
                  label="LGA"
                  className="w-full pt-5"
                  register={register}
                  name="lga"
                  required
                  errors={errors?.lga}
                  message="required"
                />
                <InputField
                  label="Phone Number"
                  className="w-full pt-5"
                  name="phone_number"
                  register={register}
                  required
                  errors={errors?.phone_number}
                  message="required"
                />
                <InputField
                  label="Link to Instagram Profile"
                  className="w-full pt-5"
                  name="instagram"
                  register={register}
                  required
                  errors={errors?.instagram}
                  message="required"
                />
                <InputField
                  label="Link to Twitter Profile"
                  className="w-full pt-5"
                  name="twitter"
                  register={register}
                  required
                  errors={errors?.twitter}
                  message="required"
                />

                <InputField
                  label="Description "
                  className="xl:w-700  pt-7 text-xs md:text-base rounded-none "
                  textAreaClass="md:h-96 px-4  text-xs md:text-base text-gray-400 h-36 "
                  name="description"
                  placeholder="Description should not be lesser than 30 Chars, we want our users to know you"
                  textArea
                  register={register}
                  required
                  minLength={30}
                  maxLength={400}
                  errors={errors?.description}
                  message="Description should not be lesser than 30 chars and more than 400 chars"
                />

                <div className="block md:flex space-x-2 mt-2 mb-6">
                  <Button
                    child={loadingHandler ? <Loader /> : 'Save Changes'}
                    className="w-48 lg:w-52 px-4 py-3 md:py-5 text-white mt-3 md:mt-5 md:mb-10 bg-secondary"
                    type="submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}
