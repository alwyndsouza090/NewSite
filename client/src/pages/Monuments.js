import React from 'react'
import Topbar from '../components/Topbar'
import Mainbar from '../components/Mainbar'
import Footer from '../components/Footer'
import m1 from "../Images/Monuments/BLACK - E6(MODEL6)_gallery_308572912.jpeg"
import m2 from "../Images/Monuments/BLUE PEARL - A4 (L 27)_gallery_1182117030.jpeg"
import m3 from "../Images/Monuments/BLUE PEARL- A2(L17)_gallery_1900199894.jpeg"
import m4 from "../Images/Monuments/BLUE PEARL- A3(L14)_gallery_376761586.jpeg"
import m5 from "../Images/Monuments/CATS EYE - A3(L14)_gallery_1278930091.jpeg"
import m6 from "../Images/Monuments/FISH BELLY - A2(L17)_gallery_645495726.jpeg"
import m7 from "../Images/Monuments/FISH BELLY - A5(L22V)_gallery_1539007615.jpeg"
import m8 from "../Images/Monuments/GREY - E2(MODEL2)_gallery_615234334.jpeg"
import m9 from "../Images/Monuments/INDIAN AURORA - A1(L22)_gallery_1406885813.jpeg"
import m10 from "../Images/Monuments/INDIAN AURORA - A4(L27)_gallery_741399648.jpeg"
import m11 from "../Images/Monuments/INDIAN AURORA - A5(L22V)_gallery_1445035015.jpeg"
import m12 from "../Images/Monuments/INDIAN AURORA copy_gallery_445488502.jpeg"
import m13 from "../Images/Monuments/INIDAN AURORA  3 copy_gallery_197536358.jpeg"
import m14 from "../Images/Monuments/MIST GREY - A1(L22B)_gallery_156782103.jpeg"
import m15 from "../Images/Monuments/MIST GREY - A3(L14)_gallery_1934771759.jpeg"
import m16 from "../Images/Monuments/MOON WHITE - A1(L22)_gallery_1510629768.jpeg"
import m17 from "../Images/Monuments/MOON WHITE - A3(L14)_gallery_1403447295.jpeg"
import m18 from "../Images/Monuments/MULTICOLOR - A2(L17B)_gallery_1737621448.jpeg"

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const Monuments = () => {
  return (
    <>
    <Topbar/>
    <Mainbar/>
    <div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>MONUMENTS</h3></div>
    <div className='container my-5'>
  <Gallery>
    <Item
      original={m1}
      thumbnail={m1}
      width="1000"
      height="600"
      
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m1} style={{height:'250px',width:'400px',margin:'10px'}}/>
      )}
    </Item>
    <Item
      original={m2}
      thumbnail={m2}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m2}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m3}
      thumbnail={m3}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m3}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m4}
      thumbnail={m4}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m4}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m5}
      thumbnail={m5}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m5}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m6}
      thumbnail={m6}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m6}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m7}
      thumbnail={m7}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m7}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m8}
      thumbnail={m8}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m8}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m9}
      thumbnail={m9}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m9}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m10}
      thumbnail={m10}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m10}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m11}
      thumbnail={m11}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m11}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m12}
      thumbnail={m12}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m12}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m13}
      thumbnail={m13}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m13}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m14}
      thumbnail={m14}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m14}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m15}
      thumbnail={m15}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m15}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m16}
      thumbnail={m16}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m16}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m17}
      thumbnail={m17}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m17}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
    <Item
      original={m18}
      thumbnail={m18}
      width="1000"
      height="600"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={m18}  style={{height:'250px',width:'400px',margin:'10px'}} />
      )}
    </Item>
  </Gallery>
  </div>
    <Footer/>
    </>
  )
}

export default Monuments