import React from 'react';

const Newsletter : React.FC = () => {
    return (
        <section className="bg-white lg:bg-greyishWhite lg:py-32">
            <div className='lg:flex lg:container justify-center items-center mx-auto gap-24 px-8 lg:bg-greyishWhite'>
                <article>
                    <p className='font-dosis font-semibold text-black text-center text-2xl xxs:text-2xl sm:text-2xl lg:text-5xl lg:text-left mx-auto'>Stay in the <span className='text-secondary'>Loop</span></p>
                    <p className='text-center text-xs max-w-xxs mx-auto mt-4 lg:mt-8 lg:text-xl lg:max-w-sm lg:text-left lg:leading-9'>Get information and updates on our future release product updates and learning resources from the Rentaa team.</p>
                </article>
                <form className="mt-14 lg:bg-white lg:py-16 lg:px-7 lg:w-full lg:max-w-lg xl:max-w-form">
                    <div className='flex flex-col items-center px-8'>
                        <div className="max-w-xs mx-auto flex flex-col w-full lg:max-w-2xl">
                            <label htmlFor="firstName" className='text-xs lg:text-xl'>First Name</label>
                            <input id="firstName" className='p-3 lg:p-4 rounded-t rounded-b mt-2 bg-transparent border-grey border-2 focus:outline-none lg:text-xl  '/>
                        </div>
                        <div className="max-w-xs mx-auto flex flex-col w-full lg:max-w-2xl mt-8 ">
                            <label htmlFor="lastName" className='text-xs lg:text-xl'>Last Name</label>
                            <input id="lastName" className='p-3 lg:p-4 rounded-t rounded-b mt-2 bg-transparent border-grey border-2 focus:outline-none lg:text-xl  '/>
                        </div>
                        <div className="max-w-xs mx-auto flex flex-col w-full lg:max-w-2xl mt-8 ">
                            <label htmlFor="emailAddress" className='text-xs lg:text-xl'>Email Address</label>
                            <input id="emailAddress" className='p-3 lg:p-4 rounded-t rounded-b mt-2 bg-transparent border-grey border-2 focus:outline-none lg:text-xl  '/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='w-full xs:max-w-btnsm rounded-t rounded-b xxs:max-w-btnsm max-w-sm lg:max-w-btn text-white bg-secondary px-14 py-4 rounded-sm mt-20 text-xs lg:text-lg'>Subscribe to Our Newsletter</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Newsletter;