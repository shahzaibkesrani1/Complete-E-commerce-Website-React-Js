import React, { useEffect } from 'react'
import Header from '../Header'
import Example from '../Navbar'
import Footer from '../../Footer'
import { useNavigate } from 'react-router-dom';
function Blogs() {
  let isLogin=localStorage.getItem("isLogin");
  let navigate=useNavigate()
  console.log(isLogin);
  useEffect(()=>{
      if (isLogin) {
          navigate('/blogs')    
      }else{
  
          navigate('/login')    
      }
  
  },[])
  return (
    
    <div>
      <Header />
      <Example />
      <div className=" py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* text - start */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Blog
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Engaging in regular physical activity helps you maintain a healthy weight, reduces the risk of chronic diseases such as diabetes and heart disease, and enhances your cardiovascular health.
            </p>
          </div>
          {/* text - end */}
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* article - start */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">July 19, 2021</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    New trends in Tech
                  </a>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">April 07, 2021</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Working with legacy stacks
                  </a>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">March 15, 2021</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    10 best smartphones for devs
                  </a>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}
            {/* article - start */}
            <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-400">January 27, 2021</span>
                <h2 className="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    8 High performance Notebooks
                  </a>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <a
                    href="#"
                    className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* article - end */}
          </div>
        </div>
      </div>
            <Footer />

    </div>
  )
}

export default Blogs