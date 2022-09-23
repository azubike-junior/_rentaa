type CategoryProps = {
    imageUrl : string;
    categoryName : string;
};

export default function Category({imageUrl, categoryName} : CategoryProps){
    return (
      <div className="xxs:w-32 w-36 md:w-48 mb-6 md:mb-14 transition-all md:mr-6 duration-150 delay-75 hover:shadow-lg ">
        <img
          className="w-full rounded h-32 md:h-40 object-cover"
          src={imageUrl}
          alt="category"
        />
        <p className="text-center text-xs mt-1 md:text-base font-semibold">
          {categoryName}
        </p>
      </div>
    );
}