import Button from "../Button";
import Category from "../Category";
import '../../styles/homeGrid.css'

export default function CategorySection() {
    return (
        <div className="container homeContainer px-8 mx-auto text-center">
            <h1 className="text-left text-xl font-medium md:text-3xl py-7">Browse Product Categories</h1>
            <div className="gridContainer flex-wrap">
            <Category imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" categoryName="Cameras"/>
            <Category imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" categoryName="Cameras"/>
            <Category imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" categoryName="Cameras"/>
            <Category imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" categoryName="Cameras"/>
            <Category imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" categoryName="Cameras"/>
            <Category imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" categoryName="Cameras"/>
            <Category imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" categoryName="Cameras"/>
            <Category imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" categoryName="Cameras"/>
            <Category imageUrl="https://demo3.admorris.com/media/image/product/11699/lg/dslr-kamera-21mp.jpg" categoryName="Cameras"/>
            </div>
            <h2 className="text-lg md:text-2xl">Want to post a gadget for rent?</h2>
            <Button child="List Gadgets for rent" type="button" className="w-full max-w-sm bg-secondary mt-6 md:mt-9 py-5 md:max-w-md md:py-8 font-dm-sans md:text-lg text-white rounded"/>
        </div>
    );
};

export {};