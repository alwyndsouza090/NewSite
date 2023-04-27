import React from 'react'
import Topbar from '../components/Topbar'
import Mainbar from '../components/Mainbar'
import Footer from '../components/Footer'

import Slabproducts from '../components/Slabproducts'

const Slabs = ({images}) => {

  return (
    <>
    <Topbar/>
    <Mainbar/>
<div className='container'>
<Slabproducts/>
  </div>
  <Footer/>
    </>
  )
}

export default Slabs