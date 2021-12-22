import peoplePic from "../../images/people.svg";
import purpleBackground from "../../images/purpleBackground.svg";
import mobilePurpleBackground from "../../images/mobPurpleBg.svg";


export default function AccessMore() {
    return (
        <div className="w-full md:grid md:grid-cols-2 ">
            <section className="relative imageSection p-7 md:pb-16 md:pl-14 lg:pl-20 flex items-center justify-center">
                <img src={peoplePic} className="w-full max-w-2xl z-10" />
                <img src={mobilePurpleBackground} className="absolute -bottom-10 w-full md:hidden" />
                <img src={purpleBackground} className="absolute -left-0 bottom-0 w-full hidden md:block" />
            </section>
            <section className="flex flex-col justify-center p-7 md:pb-16 md:pr-10 md:px-5 space-y-5 md:space-y-6 md:tracking-wide font-dm-sans xl:max-w-2xl">
                <h1 className="text-xl text-center md:text-left md:text-2xl xl:text-4xl font-bold font-dm-sans md:pb-5">
                Access <span className="font-semibold">MORE </span> possibilities
                </h1>

                <p className="text-center md:text-left text-xs md:text-base xl:text-lg">
                We’re rolling out{" "}
                <span className="text-secondary leading-5">PAY WITH RENTAA</span> to
                allow you access even more features on Rentaa.{" "}
                </p>

                <p className="text-center leading-5 md:text-left text-xs md:text-base xl:text-lg">
                Giving you a payment gateway, so you can get paid right here on
                Rentaa, logistics and delivery services so you never have to leave the
                comfort of your home and an insurance cover to ensure you’re always
                taken care of, regardless of damage.
                </p>

                <p className="text-center md:text-left text-xs md:text-base xl:text-lg">
                We’re committed to building more for you.
                </p>
            </section>
        </div>
    );
}