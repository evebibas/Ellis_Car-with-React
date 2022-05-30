import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/dashboard";
import Gestionendirect from "./components/Gestionendirect/gestionendirect";
import "./components/Loading/loading.css";
import './components/Login/login.css';
import Navbar from "./components/Navbar/navbar";
import Suivivehicule from "./components/Suivivehicule/suivivehicule";
import Trafic from "./components/Trafic/trafic";



// function App() {
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {

//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);

//   }, [])
class App extends Component {
  render() {
    return (
      <div classNamename="App" >
        {
          // loading == true ? (
          //   <Loading />
          // ) : (

          <React.Fragment>
            <Navbar />
            <main className="container">
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/gestionendirect" component={Gestionendirect} />
                <Route path="/suivivehicule" component={Suivivehicule} />
                <Route path="/trafic" component={Trafic} />
                <Route path="/coutdusage" component={Coutdusage} />
                <Route path="/repartition" component={Repartition} />
                <Route path="/usagevehicules" component={Usagevehicules} />
                <Route path="/utilisationflotte" component={Utilisationflotte} />
                <Route path="/conducteur" component={Conducteur} />

              </Switch>

            </main>
            {/* <home /> */}
          </React.Fragment>

        }
      </div>
    );
  }
}

export default App;

