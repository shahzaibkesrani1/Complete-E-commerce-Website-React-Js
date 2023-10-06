import { Fragment, useState } from 'react'
import { Dialog, } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { Input, Space } from 'antd';
const { Search } = Input;
export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
const navData=[
  {
    to:"/",
    label:"Home"
  },
  {
    to:"/about",
    label:"About"
  },
  {
    to:"/blogs",
    label:"Blogs"
  },
  {
    to:"/Products",
    label:"Products"
  },
  {
    to:"/Testimonial",
    label:"Testimonial"
  },
  {
    to:"/Contacts",
    label:"Contact"
  },
]



    return (
        <header className="bg-white" style={{ position: 'relative', top: '-50px' }}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href='' className="-m-1.5 p-1.5">
                        <NavLink to={'/'}>
                      <div className='flex ms-2 gap-4'>
                      <svg
              width={95}
              height={94}
              viewBox="0 0 95 94"
              className="h-auto w-5 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
                            <h1 className='font-bold text-3xl'>Hekto</h1>
                      </div>
                        </NavLink>
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                  {
navData.map((item,i)=>{
return(

  <NavLink to={item.to} className={`${window.location.pathname==item.to?"text-[#FB2E86]":""} text-sm font-semibold leading-6 `}>
      
                       {item.label}
       
                  </NavLink>
            
            )
          })
                  }
                </div>
            </nav>
        </header>
    )
}
