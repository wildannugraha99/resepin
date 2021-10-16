import React from 'react'
import '../../assets/style/HomepageStyle/SubmitEmailComponent.css'
import {Input,Button,Container} from 'reactstrap'
import Swal from 'sweetalert2'

export default function SubmitEmailComponent() {

    function onClickAlert() { 
        Swal.fire({
            icon: 'success',
            title: 'Your email has submited',
            timer: 3000,
            timerProgressBar: true,
            confirmButtonColor:'#7C7B7B'
           
        })
     }
    
            
   
    return (
        <Container>
            <div className="submitComponent">
                <p className="titleSubmit">Submit For Updated Recipe!</p>
                <p className="subTitleSubmit">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                <div className="input">
                    <Input className="inputSubmit" placeholder="Enter Your Email." type="email"/>
                    <Button className="BtnSubmit" onClick={onClickAlert}>
                        Submit
                    </Button>
                </div>
            </div>
        </Container>
    )
}
