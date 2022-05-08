import React from "react";
import "../styles/components/pages/GaleriaPage.css";

const GaleriaPage = (props) =>{
    return(
        <main className="holder"> 
        <div className="contenedor">
        <h2>Galeria</h2>
        <div className="galeria">
        <ul>
        <li className="foto">
        <img src="images/galeria/img01.jpg" alt="img01"/>
        </li>
        <li className="foto">
        <img src="images/galeria/img02.jpg" alt="img02"/>
        </li>
        <li className="foto">
        <img src="images/galeria/img03.jpg" alt="img03"/>
        </li>
        <li className="foto">
        <img src="images/galeria/img04.jpg" alt="img04"/>
        </li>
        <li className="foto">
        <img src="images/galeria/img05.jpg" alt="img05"/>
        </li>
        <li className="foto"> 
        <img src="images/galeria/img06.jpg" alt="img06"/>
        </li>
        <li className="foto">
        <img src="images/galeria/img07.jpg" alt="img07"/>
        </li>
        </ul>
        </div>
        </div>   
        </main>
    );
}

export default GaleriaPage;