import React from 'react'
import Topbar from '../components/Topbar'
import Mainbar from '../components/Mainbar'
import Footer from '../components/Footer'
import cut1 from "../Images/process1/gantry.jpg"
import cut2 from "../Images/process1/setblock.png"
import cut3 from "../Images/process1/cutblockmachine.jpg"
import cut4 from "../Images/process1/sepblock.png"
import pol1 from "../Images/process2/polmachine.png"
import pol2 from "../Images/process2/polishing.jpg"
import pol3 from "../Images/process2/polslabs.jpg"

import "./style.css"


const Process = () => {
  return (
<>
<Topbar/>
<Mainbar/>
<div style={{width:'100%',height:'15%',backgroundColor:'whitesmoke'}} className='text-center'><h3 className='h3' style={{color:'brown',fontSize:'bold',fontFamily:'sans-serif'}}>PROCESS</h3></div>
<div className='container process my-5'>

  <h3 className='h3'>Process 1:-Cutting the block</h3>
  <p className='p'>Once the block has been shaped, it is then moved to the cutter machine. The width of the blades are adjusted as per specification. in our company we are using 3 types of block cutter machines</p>

<h5 className='h5'>Three types of block cutter machines are</h5>
<ul>
  <li className='li'>1.8 diameter blade cutter machine
In this we can cut maximum length upto 12ft, width upto 8ft and height upto 6ft</li>
<li className='li'>2.0 diameter blade cutter machine
In this we can cut maximum length upto 12ft, width upto 8ft and height upto 6ft</li>
<li className='li'>2.5 diameter blade cutter machine
In this we can cut maximum length upto 12ft, width upto 8ft and height upto 6ft</li>

</ul>


<div class="gallery-image">
    <div class="img-box">
      <img src={cut1} alt=''/>
      <div class="transparent-box">
        <div class="caption">
          <p>step1</p>
          <p class="opacity-low">KEEPING THE BLOCK IN TROLLY</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={cut2} alt=''/>
      <div class="transparent-box">
        <div class="caption">
          <p>step2</p>
          <p  class="opacity-low">SETTING THE BLOCK THICKNESS AS REQUIRED
          </p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src={cut3} alt=''/>
      <div class="transparent-box">
        <div class="caption">
          <p>step3</p>
          <p class="opacity-low">CUTTING THE BLOCK INTO SLABS</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src={cut4} alt=''/>
      <div class="transparent-box">
        <div class="caption">
          <p>step4</p>
          <p class="opacity-low">SEPARATING THE EACH SLABS USING HAND CUTTER MACHINE</p>
        </div>
      </div> 
    </div>
   
    </div>
 





<h3 className='h3'>Process 2:-Polishing the slabs</h3>
<p className='p'>In granite polishing we using 9-10 types of bricks.using these bricks we can get high quality polish and shining on the granite slabs</p>

<h5 className='h5'>Lists of polishing bricks</h5>

<ul>

  <li className='li'>metal polishing brick:-to remove the hardness of the granites.</li>
  <li className='li'>polishing bricks:- to give shining and polish to the slabs</li>

</ul>

<div class="gallery-image">
    <div class="img-box">
      <img src={pol1} alt=''/>
      <div class="transparent-box">
        <div class="caption">
          <p>step6</p>
          <p class="opacity-low">POLISHING MACHINE</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={pol2} alt=''/>
      <div class="transparent-box">
        <div class="caption">
          <p>step7</p>
          <p class="opacity-low">POLISHING THE SLABS</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src={pol3} alt=''/>
      <div class="transparent-box">
        <div class="caption">
          <p>step8</p>
          <p class="opacity-low">POLISHED SLABS</p>
        </div>
      </div>
    </div>

  </div>

  <div class="row">
    <h3 class="sub-heading"><b>GET TO KNOW MORE ABOUT US</b></h3><br/>
    <iframe src="https://www.youtube.com/embed/NzNiw1OOAzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{width:'600px', height:'300px'}}></iframe>
  </div>
  </div>

<Footer/>
</>
  )
}

export default Process