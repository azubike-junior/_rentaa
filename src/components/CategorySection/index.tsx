import Button from "../Button";
import Category from "../Category";
import '../../styles/homeGrid.css'

export default function CategorySection() {
    return (
      <div className="max-w-7xl px-8 mx-auto font-dm-sans text-center mt-10 md:pb-24 md:my-20 ">
        <h1 className="text-left xs:text-base sm:text-xl font-medium  md:text-3xl py-7">
          Browse Product Categories
        </h1>
        {/* <div className="gridContainer flex-wrap"> */}
        <div className="grid xxs:grid-cols-1 xs:grid-cols-2 xxs:place-items-center sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:pl-3 md:gap-16 grid-flow-row lg:gap-10 lg:grid-cols-4 xl:pl-5 xl:grid-cols-6">
          <Category
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            categoryName="Cameras"
          />
          <Category
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            categoryName="Cameras"
          />
          <Category
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            categoryName="Cameras"
          />
          <Category
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            categoryName="Cameras"
          />
          <Category
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            categoryName="Cameras"
          />
          <Category
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            categoryName="Cameras"
          />
          <Category
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            categoryName="Cameras"
          />
          <Category
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            categoryName="Cameras"
          />
          <Category
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            categoryName="Cameras"
          />
        </div>
        <h2 className="xs:text-base sm:text-lg md:text-2xl mt-10">
          Want to post a gadget for rent?
        </h2>
        <Button
          child="List Gadgets for rent"
          type="button"
          className="xxs:w-44 xxs:text-sm md:w-500 bg-secondary mb-8 mt-6 md:mt-9 py-5 md:py-7 font-dm-sans md:text-lg text-white rounded"
        />
      </div>
    );
    
};

export {};