import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import '@fontsource/josefin-sans';
import light from '../../../src/assests/image 32.png'
import sofa from '../../../src/assests/sofa promotional header.png'
import Example from '../header/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import fea from '../../../src/assests/Group 153.png'
import Footer from '../Footer';
import { motion, useAnimation } from 'framer-motion';
import './index.css'
function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const controls = useAnimation();
    let isLogin = localStorage.getItem("isLogin");
    let navigate = useNavigate()
    console.log(isLogin);
    useEffect(() => {
        if (isLogin) {
            navigate('/')
        } else {

            navigate('/login')
        }

    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > -10) {
                setIsVisible(true);
                controls.start({ opacity: 1, y: -10 });
            } else {
                setIsVisible(false);
                controls.start({ opacity: 0, y: 50 });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    // Define animation properties for the section
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.10 } },
    };

    // Define keyframe animation for the image
    const imageKeyframes = {
        up: { y: -10, transition: { yoyo: Infinity, duration: 5 } },
        down: { y: 10, transition: { yoyo: Infinity, duration: 5 } },
    };


    const [productData, setProductData] = useState([]);

    useEffect(() => {
        // Fetch data from the API when the component mounts
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                setProductData(json);
            });
    }, []);
    return (
        <div>
            <Header />
            <Example />
            <div className="bg-[#F2F0FF]">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8 font">
                    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                        {/* content - start */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={controls}
                            transition={{ duration: 0.6 }}
                            style={{ display: isVisible ? 'block' : 'none' }}
                        >
                            <div style={{ zIndex: '10' }}>
                                <img className='w-80' src={light} alt="" />
                            </div>
                        </motion.div>
                        <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24" style={{ position: 'relative', left: '-100px' }}>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={controls}
                                transition={{ duration: 0.6 }}
                                style={{ display: isVisible ? 'block' : 'none' }}
                            >
                                <p style={{ color: '#FB2E86', fontWeight: '700' }} className='ms-1'>Best Furniture For Your Castle....</p>

                                <h1 className="mt-2 mb-8 text-2xl font-bold text-black sm:text-4xl md:mb-12 md:text-5xl">
                                    New Furniture Collection
                                    Trends in 2020
                                </h1>
                                <p style={{ maxWidth: '400px', top: '-45px', position: 'relative' }} className="leading-relaxed text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                    in phasellus non in justo.
                                </p>
                                <form className="flex w-full">
                                    <button style={{ position: 'relative', top: '-30px' }} className="inline-block rounded bg-[#FB2E86] px-8 py-2 text-center text-sm font-bold text-white outline-none ring-indigo-300 transition duration-300 hover:bg-[#fb2e87b8] focus-visible:ring active:bg-indigo-700 md:text-base">
                                        Shop Now
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                        <div className="bg-[#F2F0FF]">

                            <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                                {/* Rest of your section content here */}
                                <div>
                                    <img
                                        src={sofa}
                                        loading="lazy"
                                        alt="Photo by Fakurian Design"
                                        className="object-cover object-center animated-div "
                                        variants={imageKeyframes}
                                        animate="up" // Start with the 'up' keyframe
                                    />
                                </div>
                            </section>
                        </div>

                    </section>
                </div>
            </div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* text - start */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-[#FB2E86] md:mb-6 lg:text-3xl">
                            Featured Products
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={controls}
                            transition={{ duration: 0.9 }}
                            style={{ display: isVisible ? 'block' : 'none' }}
                        >
                            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                                we take pride in offering high-quality, innovative, and stylish products that cater to your needs and preferences.
                            </p>
                        </motion.div>
                    </div>
                    {/* text - end */}
                    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                        {/* product - start */}
                        <div>
                            <a
                                href="#"
                                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                                <div className="absolute left-0 bottom-2 flex gap-2">
                                    <span className="rounded-r-lg bg-red-500 px-3 py-1.5 text-sm font-semibold uppercase tracking-wider text-white">
                                        -50%
                                    </span>
                                    <span className="rounded-lg bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-gray-800">
                                        New
                                    </span>
                                </div>
                            </a>
                            <div className="flex items-start justify-between gap-2 px-2">
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        Fancy Outfit
                                    </a>
                                    <span className="text-gray-500">by Fancy Brand</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-600 lg:text-lg">$19.99</span>
                                    <span className="text-sm text-red-500 line-through">$39.99</span>
                                </div>
                            </div>
                        </div>
                        {/* product - end */}
                        {/* product - start */}
                        <div>
                            <a
                                href="#"
                                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by Nick Karvounis"
                                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>
                            <div className="flex items-start justify-between gap-2 px-2">
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        Cool Outfit
                                    </a>
                                    <span className="text-gray-500">by Cool Brand</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-600 lg:text-lg">$29.99</span>
                                </div>
                            </div>
                        </div>
                        {/* product - end */}
                        {/* product - start */}
                        <div>
                            <a
                                href="#"
                                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>
                            <div className="flex items-start justify-between gap-2 px-2">
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        Nice Outfit
                                    </a>
                                    <span className="text-gray-500">by Nice Brand</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-600 lg:text-lg">$35.00</span>
                                </div>
                            </div>
                        </div>
                        {/* product - end */}
                        {/* product - start */}
                        <div>
                            <a
                                href="#"
                                className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by Vladimir Fedotov"
                                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>
                            <div className="flex items-start justify-between gap-2 px-2">
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                    >
                                        Lavish Outfit
                                    </a>
                                    <span className="text-gray-500">by Lavish Brand</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="font-bold text-gray-600 lg:text-lg">$49.99</span>
                                </div>
                            </div>
                        </div>
                        {/* product - end */}
                    </div>
                </div>
            </div>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-[#FB2E86] md:mb-6 lg:text-3xl">
                            Our Best Selling Products
                        </h2>
                        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste cum quia dolorum nam optio qui minus veniam, repellat, iusto facilis, nesciunt fugiat eaque eos. Officia quas ipsum nihil qui delectus.
                        </p>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                                {productData.slice(12, 20).map((product) => (
                                    <div key={product.id}>
                                        <div className="">
                                            <div className="">
                                                <div className="mb-8 ">
                                                    <NavLink
                                                        to={`/details/${product.id}`}
                                                        className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                                                    >
                                                        <img
                                                            src={product.image}
                                                            alt={product.title}
                                                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                                        />
                                                    </NavLink>
                                                    <div className="flex items-start justify-between gap-2 px-2 ">
                                                        <div className="flex flex-col">
                                                            <a
                                                                href="#"
                                                                className="text-gray-800 transition duration-100 hover:text-gray-500"
                                                            >
                                                                {product.title}
                                                            </a>
                                                        </div>
                                                        <div className="flex flex-col items-end">
                                                            <span className="font-bold text-gray-600 lg:text-lg">${product.price}</span>
                                                            <span className="text-sm text-red-500 line-through">$39.99</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* product - end */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={controls}
                                transition={{ duration: 0.6 }}
                                style={{ display: isVisible ? 'block' : 'none' }}
                            >
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                                <p className="mt-4 text-lg leading-8 text-gray-300">
                                    Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                                    dolore.
                                </p>
                                <div className="mt-6 flex max-w-md gap-x-4 ms-8">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="ms-24 rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 ms-16 font-semibold text-white">Weekly articles</dt>
                                <dd className="me-10 mt-2 leading-7 text-gray-400">
                                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="ms-28 rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="ms-24 mt-4 font-semibold text-white">No spam</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12 mt-4">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
                        <div className="h-48 overflow-hidden lg:h-auto xl:w-5/12 animated-div">
                            <img
                                src={fea}
                                loading="lazy"
                                alt="Photo by Fakurian Design"
                                className=""
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={controls}
                                transition={{ duration: 0.6 }}
                                style={{ display: isVisible ? 'block' : 'none' }}
                            >
                                <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-4xl">
                                    Unique Features Of leatest &
                                    Trending Poducts
                                </h1>
                                <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                                    All frames constructed with hardwood solids and laminates
                                </p>
                            </motion.div>
                            <form className="flex w-full gap-2 md:max-w-md mb-10">
                                <button style={{ position: 'relative', top: '-20px' }} className="inline-block rounded bg-[#FB2E86] px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                    Add To Cart
                                </button>
                            </form>

                        </div>
                        {/* content - end */}
                        {/* image - start */}

                        {/* image - end */}
                    </section>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Home