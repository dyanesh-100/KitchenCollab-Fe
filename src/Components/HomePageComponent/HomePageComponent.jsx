import React from 'react'
import './HomePageComponent.scss'
import img1 from "../../assets/images/img_1.jpg"
import img2 from "../../assets/images/img_2.jpg"
import img3 from "../../assets/images/img_3.jpg"
import img4 from "../../assets/images/img_4.jpg"
import img5 from "../../assets/images/img_5.jpg"
import img6 from "../../assets/images/img_6.jpg"
import img7 from "../../assets/images/img_7.jpg"
import img8 from "../../assets/images/img_8.jpg"
import img9 from "../../assets/images/img_9.jpg"
import img10 from "../../assets/images/img_10.jpg"
import { Link, useNavigate } from 'react-router-dom'


const HomePageComponent = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate('/recipes')
  }
  return (
    <React.Fragment >
      <section className='homepage_container1'>
        <div className='left_coloumn1'>
            <p className='about_us'>What Are We About</p>
            <p className='about_us_content'>Kitchencollab is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now</p>
            
            
            <button className='btn' onClick={handleClick}>
              Explore now
            </button>
        </div>
        
        <div className='right_coloumn1'> 
            <img className='custom-image' src={img1} alt="" />
            <img className='custom-image' src={img2} alt="" />
            <img className='custom-image' src={img3} alt="" />
            <img className='custom-image' src={img4} alt="" />
            <img className='custom-image' src={img5} alt="" />
            <img className='custom-image' src={img6} alt="" />
            <img className='custom-image' src={img7} alt="" />
            <img className='custom-image' src={img8} alt="" />
            <img className='custom-image' src={img9} alt="" />
            
        </div>
      </section>
      <section className='homepage_container2'>
          <div className='left_coloumn2'>
              <img className='custom-image2' src={img10} alt="" />
          </div>
          <div className='right_column2'>
              <h1 className='skill_heading'>Improve Your culinary Skills</h1>
              
            <div className='skill_item_container'>
              <div className='skill_container'>
                <div className='vertical_line'></div>
                <p className='skill_item'>Learn new recipes</p>
              </div>
              <div className='skill_container'>
                <div className='vertical_line'></div>
                <p className='skill_item'>Experiment with food</p>
              </div>
              <div className='skill_container'>
                <div className='vertical_line'></div>
                <p className='skill_item'>Get cooking tips</p>
              </div>
              
              <div className='skill_container'>
                <div className='vertical_line'></div>
                <p className='skill_item'>Know nutrition facts</p>
              </div>
              <div className='skill_container'>
                <div className='vertical_line'></div>
                <p className='skill_item'>Get ranked</p>
              </div>
              <div className='skill_container'>
                <div className='vertical_line'></div>
                <p className='skill_item'>Write your own recipes</p>
              </div>
              
            </div>
              
              <button className='btn signup'>SIGNUP NOW</button>
          </div>
          
        </section>
      
    
    </React.Fragment>
  )
}

export default HomePageComponent