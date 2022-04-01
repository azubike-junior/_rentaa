type ReviewProps = {
    imageUrl : any;
    reviewText : string;
    authorName : string;
}

export default function Review({imageUrl, reviewText, authorName} : ReviewProps) {
    return (
        <div className="w-full px-3 md:px-8 lg:max-w-4xl flex flex-row my-5">
            <div className="w-14 h-14 sm:w-20 sm:h-20 ">
                <img src={imageUrl} className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-full" />
            </div>
            <div className="ml-4 w-full">
                <p className="text-sm sm:text-lg italic mb-1">{reviewText}</p>
                <p className="text-xs sm:text-base">{authorName}</p>
            </div>
        </div>
    );
}