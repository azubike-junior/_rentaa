import React from "react";
import closeIcon from "../../images/closeIcon2.svg";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleSidebar } from "../../services/Mutations/Modal";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="absolute top-0 right-0 z-50 w-60 bg-white md:hidden"
    >
      <div className="flex pl-8 pr-4 pt-8 pb-6 shadow-lg font-dm-sans">
        <div className="flex justify-between">
          <ul className="space-y-8">
            <li>
              <Link onClick={() => dispatch(toggleSidebar())} to="/">
                Home
              </Link>
            </li>

            <li>
              {" "}
              <Link onClick={() => dispatch(toggleSidebar())} to="/our_story">
                Our Story
              </Link>
            </li>
            <li>
              <Link onClick={() => dispatch(toggleSidebar())} to="/sign_up">
                Join Private Beta{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link onClick={() => dispatch(toggleSidebar())} to="/contact_us">
                Contact Us
              </Link>
            </li>
            <li>FAQs</li>
          </ul>
          {/* <img src={closeIcon} className="w-4 justify-center items-start" alt="" /> */}
          <IoMdClose
            className="ml-5 text-2xl"
            onClick={() => dispatch(toggleSidebar())}
          />
        </div>
      </div>
    </div>
  );
}
