type FormTitleProps = {
    title: String; 
    instruction: string;
}

export default function FormTitle({title, instruction} : FormTitleProps) {
    return (
        <div className="w-full mb-8 lg:mb-20 mx-auto px-3 lg:px-0">
                <h1 className="text-2xl font-medium mb-3 lg:mb-6 md:text-3xl lg:text-5xl">{title}</h1>
                <p className="text-sm md:text-md lg:text-lg">{instruction}</p>
            </div>
    );
}