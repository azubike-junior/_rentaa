import React, { useEffect } from "react";
import EmptyGadgetSection from "../../components/EmptyGadgetSection";
import SingleBookMark from "../../components/SingleBookMark";
import bookImg from "../../images/bookmarkImg.svg";
import bookImg2 from "../../images/bookmarkImg2.svg";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGadgetsByCategory } from "./../../services/Queries/getGadgetsByCategory";
import { RootState } from "../../store/store";
import { useGetCategoriesQuery } from "../../services/Queries/queries";
import { bucketName, REGION } from "../../utils/helper";
import phoneImg from "../../images/phone.svg";
import Button from "../../components/Button";
import { toggleContactModal } from "../../services/Mutations/Modal";
import ViewContactModal from "../../components/ViewContactModal";
import Modal from "../../components/Modal";
import { findContact } from "../../services/Queries/findUserContact";
import { getUserById } from "./../../services/Queries/getUser";

interface IGadget {
  gadgetId: string;
  gadgetName: string;
  gadgetPrice: string;
  image: string;
  gadgetBucketName: string;
  photoId: string;
  firstName: string;
  lastName: string;
  userId: string;
}

export default function ViewCategory() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const { contactModalOpen } = useSelector(
    (state: RootState) => state.modalReducer
  );

  const { data: contactData, loading } = useSelector(
    (state: RootState) => state.findContactReducer
  );

  const { data: categoryGadgets, loading: categoryGadgetsLoading } =
    useSelector((state: RootState) => state.getGadgetsByCategoryReducer);

  // console.log(">>>>>>>contactData", contactData);

  const { data: categories } = useGetCategoriesQuery("");

  const categoryName = categories?.items.find(
    (category: any) => category.id === id
  )?.name;

  // console.log(">>>>>contactData", contactData);

  //modify the gadgets response in categories to fit into the components
  const gadgetsData = categoryGadgets?.map((gadget: any) => {
    const href = "https://s3." + REGION + ".amazonaws.com/";
    const bucketUrl = href + bucketName + "/";
    const { id, name, price, photos, user } = gadget;
    return {
      gadgetId: id,
      gadgetName: name,
      gadgetPrice: price,
      image: bucketUrl + encodeURIComponent(photos[0]?.key),
      gadgetBucketName: photos[0]?.bucketname,
      photoId: photos[0].id,
      firstName: user?.first_name,
      lastName: user?.last_name,
      userId: user?.id,
    };
  });

  useEffect(() => {
    console.log("got to view Category page");
    dispatch(getGadgetsByCategory(id));
  }, [id]);

  return (
    <div className="py-16 mx-auto max-w-7xl px-5">
      <h1 className="text-3xl font-dm-sans">{categoryName}</h1>
      {gadgetsData.length !== 0 ? (
        <div className="block xl:grid xl:grid-flow-row gap-x-14 grid-cols-2">
          {gadgetsData.map((gadget: IGadget) => {
            const {
              image,
              gadgetPrice,
              gadgetId,
              gadgetName,
              userId,
              firstName,
              lastName,
            } = gadget;
            return (
              <div className=" my-16 xxs:grid xxs:place-items-center xs:flex sm:flex flex flex-row md:my-12">
                <img
                  src={image}
                  alt=""
                  className="xxs:pb-2 w-40 mr-8 md:mr-0 md:w-52 md:h-52 md:pr-4"
                />
                <div className="md:pt-6 xxs:pl-4 ">
                  <h1 className=" text-black text-base md:text-2xl font-dm-sans">
                    {gadgetName}
                  </h1>
                  <p className=" text-gray-400 text-xs md:text-base">
                    {gadgetPrice}
                  </p>
                  <p className="text-gray-400 pt-2 md:pt-5 text-sm md:text-lg font-dm-sans">
                    Posted by{" "}
                    <span className=" text-secondary">
                      <Link
                        to={`/user_profile/${userId}`}
                      >{`${firstName}  ${lastName}`}</Link>
                    </span>
                  </p>
                  <div className="block md:flex flex-row pt-4 md xxs: place-items-center:pt-9 font-dm-sans">
                    <Link to={`/product_description/${gadgetId}`}>
                      <Button
                        className="bg-secondary mb-3 md:mb-0 text-sm md:text-base py-2 md:py-4 text-white px-4 md:px-6 mr-6"
                        child="View More"
                        type="button"
                      />
                    </Link>

                    <Button
                      className="border-2 text-sm md:text-base border-secondary py-2 md:py-3.5 text-secondary px-6 xs:px-3"
                      child="View Contact Info"
                      type="button"
                      onClick={() => {
                        dispatch(toggleContactModal());
                        dispatch(findContact(userId));
                      }}
                      img={phoneImg}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="container max-w-7xl flex flex-col items-center my-16 mx-auto px-2 ">
          <EmptyGadgetSection />
        </div>
      )}
      <Modal isOpen={contactModalOpen}>
        <ViewContactModal {...contactData} />
      </Modal>
    </div>
  );
}
