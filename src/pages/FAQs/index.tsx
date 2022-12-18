import { useState } from "react";
import LandingPageNavBar from "../../components/LandingPageNavBar";
import Sidebar from "../../components/Sidebar";
import { accordionData } from "../../utils/accordion";
import { classNames } from "../../utils/classNames";

export default function FAQs() {
  const [selected, setSelected] = useState(null)

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div>
      <LandingPageNavBar />
      <Sidebar/>
      <div className="lg:max-w-[950px] xl:max-w-[1350px] bg-[#BFB9D9] h-98 mx-auto flex items-center font-dm-sans mt-4">
        <div className="pl-10 md:pl-28">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-secondary">FAQs</h1>
          <p className="pt-2 text-base text-white">All you need to know about the product and features</p>
        </div>
      </div>

      <div className="px-10 md:px-20 lg:max-w-[800px] xl:max-w-[1000px] mx-auto my-20 md:my-36 font-dm-sans">
        <div>
          {accordionData?.map((item, i) => (
            <div className="py-6 md:py-10">
              <div className="flex justify-between cursor-pointer" onClick={() => toggle(i)}>
                <h2 className="text-base md:text-lg font-extrabold max-w-[900px] ">{item.title}</h2>
                <span className="pl-10 text-lg">{selected === i ? "-" : "+"}</span>
              </div>
              <div className={classNames(selected === i ? "block transition all": "hidden transition-all", "pt-4 text-sm duration-200 transition-all")}>
                {item.content}
              </div>
            <hr className="mt-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
