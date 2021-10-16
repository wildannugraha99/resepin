import React from 'react';
import { Link } from "react-router-dom";
import '../../assets/style/HomepageStyle/JumbotronComponent.css'
import { 
  Jumbotron, 
  Button,
} from 'reactstrap';
  
const JumbotronComponent = () => {

  return (
    <div>
       <Jumbotron className="Jumbotron">
            <h1 className="h1Jumbotron">RESEP’IN</h1>
            <p className="leadJumbotron">RESEP’IN is a website where users can search for various kinds <br/> of recipes from various countries & various cooking <br/>ingredients.</p>
           
            <Link to={"/foodpage"}>
              <Button className="ButtonJumbotron" >
                Let's Cook!
              </Button>
            </Link>
            
        </Jumbotron>
      
    </div>
  );
};



export default JumbotronComponent;