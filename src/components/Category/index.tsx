type CategoryProps = {
    imageUrl : string;
    categoryName : string;
};

export default function Category({imageUrl, categoryName} : CategoryProps){
    return (
        <div className="w-36 md:w-48 mb-6 md:mb-14 md:mr-6 ">
            <img className="w-full rounded h-32 md:h-40 object-cover" src={imageUrl} alt="category"/>
            <p className="text-center text-xs mt-1 md:text-base font-semibold">{categoryName}</p>
        </div>
    );
}