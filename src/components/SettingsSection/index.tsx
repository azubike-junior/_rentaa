import { useState } from 'react'
import SettingsIcon from '../../images/settingsIcon.svg'
import {
  toggleChangePasswordModal,
  toggleEditModal,
  toggleLogoutModal,
} from '../../services/Mutations/Modal'
import { getUserById } from '../../services/Queries/getUser'
import { useAppDispatch } from '../../store/store'

interface Props {
  setOpenLogout: (open: boolean) => void
}

const SettingsSection = ({ setOpenLogout }: Props) => {
  const dispatch = useAppDispatch()
  const access = localStorage.getItem('accessToken')
  const [user, setUser] = useState(access)

  return (
    <>
      {user && (
        <section className="w-full max-w-278px xl:max-w-xxxs px-7 py-11 shadow-xmd rounded-20 mb-5">
          <div className="inline-flex gap-3 mb-5">
            <img src={SettingsIcon} />
            <p className="text-lg text-secondary">Settings</p>
          </div>
          <ul className="flex flex-col gap-4 pl-9">
            <li
              className="text-lightGrey cursor-pointer"
              onClick={() => {
                dispatch(getUserById({}))
                dispatch(toggleEditModal())
              }}
            >
              Edit profile
            </li>
            <li
              onClick={() => {
                dispatch(toggleChangePasswordModal())
              }}
              className="text-lightGrey cursor-pointer"
            >
              Change Password
            </li>
            <li
              onClick={() => {
                dispatch(toggleLogoutModal());
              }}
              className="text-lightRed cursor-pointer"
            >
              Log out
            </li>
          </ul>
        </section>
      )}
    </>
  )
}
export default SettingsSection
