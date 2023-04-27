import React from 'react'
import Topbar from '../components/Topbar'
import Mainbar from '../components/Mainbar'
import Footer from '../components/Footer'
import ipro1 from "../Images/projects/Projects 1.jpg"
import ipro2 from "../Images/projects/Projects 2.jpg"
import p1 from "../Images/projects/prjct1.jpg"
import p2 from "../Images/projects/prjct2.jpg"
import p3 from "../Images/projects/prjct3.jpg"
import p4 from "../Images/projects/prjct4.jpg"
import p5 from "../Images/projects/prjct5.jpg"
import p8 from "../Images/projects/prjct8.jpg"
import p9 from "../Images/projects/prjct9.jpg"
import p10 from "../Images/projects/prjct10.jpg"
import p11 from "../Images/projects/prjct11.jpg"
import p12 from "../Images/projects/prjct12.jpg"
import p13 from "../Images/projects/prjct13.jpg"
import p14 from "../Images/projects/prjct14.jpg"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Projects = () => {
  return (
  <>
  <Topbar/>
  <Mainbar/>
  <div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>PROJECTS</h3></div>
  <div className='container project my-4'>

  <p className='p'>Cephas Granite’s strong link and connectivity with factories and sources across India, has been its strong point over the years. This trust has enabled the company to source the right material and get flawless finishes on customized artifacts, such as fountains, for home interiors. Cephas Granites also under takes large scale projects, especially of Chapels, on a turnkey basis.</p>
  
  <ul>
    <li><b><u> Project 1 :</u></b></li>
    <p>In 2017-2018 SNL was involved in restoration of UNESCO heritage sites at City Centrum, Szczecin, Poland, 5 buildings were restored using fine Indian granite stones by Indian artisans.</p>  
   <div className="col-md-12">
   <Gallery>
    <Item
      original={ipro1}
      thumbnail={ipro1}
      width="1000"
      height="600"
      
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={ipro1} style={{height:'200px',width:'300px',margin:'10px'}}/>
      )}
    </Item>
    <Item
      original={ipro2}
      thumbnail={ipro2}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={ipro2}  style={{height:'200px',width:'300px',margin:'10px'}} />
      )}
    </Item>
    </Gallery>
  </div>

    <li><b><u> Project 2 :</u></b></li>
    <p className='p'>In 2018, SNL sourced Worlds No 1 Jet Black Granite- GUNA rough blocks were used in In smolensk air crash memorial in Warsaw Poland.</p>
    <li><b><u> Project 3 :</u></b></li>
    <p className='p'>SNL is restoring 9 church complexes in Poland.</p>
    <li><b><u> Project 4 :</u></b></li>
    <p className='p'>Stems N Leaves finds itself blessed to be involved in 18 church complex projects across Karnataka , Kerala , Andhra Pradesh and Tamilnadu.
    </p>
    <li><b><u> Our Completed Projects</u></b></li>
    <p className='p'>Divine Retreat Centre – English Chapel– Potta, Kerala 
        Divine Retreat Centre – Konkani Chapel– Potta, Kerala 
        Divine Retreat Centre – Kannada Chapel –Potta, Kerala 
        Divine Retreat Centre – International Chapel – Potta , Kerala 
        Divine Retreat Centre – Hindi Chapel – Potta, Kerala 
        Divine Retreat Centre – Catering Kitchen Hall – Potta, Kerala
        Our Lady of Fatima Chapel – Altar Table – Xelliam, Goa, India 
        Infant Jesus Church- School Project - Huvina Hadagali, Bellary, India 
        Infant Jesus Church & Shrine – Library & Dining Hall Complex- Carmel Hill, Mangalore, India 
        Divine Mercy Shrine - Church Complex -Anna Nagar, Chennai, India
        </p>
  
  </ul>
  
  
    </div>
    <b><hr/></b>
    <div className='container'>
      <h2 className='h2 text-center'><b>Our Completed Projects</b></h2>
  <Gallery>
    <Item
      original={p1}
      thumbnail={p1}
      width="1000"
      height="600"
      
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p1} style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}}/>
      )}
    </Item>
    <Item
      original={p2}
      thumbnail={p2}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p2}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
    <Item
      original={p3}
      thumbnail={p3}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p3}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
    <Item
      original={p4}
      thumbnail={p4}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p4}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
    <Item
      original={p5}
      thumbnail={p5}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p5}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
   
    <Item
      original={p8}
      thumbnail={p8}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p8}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
    <Item
      original={p9}
      thumbnail={p9}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p9}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
    <Item
      original={p10}
      thumbnail={p10}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p10}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
    <Item
      original={p11}
      thumbnail={p11}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p11}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
    <Item
      original={p12}
      thumbnail={p12}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p12}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
    <Item
      original={p13}
      thumbnail={p13}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p13}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
    <Item
      original={p14}
      thumbnail={p14}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={p14}  style={{height:'200px',width:'300px',margin:'10px',borderRadius:'50%'}} />
      )}
    </Item>
  </Gallery>
  </div>

 
  <Footer/>
  </>
  )
}

export default Projects