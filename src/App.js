import React,{useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Services from "./Pages/Services"
import Application from "./Pages/Application"
import Career from "./Pages/Career"
import Contact from "./Pages/Contact"
import TopNavbar from './Components/TopNavbar'
import Navbar from './Components/Navbar'
import WiconAdmin from './Wiconadmin/WiconAdmin'
import Admin from './Wiconadmin/Admin'
import AdminAboutUs from './Wiconadmin/Pages/AdminAboutUs'
import AdminCareer from './Wiconadmin/Pages/AdminCareer'
import AdminContact from './Wiconadmin/Pages/AdminContact'


import BannerData from './Wiconadmin/Pages/Banner/BannerData'
import BannerCraete from './Wiconadmin/Pages/Banner/BannerCraete'
import BannerUpdate from './Wiconadmin/Pages/Banner/BannerUpdate'

import ProductData from './Wiconadmin/Pages/Product/ProductData'
import ProductCreate from './Wiconadmin/Pages/Product/ProductCreate'
import ProductUpdate from './Wiconadmin/Pages/Product/ProductUpdate'

import ApplicationData from './Wiconadmin/Pages/Application/ApplicationData'
import ApplicationCreate from './Wiconadmin/Pages/Application/ApplicationCreate'
import ApplicationUpdate from './Wiconadmin/Pages/Application/ApplicationUpdate'
import AboutusData from './Wiconadmin/Pages/AboutUs/AboutusData'
import AboutusCreate from './Wiconadmin/Pages/AboutUs/AboutusCreate'
import AboutusUpdate from './Wiconadmin/Pages/AboutUs/AboutusUpdate'



function App() {
  return (
    <>
     
    <Routes>
     
      <Route path="/" element={<Home/>}></Route>
      <Route path="/aboutus" element={<About/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/application" element={<Application/>}></Route>
      <Route path="/career" element={<Career/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      
      <Route path="/wiconadmin" element={<WiconAdmin/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      
      <Route path="/admin/bannerData" element={<BannerData/>}></Route>
      <Route path="/admin/banner/bannerCreate" element={<BannerCraete/>}></Route>
      <Route path="/admin/banner/:id" element={<BannerUpdate/>}></Route>

      <Route path="/admin/aboutusData" element={<AboutusData/>}></Route>
      <Route path="/admin/aboutus/aboutusCreate" element={<AboutusCreate/>}></Route>
      <Route path="/admin/aboutus/:id" element={<AboutusUpdate/>}></Route>

      <Route path="/admin/productData" element={<ProductData/>}></Route>
      <Route path="/admin/product/productCreate" element={<ProductCreate/>}></Route>
      <Route path="/admin/product/:id" element={<ProductUpdate/>}></Route>

      <Route path="/admin/applicationData" element={<ApplicationData/>}></Route>
      <Route path="/admin/application/applicationCreate" element={<ApplicationCreate/>}></Route>
      <Route path="/admin/application/:id" element={<ApplicationUpdate/>}></Route>
      
      <Route path="/admin/career" element={<AdminCareer/>}></Route>
      <Route path="/admin/contact" element={<AdminContact/>}></Route>
    </Routes>
    </>
  )
}

export default App
