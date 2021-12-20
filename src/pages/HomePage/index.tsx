import React from "react";
import AccessMore from "../../components/AccessMore";
import CategorySection from "./../../components/CategorySection/index";
import ProductSection from "./../../components/ProductSection/index";

export default function HomePage() {
  return (
    <div>
      <ProductSection />
      <CategorySection />
      <AccessMore/>
    </div>
  );
}
