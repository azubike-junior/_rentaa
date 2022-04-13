type ProductProps = {
  imageUrl: string;
  productName: string;
  price: number;
};

export default function Product({
  imageUrl,
  productName,
  price,
}: ProductProps) {
  return (
    <div className=" w-48 md:w-60 md:h-44 mb-6 md:mb-14 md:mr-6 ">
      <img className=" w-48 h-44 md:w-60 md:h-44 rounded" src={imageUrl} alt="category" />
      <p className="text-center mt-1 text-base pt-3 md:text-lg font-semibold">
        {productName}
      </p>
      <p className="text-center text-gray-400 text-xs md:text-base">{`#${price}/week`}</p>
    </div>
  );
}
