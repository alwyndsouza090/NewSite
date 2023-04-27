import React from 'react'
import Topbar from '../components/Topbar'
import Mainbar from '../components/Mainbar'
import Footer from '../components/Footer'
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import b1 from "../Images/Blocks/G-20 (1) copy_gallery_1227234513.jpeg"
import b2 from "../Images/Blocks/G-20 (2) copy_gallery_1067754449.jpeg"
import b3 from "../Images/Blocks/kuppam-green-granite-blocks_gallery_912028921.jpeg"
import b4 from "../Images/Blocks/LAVENDAR BLUE copy_gallery_1801922364.jpeg"
import b5 from "../Images/Blocks/MNG copy_gallery_1212254424.jpeg"
import b6 from "../Images/Blocks/MULTICOLOR RED_gallery_1247605562.jpeg"
import b7 from "../Images/Blocks/ROYAL BLACK copy_gallery_1500062189.jpeg"
import b8 from "../Images/Blocks/STEEL GREY copy_gallery_2107048343.jpeg"
import b9 from "../Images/Blocks/TAN BROWN (2)_gallery_29678972.jpeg"
import b10 from "../Images/Blocks/VIZAG BLUE (DR) (3) copy_gallery_1505578162.jpeg"
import b11 from "../Images/Blocks/VIZAG BLUE (ENG  (4) copy_gallery_930520371.jpeg"
import b12 from "../Images/Blocks/VIZAG BLUE (VR) (2) copy_gallery_969063160.jpeg"


const Blocks = () => {
  return (
    <>
    <Topbar/>
    <Mainbar/>
    <div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>BLOCKS</h3></div>
    <div className='container'>
  <Gallery>
    <Item
      original={b1}
      thumbnail={b1}
      width="1000"
      height="600"
      
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b1} style={{height:'250px',width:'400px',margin:'10px'}}/>
      )}
    </Item>
    <Item
      original={b2}
      thumbnail={b2}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b2}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b3}
      thumbnail={b3}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b3}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b4}
      thumbnail={b4}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b4}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b5}
      thumbnail={b5}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b5}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b6}
      thumbnail={b6}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b6}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b7}
      thumbnail={b7}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b7}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b8}
      thumbnail={b8}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b8}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b9}
      thumbnail={b9}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b9}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b10}
      thumbnail={b10}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b10}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b11}
      thumbnail={b11}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b11}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={b12}
      thumbnail={b12}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={b12}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
  </Gallery>
  </div>
    <Footer/>
    </>
  )
}

export default Blocks