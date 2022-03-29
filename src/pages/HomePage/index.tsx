import React from "react";
import Button from "../../components/Button";
import Home from "../../images/home.png";

export default function Homepage() {
  return (
    <>
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse gap-y-10 ">
        <div>
          <img src={Home} alt="" className="" />
        </div>
        <div className="text-center flex flex-col gap-y-4">
          <h1 className="text-2xl py-3 px-7">
            {" "}
            Access a world of creative possibilities
          </h1>

          <p className="text-xs text-homepage">
            We’re building faster and stress- free ways to rent gadgets from,
            and to anyone without any hassle. Giving you complete access to work
            better, and earn better.
          </p>

          <div className="flex gap-x-3 justify-center py-3 pb-5 px-6">
            <Button
              child="Our story"
              type="button"
              className=" bg-secondary text-white p-3  text-sm"
            />
            <Button
              child="Join Private Beta"
              type="button"
              className="outline-secondary text-secondary p-3  text-sm"
            />
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4">
        <div className="flex justify-center gap-6 text-sm p-5  my-3">
          <h1>Home</h1>
          <h1>About</h1>
        </div>

        <div className="flex flex-col gap-y-2 mt-4">
          <h1 className="text-xl">Let's create your account</h1>
          <h1 className="text-xs">Welcome to the creative gateway</h1>
        </div>

        <form className="flex flex-col text-sm gap-5 items-center justify-center">
          <div>
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              id="firstname"
              className="border-2 px-4 py-2 my-1"
            />
          </div>
          <div>
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              id="firstname"
              className="border-2 px-4 py-2 my-1"
            />
          </div>
          <div>
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              id="firstname"
              className="border-2 px-4 py-2 my-1"
            />
          </div>
          <div>
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              id="firstname"
              className="border-2 px-4 py-2 my-1"
            />
          </div>
          <div>
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              id="firstname"
              className="border-2 px-4 py-2 my-1"
            />
          </div>
          <div>
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              id="firstname"
              className="border-2 px-4 py-2 my-1"
            />
          </div>
          <div>
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              id="firstname"
              className="border-2 px-4 py-2 my-1"
            />
          </div>
          <div>
            <label htmlFor="">FirstName</label>
            <input
              type="text"
              id="firstname"
              className="border-2 px-4 py-2 my-1"
            />
          </div>
        </form>
      </section>
    </>
  );
}
