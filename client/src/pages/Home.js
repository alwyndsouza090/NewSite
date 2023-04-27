import React from 'react'
import Carousel from '../components/Carousel'
import Topbar from '../components/Topbar'
import Mainbar from '../components/Mainbar'
import Footer from '../components/Footer'
import c1 from "../Images/g17.jpg"
import c2 from "../Images/g15.jpg"
import c3 from "../Images/g7.jpg"
import { NavLink } from 'react-router-dom'
import "../pages/Products/products.css"
import Slabproducts from '../components/Slabproducts'
import comp from "../Images/about-us.jpg"
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import TestimonialCarousel from '../components/Testimony'
import "./style.css"

const Home = () => {
    
    const images = [
        {
          src: {c1},
          alt: 'Image 1',
        },
        {
          src: {c2},
          alt: 'Image 2',
        },
        {
          src: {c3},
          alt: 'Image 3',
        },
      ];

  return (
    <div>
        <Topbar/>
        <Mainbar/>
        <Carousel images={images} />





          {/* start of home Products cards */}
<h3 className='text-center my-3'>Our Main Products</h3>
<Slabproducts/>

          



{/* end of home products */}



<div className='info row'>
<div className='col-md-6'>

<h3 className='h3 text-center'>CEPHAS GRANITES - MOODBIDRI</h3>

<div className='row' style={{backgroundColor:'ButtonShadow',borderRadius:'20px',padding:'35px'}}>
<Gallery>
<Item
      original={comp}
      thumbnail={comp}
      width="1000"
      height="600"
      
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={comp} className='col-md-6 rounded-circle'/>
      )}
    </Item>
</Gallery>
<p className='p col-md-6'>A Natural Stone Export house owned by a first generation Mudbidri entrepreneur family fully conversant with every pulse and feel of each aspect pertinent to the Natural Stone Industry. Cephas Granites through its President's omnipresence is in a position to integrate the business forward to scale new heights. Cephas Granites commenced its journey in Granite business over 27 years ago as a trading entity. Basically, Cephas Granite’s forte has been trading in raw granite rocks. The journey as trader has taken Cephas Granites to various potential granite users spread over various parts of the Globe which has helped Cephas Granites to tune up with every detail of the Trade.........
<NavLink to='/Company' style={{textDecoration:'none',color:'brown'}}>Read More</NavLink>
</p>
</div>

</div>
<div className='col-md-6'>
<h3 className='h3 text-center'>CEO'S MESSAGE</h3>
<p className='p text-center' style={{backgroundColor:'ButtonShadow',borderRadius:'20px',padding:'35px'}}>
Dear Visitor,
Cephas Granites welcomes you and takes you to discover more about our company. Seeing your interest in our company, we are glad to take this opportunity of saying few words about us. We are a leader in the supply of Stones and Granites Started as a small venture, the company took giant strides in the industry. Products we supply are manufactured in our well-equipped manufacturing facilities in Mudbidri and further supplied to many states in India as well abroad. Our company is now a full-fledged centre of the highest number of varieties of Indian as well imported Granites and Stones. To keep up with the global trends, we are also bringing rarest Granites to diverse and enrich the architecture in our country. We are quick to work in tune with the newest trends in construction and aim to provide highest quality products to our valuable clients. We also strive to give the best work environment to our employees and keep our working facilities and processes environment-friendly.

<br/>Thank You.<br/>
<b className='text-center'>Rufina Salvia Goveas</b>
</p>

</div>

        </div>  

<TestimonialCarousel />
<Footer/>
    </div>
  )
}

export default Home