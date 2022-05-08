import React from "react";
import "../styles/components/pages/ServiciosPage.css";

const ServiciosPage = (props) =>{
    return(
    <main className="holder">
    <div className="servicios">
    <h2>Servicios</h2>
    <div className="servicio">
    <img src="images/servicios/imgAeropuerto.jpg" alt="Aeropuerto"/>
    <div className="info">
    <h4>Reserva de Vuelos</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Eveniet sequi a, nihil, quibusdam, quis dicta veniam cumque quae aut ad modi. 
    Laudantium natus cupiditate et reprehenderit deleniti repellendus.
    </p>
    </div>
    </div>
    <div className="servicio">
    <img src="images/servicios/imgTraslados.jpg" alt="Trafic"/>
    <div className="info">
    <h4>Servicio de Traslados</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Eveniet sequi a, nihil, quibusdam, quis dicta veniam cumque quae aut ad modi. 
    Laudantium natus cupiditate et reprehenderit deleniti repellendus.
    </p>
    </div>
    </div>
    <div className="servicio">
    <img src="images/servicios/imgExcursion.jpg" alt="Excursion Glaciar"/>
    <div className="info">
    <h4>Excursiones</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Eveniet sequi a, nihil, quibusdam, quis dicta veniam cumque quae aut ad modi. 
    Laudantium natus cupiditate et reprehenderit deleniti repellendus.
    </p>
    </div>
    </div>
    <div className="servicio">
    <img src="images/servicios/imgServicio2.jpg" alt="Museo"/>
    <div className="info">
    <h4>Visita Lugares Historicos</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Eveniet sequi a, nihil, quibusdam, quis dicta veniam cumque quae aut ad modi. 
    Laudantium natus cupiditate et reprehenderit deleniti repellendus.
    </p>
    </div>
    </div>
    </div>
    </main>
    );
}

export default ServiciosPage;