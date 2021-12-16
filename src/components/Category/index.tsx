type CategoryProps = {
    imageUrl : string;
    categoryName : string;
};

export default function Category({imageUrl, categoryName} : CategoryProps){
    return (
        <div className="w-36 md:w-48 mx-auto">
            <img className="w-full rounded h-32 md:h-40 object-cover" src={imageUrl} alt="category"/>
            <p className="text-center text-xs mt-1 md:text-sm">{categoryName}</p>
        </div>
    );
}