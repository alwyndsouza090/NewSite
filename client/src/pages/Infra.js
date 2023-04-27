import React from 'react'
import Topbar from '../components/Topbar'
import Mainbar from '../components/Mainbar'
import Footer from '../components/Footer'

const Infra = () => {
  return (
    <>
    <Topbar/>
    <Mainbar/>
    <div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>INFRASTRUCTURE</h3></div>
    <div className='container my-5'>
<p className='p'>Stems N Leaves International has made significant investments in developing infrastructure to service its Clients’ needs. Since 2018 SNL has been aggressive in its acquisitions and has purchased in 2 huge factories in Mangalore. Equipped with best skilled manpower and reliable technology, these factories are capable of processing granite blocks into beautiful monuments and slabs.</p>
<h4 className='h4'>Unit 1 : Mangalore</h4>
<p className='p'>In 2018, SNL acquired a distress unit and turned into a bustling hub of monument and slab processing. Spread over 51,500Sqft area this state of the art slab processing and monument manufacturing facility is strategically located at KIADB, Baikampady Industrial Estate, which is just adjacent to New Mangalore Port . Company presently supplies about 70 containers of Christian Cemetery monuments per year to European countries and is already sitting on a huge list of orders for next 5 years. Presently the factory is going through machinery upgrades .</p>
<h4 className='h4'>Unit 2 : Moodabidri</h4>
<p className='p'>In 2020 Stems N Leaves acquired a functional slab slicing factory at Moodabidri , India(D.K). Spread over a area of 28000 Sqft ,this factory enhances slab processing capabilities of the firm.</p>
    </div>
    <Footer/>
    </>
  )
}

export default Infra