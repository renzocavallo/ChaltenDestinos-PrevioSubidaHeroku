import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ServiciosPage from "./pages/ServiciosPage";
import GaleriaPage from "./pages/GaleriaPage";
import NovedadesPage from "./pages/NovedadesPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
  <Router>
  <Header/>
  <Nav/>
  <Switch>
  <Route path="/" exact component={HomePage}/>
  <Route path="/Nosotros" exact component={NosotrosPage}/>
  <Route path="/Servicios" exact component={ServiciosPage}/>
  <Route path="/Galeria" exact component={GaleriaPage}/>
  <Route path="/Novedades" exact component={NovedadesPage}/>
  <Route path="/Contacto" exact component={ContactoPage}/>
  </Switch>
  <Footer/>
  </Router> 
  );
}

export default App;
