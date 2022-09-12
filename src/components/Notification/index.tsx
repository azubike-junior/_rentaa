import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


interface IData {
    isMouse: boolean
}

export default function Notification({isMouse}: IData ) {
  const { showNotification } = useSelector(
    (state: RootState) => state.modalReducer
  );

  console.log(">>>>>showNotification", showNotification);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <motion.div
      className="bg-white cursor-pointer right-8 md:right-10 absolute top-20 md:top-28 z-50"
      initial="exit"
      animate={isMouse ? "enter" : "exit"}
      variants={subMenuAnimate}
    >
      <div className="w-full md:w-500 font-dm-sans py-8 shadow-xl">
        <div className="px-5">
          <p className="text-black text-left text-2xl pt-5 pb-2 font-bold">
            Notification
          </p>
          <div className="flex justify-between pb-4">
            <p>New</p>
            <p className="text-secondary capitalize">See all</p>
          </div>

          <div className="px-3 font-bold space-y-4">
            <ul className="space-y-2">
              <li className=" list-disc text-sm">
                Ho Ho Ho! It’s that time of the year again. And santa is here
                with the BIG5 offer. Get up to 30% discount on 5 orders you
                place on the 25th of December 2021. T&C apply.
              </li>
              <p className=" text-xs text-bgAsh">3 hours ago</p>
            </ul>
            <ul className="space-y-2">
              <li className=" list-disc text-sm">
                Ho Ho Ho! It’s that time of the year again. And santa is here
                with the BIG5 offer. Get up to 30% discount on 5 orders you
                place on the 25th of December 2021. T&C apply.
              </li>
              <p className=" text-xs text-bgAsh">3 hours ago</p>
            </ul>
            <ul className="space-y-2">
              <li className=" list-disc text-sm">
                Ho Ho Ho! It’s that time of the year again. And santa is here
                with the BIG5 offer. Get up to 30% discount on 5 orders you
                place on the 25th of December 2021. T&C apply.
              </li>
              <p className=" text-xs text-bgAsh">3 hours ago</p>
            </ul>
            <ul className="space-y-2">
              <li className=" list-disc text-sm">
                Ho Ho Ho! It’s that time of the year again. And santa is here
                with the BIG5 offer. Get up to 30% discount on 5 orders you
                place on the 25th of December 2021. T&C apply.
              </li>
              <p className=" text-xs text-bgAsh">3 hours ago</p>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
