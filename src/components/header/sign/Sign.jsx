import React, { useState } from 'react'
import Header from '../Header'
import Example from '../Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
function Sign() {
    let naviagte = useNavigate()
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        const { name, value: inputValue } = e.target; // Destructure the name and value from the input element
        setValue({
            ...value,
            [name]: inputValue, // Update the corresponding field in the state
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Sign Up Success Fully");
        let prevData = JSON.parse(localStorage.getItem("users")) || [];

        prevData.push(value);
        localStorage.setItem("users", JSON.stringify(prevData));
        localStorage.setItem("isLogin", false);
        naviagte("/login")
    }


    return (
        <div>
            <Header />
            <Example />
            <div className="sm:py-8 lg:py-12 shadow-xl">
                <div className="mx-auto max-w-screen-2xl">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
                        Sign Up
                    </h2>
                    <form onSubmit={handleSubmit} className="bg-white mx-auto max-w-lg rounded-lg border shadow-xl">
                        <div className="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label style={{ position: 'relative', left: '-202px' }}
                                    htmlFor="name"
                                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                >
                                    Name
                                </label>
                                <input onChange={handleInput} style={{ border: " 1px solid #A4B6C8B2" }}
                                    name="name"
                                    value={value.name}
                                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                />
                            </div>
                            <div>
                                <label style={{ position: 'relative', left: '-202px' }}
                                    htmlFor="email"

                                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                >
                                    Email
                                </label>
                                <input onChange={handleInput} style={{ border: " 1px solid #A4B6C8B2" }}
                                    name="email"
                                    value={value.email}
                                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                />
                            </div>
                            <div>
                                <label style={{ position: 'relative', left: '-190px' }}
                                    htmlFor="password"
                                    className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                >
                                    Password
                                </label>
                                <input onChange={handleInput} style={{ border: " 1px solid #A4B6C8B2" }}
                                    name="password"
                                    value={value.password}
                                    className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                />
                            </div>
                            <button type="submit" className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                                Sign Up
                            </button>

                        </div>
                        <div className="flex items-center justify-center bg-gray-100 p-4">
                            <p className="text-center text-sm text-gray-500">
                                Already Have an Account?{""}
                                <NavLink to={"/login"} className="ms-2 text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                                >
                                    Login
                                </NavLink>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Sign