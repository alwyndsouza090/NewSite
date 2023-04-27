import React from 'react'
import c1 from "../Images/g7.jpg"
import c2 from "../Images/g17.jpg"
import c3 from "../Images/g15.jpg"

const Carousel = () => {
  return (
    <div>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={c1} className="d-block vw-100 vh-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='h5'>First slide label</h5>
        <p className='p'>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c2} className="d-block vw-100 vh-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='h5'>Second slide label</h5>
        <p className='p'>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={c3} className="d-block vw-100 vh-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='h5'>Third slide label</h5>
        <p className='p'>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Carousel