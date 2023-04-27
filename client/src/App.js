import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import Company from './pages/Company'
import Policy from './pages/About/Policy'
import Terms from './pages/About/Terms'
import Disclaimer from './pages/About/Disclaimer'
import Absolute from './pages/Products/Absolute'
import Allproducts from './pages/Products/Allproducts'
import Viscount from './pages/Products/Viscount'
import Jet from './pages/Products/Jet'
import Zubrana from './pages/Products/Zubrana'
import Belman from './pages/Products/Belman'
import Process from './pages/Process'
import Projects from './pages/Projects'
import Gallery from './pages/Gallery'
import ContactForm from './pages/ContactUs'
import Infra from './pages/Infra'
import Slabs from './pages/Slabs'
import Monuments from './pages/Monuments'
import Blocks from "./pages/Blocks"

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Company' element={<Company/>}/>
      <Route path='/AboutUs/PrivacyPolicy' element={<Policy/>}/>
      <Route path='/AboutUs/Terms&Conditions' element={<Terms/>}/>
      <Route path='/AboutUs/Disclaimer' element={<Disclaimer/>}/>
      <Route path='/Products/AllProducts' element={<Allproducts/>}/>
      <Route path='/Products/ViscountSilver' element={<Viscount/>}/>
      <Route path='/Products/JetBlack' element={<Jet/>}/>
      <Route path='/Products/AbsoluteBlack' element={<Absolute/>}/>
      <Route path='/Products/ZubranaCoorg' element={<Zubrana/>}/>
      <Route path='/Products/BelmanBeauty' element={<Belman/>}/>
      <Route path='/Process' element={<Process/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/ContactUs' element={<ContactForm/>}/>

      <Route path='/Infra' element={<Infra/>}/>
      <Route path='/Gallery/Slabs' element={<Slabs/>}/>
      <Route path='/Gallery/Monuments' element={<Monuments/>}/>
      <Route path='/Gallery/Blocks' element={<Blocks/>}/>
    


    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App