import Button from "../Button";
import Product from "../Product";
import '../../styles/homeGrid.css'

export default function ProductSection() {
    return (
      <div className="max-w-7xl px-8 mx-auto font-dm-sans text-center mt-10 md:mt-24">
        <h1 className="text-left text-xl font-medium md:text-3xl mt-7">
          Today's top picks
        </h1>
        <h2 className="text-left text-xs mt-1 mb-8 md:text-base">
          Browse our recommended products for you to rent. All verified for
          order.
        </h2>
        <div className="p-0 grid xxs:grid-cols-1 xs:grid-cols-2 justify-items-center xxs:place-items-center sm:gap-6 sm:grid-cols-2 md:grid-cols-3 md:pl-3 md:gap-16 grid-flow-row lg:gap-10 lg:grid-cols-4 xl:pl-5 xl:grid-cols-6">
          <Product
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            productName="Cameras"
            price={20000}
          />
          <Product
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            productName="Cameras"
            price={20000}
          />
          <Product
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            productName="Cameras"
            price={20000}
          />
          <Product
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            productName="Cameras"
            price={20000}
          />
          <Product
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            productName="Cameras"
            price={20000}
          />
          <Product
            imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg"
            productName="Cameras"
            price={20000}
          />
        </div>
        <Button
          child="View more"
          type="button"
          className="xxs:w-44 md:w-64 bg-secondary mb-8 mt-6 md:mt-9 py-5 md:max-w- md:py-6 font-dm-sans md:text-lg text-white rounded"
        />
      </div>
    );
};

