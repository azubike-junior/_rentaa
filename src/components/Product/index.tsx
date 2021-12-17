type ProductProps = {
    imageUrl : string;
    productName : string;
    price: number;
};

export default function Category({imageUrl, productName, price} : ProductProps){
    return (
        <div className="w-36 md:w-48 mb-6 md:mb-14 mr-4 md:mr-6 ">
            <img className="w-full rounded h-32 md:h-40 object-cover" src={imageUrl} alt="category"/>
            <p className="text-center text-sm mt-1 md:text-base">{productName}</p>
            <p className="text-gray-400 text-xs text-center">{`#${price}/week`}</p>
        </div>
    );
}