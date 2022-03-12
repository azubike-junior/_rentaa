import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccessMore from "../../components/AccessMore";
import CategorySection from "../../components/CategorySection/index";
import ProductSection from "../../components/ProductSection/index";
import { RootState } from "../../store/store";
import { getUserById } from "./../../services/Queries/getUser";

export default function Dashboard() {
  // const { data } = useSelector((state: RootState) => state.getUserById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById());
  }, []);

  return (
    <div>
      <ProductSection />
      <CategorySection />
      <AccessMore />
    </div>
  );
}
