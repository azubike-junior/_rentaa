import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AccessMore from "../../components/AccessMore";
import CategorySection from "../../components/CategorySection/index";
import Loader from "../../components/Loader";
import Notification from "../../components/Notification";
import ProductSection from "../../components/ProductSection/index";
import { useGetCategoriesQuery } from "../../services/Queries/category";
import { RootState } from "../../store/store";
import { getUserById } from "./../../services/Queries/getUser";

export default function Dashboard() {
  // const { data } = useSelector((state: RootState) => state.getUserById);
  const dispatch = useDispatch();

  /**
   * in the getUserById function, an avatarId is set to the localStorage.
   */
  useEffect(() => {
    dispatch(getUserById());
  }, []);

  const { data: categories, isLoading: categoriesLoading } =
    useGetCategoriesQuery("");

  return (
    <div>
      {/* <ProductSection /> */}
      {categoriesLoading ? (
        <div className="mt-10">
          <Loader />
        </div>
      ) : (
        <CategorySection categories={categories?.items} />
      )}
      <AccessMore />
    </div>
  );
}
