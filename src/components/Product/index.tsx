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
    <div className="w-36 md:w-48 mb-6 md:mb-14 md:mr-6 ">
      <img
        className="w-full rounded h-32 md:h-40 object-cover"
        src={imageUrl}
        alt="category"
      />
      <p className="text-left mt-1 text-base pt-3 md:text-lg font-semibold">
        {productName}
      </p>
      <p className="text-gray-400 text-xs text-left md:text-base">{`#${price}/week`}</p>
    </div>
  );
}
