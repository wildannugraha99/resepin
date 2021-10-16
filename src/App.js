import { useState, useEffect } from "react";
import Homepage from "./Containers/Homepage";
import Foodspage from "./Containers/Foodspage";
import Cocktailspage from "./Containers/Cocktailspage";
import Aboutpage from "./Containers/Aboutpage";
import { HashRouter, Route } from "react-router-dom";
import {Spinner} from "reactstrap";
import '../src/assets/style/App.css'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
          <div className="loading-App">
            <Spinner children={false} className="loading-spinner"/>
            <h2>Please Wait...</h2>
          </div>
      ) 
      : 
      (
       <div className="homepage">
       <HashRouter>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/foodpage" exact>
            <Foodspage />
          </Route>

          <Route path="/cocktailspage" exact>
            <Cocktailspage />
          </Route>

          <Route path="/aboutpage" exact>
            <Aboutpage />
          </Route>
        </HashRouter>
       </div>
      )}
    </div>
  );
}

export default App;
