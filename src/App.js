import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Product from './Pages/Product'
import Paymentpage from './Pages/Paymentpage'
import Checkout from './Pages/Checkout'
import Footer from './Pages/Footer'
import './style.css'
import AboutUs from './Pages/AboutUs'
import BusinessNews from './Pages/BusinessNews'
import EntertainmentNewsList from './Pages/EntertainmentNews'
import TechnologyNewsList from './Pages/TechNews'
import SportsNewsList from './Pages/SportsNews'
import NewsComponent from './HealthNews'
import ScientificNews from './Pages/ScientificNews'
import TopHeadlines from './Pages/TopHeadlines'
// Add this import statement at the top of your JS file
import '@fortawesome/fontawesome-free/css/all.css';
import CovidStatus from './Pages/CovidStatus'
import ContactUs from './Pages/ContactUs'
import OurTeam from './Pages/OurTeam'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Signup></Signup>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/products" element={<Product></Product>}></Route>
          <Route path="/paymentpage" element={<Paymentpage></Paymentpage>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="/businessnews" element={<BusinessNews></BusinessNews>}></Route>
          <Route path="/entertainmentsnews" element={<EntertainmentNewsList></EntertainmentNewsList>}></Route>
          <Route path="/technews" element={<TechnologyNewsList></TechnologyNewsList>}></Route>
          <Route path="/sportssnews" element={<SportsNewsList></SportsNewsList>}></Route>
          <Route path="/healthnews" element={<NewsComponent></NewsComponent>}></Route>
          <Route path="/scientificnews" element={<ScientificNews></ScientificNews>}></Route>
          <Route path="/breakingnews" element={<TopHeadlines></TopHeadlines>}></Route>
          <Route path="/covidstatus" element={<CovidStatus></CovidStatus>}></Route>
          <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/ourteam" element={<OurTeam></OurTeam>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
