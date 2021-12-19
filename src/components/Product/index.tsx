type ProductProps = {
    imageUrl : string;
    productName : string;
    price: number;
};

export default function Product({imageUrl, productName, price} : ProductProps){
    return (
        <div className="w-36 md:w-48 mb-6 md:mb-14 md:mr-6 ">
            <img className="w-full rounded h-32 md:h-40 object-cover" src={imageUrl} alt="category"/>
            <p className="text-left text-sm mt-1 md:text-base md:text-xl">{productName}</p>
            <p className="text-gray-400 text-xs text-left md:text-base">{`#${price}/week`}</p>
        </div>
    );
}