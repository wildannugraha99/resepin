import React from 'react'
import '../../assets/style/HomepageStyle/BrosurComponent.css'
import gambarBrosur1 from '../../assets/img/my1mDMraGf0.png'
import gambarBrosur2 from '../../assets/img/DdglEoIC2y4.png'
import { Container } from 'reactstrap'

export default function BrosurComponent(props) {
    return (
       <Container>
          <div className="brosurWrapper">
            <div className="brosur-1">
              <div className="brosurText">
                  <p className="brosurTitle">Make Your Food Together With Your Special Person</p>
                  <p className="brosurTeks-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut 
                  aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus 
                  dolor purus non enim praesent elementum facilisis leo, vel</p>
                  <p className="brosurTeks-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                      purus sit amet luctus venenatis</p>
              </div>
              <img src={gambarBrosur1} alt="" className="imgBrosur"/>
            </div>

            <div className="brosur-2">
            <img src={gambarBrosur2} alt="" className="imgBrosur"/>
              <div className="brosurText">
                  <p className="brosurTitle">Be Like The Professional Chef For Your Family</p>
                  <p className="brosurTeks-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut 
                  aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus.</p>
                  <p className="brosurTeks-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
              </div>
            </div>
        </div>
       </Container>
    )
}
