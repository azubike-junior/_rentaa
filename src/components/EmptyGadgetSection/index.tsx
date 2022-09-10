import { Link, useLocation } from "react-router-dom";
import NoGadgetImage from "../../images/NoGadgets.png";
import Button from "../Button";

export default function EmptyGadgetSection() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex mx-auto justify-center items-center">
        <img src={NoGadgetImage} className="w-36 md:w-56 md:max-w-xs mt-10" />
      </div>

      {pathname.includes("/view_categories") ? (
        <p>No gadget has been posted yet </p>
      ) : (
        <>
          <p className="hidden md:block my-3 py-10 text-center md:text-xl">
            Nothing to see here. Try posting some gadgets
          </p>
          <p className="md:hidden my-3 text-center md:text-xl">
            Nothing to see here...
          </p>
          {/* <Link to="/post_product">
            <Button
              child="Post a gadget"
              type="button"
              className="px-4 bg-secondary mb-8 mt-6 md:mt-9 py-4 font-dm-sans md:text-lg text-white rounded"
            />
          </Link> */}
        </>
      )}
    </>
  );
}
