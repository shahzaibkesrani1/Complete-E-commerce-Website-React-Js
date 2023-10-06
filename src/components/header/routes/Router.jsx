import React from 'react'
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Login from '../login/Login';
import Home from '../../pages/Home';
import Sign from '../sign/Sign';
import Details from '../../pages/Details';
import Blogs from './blogs';
import Contacts from './Contact';
import About from './About';
import Cart from './Cart';
import Products from '../Products';
import Testimonial from '../Testimonial';
function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Sign" element={<Sign />} />
                <Route path="/Details/:id" element={<Details />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/about" element={<About />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Testimonial" element={<Testimonial/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router