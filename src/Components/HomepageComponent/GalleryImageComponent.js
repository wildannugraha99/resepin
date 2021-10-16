import React from 'react'
import '../../assets/style/HomepageStyle/GalleryImageComponent.css'
import ImgFood1 from '../../assets/img/davide-cantelli-jpkfc5_d-DI-unsplash 1.png'
import ImgFood2 from '../../assets/img/casey-lee-awj7sRviVXo-unsplash 1.png'
import ImgFood3 from '../../assets/img/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash 1.png'
import ImgFood4 from '../../assets/img/casey-lee-awj7sRviVXo-unsplash 2.png'
import { Container } from 'reactstrap'



export default function GalleryImageComponent() {
    return (
       <Container>
            <div className='Gallery'>
             <div className="GalleryWrapper">
                <div className="imgCol1">
                    <img src={ImgFood1} alt="" />
                    <img src={ImgFood2} alt="" />
                    <img src={ImgFood3} alt="" />
                </div>
                        
                <div className="imgCol2">
                    <img src={ImgFood4} alt="" />
                </div>

            </div>
            
        </div>
       </Container>
           
       
    )
}
