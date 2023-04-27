import React from 'react'
import Topbar from '../../components/Topbar'
import Mainbar from '../../components/Mainbar'
import Footer from '../../components/Footer'
import zub from '../../Images/slabs/Zubrana Coorg.png'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
const Zubrana = () => {
  return (
    <>
    <Topbar/>
    <Mainbar/>
    <div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>ZUBRANA COORG</h3></div>
     
<div className='container'>
  <div className='frstcol row col-md-6'>
  <Gallery>
  <Item
      original={zub}
      thumbnail={zub}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={zub}  style={{height:'300px',width:'500px',margin:'10px'}} />
      )}
    </Item>
    </Gallery>
  </div>
 


  <div className='row slabinfo'>
    
 
  <div className='scndcol col-md-5'>
<table>
  <th>Overview:-</th>
  <tr><td>Color:Black</td></tr>
  <tr><td>Surface Finishing: Polished,Flamed,Bushed,HonedColor</td></tr>
  <tr><td>From: Slab</td></tr>
</table>
 </div>
 <div className='thrdcol col-md-5'>
 <table>
  <th>Features:-</th>
  <tr><td>Product Dimension : As Per Customers Choice</td></tr>
  <tr><td>Recommended use : As per customers choice</td></tr>
  <tr><td>Price : Competitive</td></tr>
</table>
 </div>
 </div>
</div>
    <Footer/>
    </>
  )
}

export default Zubrana