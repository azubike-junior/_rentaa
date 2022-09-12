type FormTitleProps = {
  title: String;
  instruction: string;
};

export default function FormTitle({ title, instruction }: FormTitleProps) {
  return (
    <div className="px-3">
      <h1 className="text-2xl pb-2 md:text-3xl lg:text-4xl text-black font-dm-sans lg:pb-4">
        {title}
      </h1>
      <p className="text-sm md:text-base text-black font-dm-sans">
        {instruction}
      </p>
    </div>
  );
}
