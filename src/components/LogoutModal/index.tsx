import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleLogoutModal } from '../../services/Mutations/Modal'
import { RootState } from '../../store/store'
import Button from '../Button'

interface Props {
  setOpenLogout: (open: boolean) => void
  openLogout: boolean
}

export default function LogoutModal({setOpenLogout, openLogout }: Props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { logoutOpen } = useSelector(
    (state: RootState) => state.modalReducer,
  )

  return (
    <Modal
      isOpen={logoutOpen}
      onClose={() => dispatch(toggleLogoutModal())}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
         <div className="bg-white xxs:w-72  xs:w-80 md:w-600 rounded-md px-5 py-24 md:px-20">
          <p className="xxs:text-sm text-base md:text-3xl font-dm-sans text-center pb-8 ">
            Are you sure you want Log out ?
          </p>

          <div className="flex justify-center items-center text-sm md:text-base">
            <Button
              type="button"
              child="No, cancel"
              onClick={() => dispatch(toggleLogoutModal())}
              className="xxs:text-xs bg-lightAsh text-white p-3 px-4 md:px-12 font-dm-sans mr-5"
            />
            <Button
              onClick={() => {
                localStorage.clear()
                navigate('/login')
              }}
              type="button"
              child="Yes, Log Me Out"
              className="xxs:text-xs bg-red-700 text-white p-3 px-4 md:px-12 font-dm-sans"
            />
          </div>
        </div>
      </ModalContent>
    </Modal>
  )
}
