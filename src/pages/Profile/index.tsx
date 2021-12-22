import React from "react";
import EmptyGadgetSection from "../../components/EmptyGadgetSection";
import ReviewSection from "./../../components/ReviewSection";
import MyGadgets from "./../../components/MyGadgets";
import ProfileHeader from "./../../components/ProfileHeader";

export default function Profile() {
  const noGadget = false;
  return (
    <div>
      <ProfileHeader />
      <div className="container max-w-7xl flex flex-col items-center my-16 mx-auto px-2 ">
        <h1 className="text-3xl font-medium mb-9 md:mb-4 w-full mx-auto px-6">
          My Gadgets
        </h1>
        {noGadget ? <EmptyGadgetSection /> : <MyGadgets />}
        <ReviewSection />
      </div>
    </div>
  );
}
