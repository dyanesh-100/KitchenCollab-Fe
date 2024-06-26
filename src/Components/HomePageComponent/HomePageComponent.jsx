import React from 'react'
import './HomePageComponent.scss'
import img from "../../assets/images/butter-chicken.jpg"

const HomePageComponent = () => {
  return (
    <React.Fragment >
      <section className='homepage_container1'>
        <div className='left_coloumn1'>
            <p className='about_us'>What Are We About</p>
            <p className='about_us_content'>Kitchencollab is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now</p>
            <button className='btn'>Explore now</button>
        </div>
        
        <div className='right_coloumn1'> 
            <img className='custom-image' src={img} alt="" />
            <img className='custom-image' src={img} alt="" />
            <img className='custom-image' src={img} alt="" />
            <img className='custom-image' src={img} alt="" />
            <img className='custom-image' src={img} alt="" />
            <img className='custom-image' src={img} alt="" />
            <img className='custom-image' src={img} alt="" />
            <img className='custom-image' src={img} alt="" />
            <img className='custom-image' src={img} alt="" />
            
        </div>
      </section>
      <section className='homepage_container2'>
          <div className='left_coloumn2'>
              <img className='custom-image2' src={img} alt="" />
          </div>
          <div className='right_column2'>
              <p className='status'>Home page not yet completed</p>
          </div>
          
        </section>
      
    
    </React.Fragment>
  )
}

export default HomePageComponent