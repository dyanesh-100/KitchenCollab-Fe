import React from 'react'
import './FooterComponent.scss'

const FooterComponent = () =>{
    return(
        <div className='footer'>
            <div className='footer_container'>
                <div className='footer_section_title'>
                    <p>KitchenCollab.com</p>
                    <br />
                    <p>FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
                    <br />
                    <p>©2021 | All Rights Reserved</p>
                </div>
                <div className='footer_section_contact'>
                    <p>Contact Us</p>
                    <br />
                    <div className='footer_items'>
                        <p>KitchenCollab@gmail.com</p>
                        <p>+91 8825949713</p>
                        <p>Porur, Chennai</p>
                    </div>
                    
                </div>
                <div className='footer_section_social'>
                    <p>Socials</p>
                    <br />
                    <div className='footer_items'>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
            
        </div>
    )

}
export default FooterComponent
