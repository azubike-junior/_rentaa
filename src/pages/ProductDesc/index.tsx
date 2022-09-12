import React from "react";
import { useParams } from "react-router-dom";
import ProductDescHeader from "../../components/ProductDescHeader";
import ProductDescBody from "./../../components/ProductDescBody/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findGadget } from "./../../services/Queries/findGadget";
import { RootState, useAppDispatch } from "../../store/store";
import Loader from "../../components/Loader";
import { viewMoreGadget } from './../../services/Queries/viewMoreGadget';

export default function ProductDesc() {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string | any }>();

  const { data: gadgetData, loading: gadgetLoading } = useSelector(
    (state: RootState) => state.findGadgetReducer
  );

  // console.log(">>>>>>>>gadgetData", gadgetData, id)

  let photoKey: any;

  if (gadgetData?.photos?.length > 0) {
    photoKey = gadgetData?.photos[0];
  }

  // get gadget description by id from the id string in {useParams}
  useEffect(() => {
    dispatch(findGadget(id));
  }, []);

  useEffect(() => {
    dispatch(viewMoreGadget(id));
  }, []);

  return (
    <div>
      {gadgetLoading ? (
        <Loader />
      ) : (
        <>
          <ProductDescHeader photoKey={photoKey} gadget={gadgetData} />
          <ProductDescBody gadget={gadgetData} />
        </>
      )}
    </div>
  );
}
