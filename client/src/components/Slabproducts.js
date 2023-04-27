import React from 'react'
import "./Slabproducts.css"
import s1 from "../Images/slabs/ABSOLUTE BLACK.png"
import s2 from "../Images/slabs/Belman Beauty.png"
import s3 from "../Images/slabs/Jet Black.jpg"
import s4 from "../Images/slabs/Viscount Silver.png"
import s5 from "../Images/slabs/Zubrana Coorg.png"
import { NavLink } from 'react-router-dom'

const Slabproducts = () => {
  return (
	<div className='container my-5'>
    <div className='row'>
   <div class="image-block col-2 m-1">
	<h3>ABSOLUTE BLACK</h3>
	<img src={s1} alt="" />
	<caption>
	<i class="fa-solid fa-chevron-up"></i>
<p>To See More Details about Absolute Black slab</p>
<NavLink to="/Products/AbsoluteBlack" className="slabnav">more details</NavLink>
	</caption>
</div>
<div class="image-block col-2 m-1">
	<h3>BELMAN BEAUTY</h3>
	<img src={s2} alt="" />
	<caption>
	<i class="fa-solid fa-chevron-up"></i>
<p>To See More Details about Belman Beauty slab</p>	
<NavLink to="/Products/BelmanBeauty" className="slabnav">more details</NavLink>
	</caption>
</div>
<div class="image-block col-2 m-1">
	<h3>JET BLACK</h3>
	<img src={s3} alt="" />
	<caption>
	<i class="fa-solid fa-chevron-up"></i>
<p>To See More Details about Jet Black slab</p>
<NavLink to="/Products/JetBlack" className="slabnav">more details</NavLink>
	</caption>
</div>
<div class="image-block col-2 m-1">
	<h3>VISCOUNT SILVER</h3>
	<img src={s4} alt="" />
	<caption>
	<i class="fa-solid fa-chevron-up"></i>
<p>To See More Details about Viscount Silver slab</p>
<NavLink to="/Products/ViscountSilver" className="slabnav">more details</NavLink>
	</caption>
</div>
<div class="image-block col-2 m-1">
	<h3>ZUBRANA COORG</h3>
	<img src={s5} alt="" />
	<caption>
	<i class="fa-solid fa-chevron-up"></i>
<p>To See More Details about Zubrana Coorg slab</p>
<NavLink to="/Products/ZubranaCoorg" className="slabnav">more details</NavLink>
	</caption>
</div>
  </div>
  </div>
  )
}
export default Slabproducts