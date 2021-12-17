import Button from "../Button";
import Product from "../Product";
import '../../styles/homeGrid.css'

export default function ProductSection() {
    return (
        <div className="container homeContainer px-8 md:w-full mx-auto text-center lg:max-w-7xl">
            <h1 className="text-left text-xl font-medium md:text-3xl mt-7">Today's top picks</h1>
            <h2 className="text-left text-xs mt-1 mb-8 md:text-base">Browse our recommended products for you to rent. All verified for order.</h2>
            <div className="gridContainer flex-wrap">
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            <Product imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" productName="Cameras" price={20000}/>
            </div>
            <Button child="View more" type="button" className="w-full max-w-sm bg-secondary mb-8 mt-6 md:mt-9 py-5 md:max-w- md:py-8 font-dm-sans md:text-xl text-white rounded"/>
        </div>
    );
};

export {};