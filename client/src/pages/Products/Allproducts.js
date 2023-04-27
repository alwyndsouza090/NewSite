import React from 'react'
import Topbar from '../../components/Topbar'
import Mainbar from '../../components/Mainbar'
import Footer from '../../components/Footer'

import Slabproducts from '../../components/Slabproducts'


const Allproducts = () => {
  return (
   <>
   <Topbar/>
   <Mainbar/>
   <div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>ALL PRODUCTS</h3></div>
<Slabproducts/>
   <Footer/>
   </>
  )
}

export default Allproducts