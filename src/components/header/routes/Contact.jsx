import React from 'react'
import Example from '../Navbar'
import Header from '../Header'
import img from '../../../assests/Group 124.png'
import Footer from '../../Footer'
function Contacts() {
    return (
        <>
            <Header />
            <Example />
            <div className="pb-6 sm:pb-8 lg:pb-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
                        <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
                            <div className="py-6 sm:py-8 lg:py-12">
                                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                                    {/* text - start */}
                                    <div className="mb-10 md:mb-16">
                                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                                            Get in touch
                                        </h2>
                                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                                            This is a section of some simple filler text, also known as placeholder
                                            text. It shares some characteristics of a real written text but is
                                            random or otherwise generated.
                                        </p>
                                    </div>
                                    {/* text - end */}
                                    {/* form - start */}
                                    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="first-name"
                                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                            >
                                                First name*
                                            </label>
                                            <input style={{border:" 1px solid #A4B6C8B2"}}
                                                name="first-name"
                                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="last-name"
                                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                            >
                                                Last name*
                                            </label>
                                            <input  style={{border:" 1px solid #A4B6C8B2"}}
                                                name="last-name"
                                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="company"
                                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                            >
                                                Company
                                            </label>
                                            <input  style={{border:" 1px solid #A4B6C8B2"}}
                                                name="company"
                                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="email"
                                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                            >
                                                Email*
                                            </label>
                                            <input   style={{border:" 1px solid #A4B6C8B2"}}
                                                name="email"
                                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="subject"
                                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                            >
                                                Subject*
                                            </label>
                                            <input  style={{border:" 1px solid #A4B6C8B2"}}
                                                name="subject"
                                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                            />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label
                                                htmlFor="message"
                                                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                            >
                                                Message*
                                            </label>
                                            <textarea  style={{border:" 1px solid #A4B6C8B2"}}
                                                name="message"
                                                className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="flex items-center justify-between sm:col-span-2">
                                            <button className="inline-block rounded-lg bg-[#FB2E86] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-300 hover:bg-[#fb2e87c6] focus-visible:ring active:bg-indigo-700 md:text-base">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 h-48 overflow-hidden rounded-lg bg-gray-100 lg:h-96 xl:w-5/12">
                    <img
                        src={img}
                        loading="lazy"
                        alt="Photo by Fakurian Design"
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                    </section>
                </div>
                      </div >
                <Footer/>
              
        </>
    )
}

export default Contacts