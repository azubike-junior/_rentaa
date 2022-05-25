import React from 'react';

const Newsletter : React.FC = () => {

    return (
        <section className='mt-28 lg:flex lg:container justify-center items-center mx-auto gap-24 px-6'>
            <article>
                <p className='text-black text-center xxs:text-2xl sm:text-2xl lg:text-5xl lg:text-left mx-auto'>Stay in the <span className='text-secondary'>Loop</span></p>
                <p className='text-center text-xs max-w-xxs mx-auto mt-4 lg:mt-8 lg:text-xl lg:max-w-sm lg:text-left'>Get information and updates on our future release product updates and learning resources from the Rentaa team.</p>
            </article>
            <form className="mt-14 flex flex-col items-center px-8 lg:bg-white lg:py-16 lg:px-7 lg:w-full lg:max-w-lg xl:max-w-form">
                <div className="max-w-xs mx-auto flex flex-col w-full lg:max-w-2xl">
                    <label htmlFor="firstName" className='text-xs lg:text-xl'>First Name</label>
                    <input id="firstName" className='border-b mt-2 bg-transparent border-black focus:outline-none lg:text-xl lg:pb-2 '/>
                </div>
                <div className="max-w-xs mx-auto flex flex-col w-full lg:max-w-2xl mt-10 lg:mt-16">
                    <label htmlFor="lastName" className='text-xs lg:text-xl'>Last Name</label>
                    <input id="lastName" className='border-b mt-2 bg-transparent border-black focus:outline-none lg:text-xl lg:pb-2'/>
                </div>
                <div className="max-w-xs mx-auto flex flex-col w-full lg:max-w-2xl mt-10 lg:mt-16">
                    <label htmlFor="emailAddress" className='text-xs lg:text-xl'>Email Address</label>
                    <input id="emailAddress" className='border-b mt-2 bg-transparent border-black focus:outline-none lg:text-xl lg:pb-2'/>
                </div>
                <button className='w-full xs:max-w-xs xxs:max-w-xs max-w-xs lg:max-w-btn text-white bg-secondary px-14 py-4 rounded-sm mt-11 text-xs lg:text-lg'>Subscribe to Our Newsletter</button>
            </form>
        </section>
    )
}
export default Newsletter;