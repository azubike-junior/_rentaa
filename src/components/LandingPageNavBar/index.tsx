import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'
import menu from '../../images/menu.svg'
import RentaaLogo from '../../images/rentaa_white.svg'
import { toggleSidebar } from '../../services/Mutations/Modal'
import Button from '../Button'

const LandingPageNavBar: React.FC = () => {
  const location = useLocation()
  const pathName = location.pathname

  const dispatch = useDispatch()
  return (
    <>
      <nav className="hidden mx-auto px-6 py-5 lg:block lg:max-w-[1500px]">
        <div className="flex flex-row justify-between items-center mx-2">
          <div className="flex flex-row items-center">
            <NavLink to="/">
              <figure className="mr-24">
                <img className="sm:h-6 md:h-9" src={RentaaLogo} />
              </figure>
            </NavLink>
            <ul className="flex flex-row font-dm-sans">
              <NavLink to="/">
                <li className="transition-all duration-300 lg:text-lg md:text-x mr-12 cursor-pointer">
                  Home
                </li>
              </NavLink>
              <NavLink to="/our_story">
                <li className="transition-all duration-300 lg:text-lg md:text-xs  mr-12 hover:text-black cursor-pointer">
                  Our Story
                </li>
              </NavLink>
              <NavLink to="/contact_us">
                <li className="transition-all duration-300 lg:text-lg md:text-xs mr-12 hover:text-black cursor-pointer">
                  Contact Us
                </li>
              </NavLink>
              <NavLink to="/FAQs">
                <li className="transition-all duration-300 lg:text-lg md:text-xs mr-12 hover:text-black cursor-pointer">
                  FAQs
                </li>
              </NavLink>
            </ul>
          </div>

          {pathName !== '/login' && (
            <Link to="/login">
              <Button
                type="button"
                child="Login"
                className="text-secondary text-sm  md:text-base border border-secondary rounded px-5 lg:py-3 md:px-9 md:py-2 mt-5 md:mt-3 lg:block"
              />
            </Link>
          )}

          {pathName === '/login' && (
            <Link to="/sign_up">
              <Button
                type="button"
                child="Signup"
                className="text-secondary text-sm  md:text-base border border-secondary rounded px-5 lg:py-3 md:px-9 md:py-2 mt-5 md:mt-3 lg:block"
              />
            </Link>
          )}
        </div>
      </nav>
      <nav className="w-full lg:hidden mx-auto mt-3">
        <div className="mx-7 flex items-center justify-between">
          <Link to="/">
            <figure>
              <img className="h-6 md:h-10 cursor-pointer" src={RentaaLogo} />
            </figure>
          </Link>

          {/* <button className="relative px-5 py-3 text-xs rounded-md bg-secondary text-white">
              Join Private Beta
              <img className="absolute -top-3 -left-2 w-5 h-5" src={star} />
            </button> */}
          <img
            src={menu}
            alt=""
            className="w-7 md:w-10 cursor-pointer"
            onClick={() => {
              dispatch(toggleSidebar())
            }}
          />
        </div>
      </nav>
    </>
  )
}
export default LandingPageNavBar
