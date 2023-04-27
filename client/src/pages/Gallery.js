import React from 'react'
import Topbar from '../components/Topbar'
import Mainbar from '../components/Mainbar'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import slabimg from "../Images/slabs/Viscount Silver.png"
import monumentimg from "../Images/Monuments/GREY - E2(MODEL2)_gallery_615234334.jpeg"
import blockimg from "../Images/Blocks/STEEL GREY copy_gallery_2107048343.jpeg"
import "../components/Slabproducts.css"

const Gallery = () => {
  return (
    <>
    <Topbar/>
    <Mainbar/>
    <div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>GALLERY</h3></div>
    <div className='container card_main my-5'>

<article className="card m-4">
<img
 class="card__background"
 src={slabimg}
 alt=""
 width="1500"
 height="1900"
/>
<div class="card__content | flow">
 <div class="card__content--container | flow">
   <h2 class="card__title">SLABS</h2>
   <p class="card__description">
     To see more images of slabs
   </p>
 </div>
 <button class="card__button"><NavLink to="/Gallery/Slabs" className='navbutton'>More..</NavLink>
</button>
</div>
</article>

<article className="card m-4">
<img
 class="card__background"
 src={monumentimg}
 alt=""
 width="1500"
 height="1900"
/>
<div class="card__content | flow">
 <div class="card__content--container | flow">
   <h2 class="card__title">MONUMENTS</h2>
   <p class="card__description">
   To see more images of monuments
   </p>
 </div>
 <button class="card__button"><NavLink to="/Gallery/Monuments" className='navbutton'>More..</NavLink>
</button>
</div>
</article>

<article className="card m-4">
<img
 class="card__background"
 src={blockimg}
 alt=""
 width="1500"
 height="1900"
/>
<div class="card__content | flow">
 <div class="card__content--container | flow">
   <h2 class="card__title">BLOCKS</h2>
   <p class="card__description">
To see more images of blocks.
   </p>
 </div>
 <button class="card__button"><NavLink to="/Gallery/Blocks" className='navbutton'>More..</NavLink>
</button>
</div>
</article>
</div>
    <Footer/>
    </>
  )
}

export default Gallery