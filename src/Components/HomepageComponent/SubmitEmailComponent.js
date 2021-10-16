import React, { useState } from 'react';
import '../../assets/style/HomepageStyle/SubmitEmailComponent.css'
import {Input,Button,Container} from 'reactstrap'
import Swal from 'sweetalert2'

export default function SubmitEmailComponent() {

    let [Search, setSearch] = useState('');

     function search(event) {
        setSearch(Search = event.target.value )
    }
   
    function onClickAlert(event) {
        event.preventDefault() 
        const inpValue = Search
        if( inpValue !== ''){
            Swal.fire({
                icon: 'success',
                title: 'Your email has submited',
                timer: 3000,
                timerProgressBar: true,
                confirmButtonColor:'#7C7B7B'
            })
        }else{
            Swal.fire({
                icon: 'warning',
                title: 'Please insert your email',
                timer: 3000,
                timerProgressBar: true,
                confirmButtonColor:'#7C7B7B'
            })
        }
     }
    
            
   
    return (
        <Container>
            <div className="submitComponent">
                <p className="titleSubmit">Submit For Updated Recipe!</p>
                <p className="subTitleSubmit">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                <div>
                   <form onSubmit={onClickAlert} className="input">
                   <Input className="inputSubmit" 
                    placeholder="Enter Your Email." 
                    type="email"
                    value = {Search}
                    onChange={search}
                    />
                    <Button className="BtnSubmit">
                        Submit
                    </Button>
                   </form>
                </div>
            </div>
        </Container>
    )
}
