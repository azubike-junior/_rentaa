import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleSidebar } from '../../services/Mutations/Modal'
import { RootState } from '../../store/store'

export default function Sidebar() {
  const { sidebarOpen } = useSelector((state: RootState) => state.modalReducer)

  const dispatch = useDispatch()
  return (
    <Drawer
      placement="right"
      size="xs"
      isOpen={sidebarOpen}
      onClose={() => dispatch(toggleSidebar())}
    >
      <DrawerOverlay />
      <DrawerContent>
        <div
          // className={`fixed top-0 right-0 z-50 w-60 bg-white lg:hidden ${
          //   sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          //   } ease-in-out duration-300`}
          className="lg:hidden"
        >
          <div className='flex justify-end pt-4 pr-6'>
            <IoMdClose
              className="ml-5 text-2xl"
              onClick={() => dispatch(toggleSidebar())}
            />
          </div>

          <div className="flex pl-8 pr-4 pb-6 font-dm-sans">
            <div className="flex justify-between">
              <ul className="space-y-8">
                <li>
                  <Link onClick={() => dispatch(toggleSidebar())} to="/">
                    Home
                  </Link>
                </li>

                <li>
                  {' '}
                  <Link
                    onClick={() => dispatch(toggleSidebar())}
                    to="/our_story"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link onClick={() => dispatch(toggleSidebar())} to="/sign_up">
                    Join Private Beta{' '}
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link
                    onClick={() => dispatch(toggleSidebar())}
                    to="/contact_us"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link onClick={() => dispatch(toggleSidebar())} to="/FAQs">
                    FAQs
                  </Link>
                </li>
              </ul>
              {/* <img src={closeIcon} className="w-4 justify-center items-start" alt="" /> */}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
