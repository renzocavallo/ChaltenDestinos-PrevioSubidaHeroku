import React from 'react';
import '../../styles/components/novedades/NovedadItem.css'

const NovedadItem = (props) =>{
    const{title, subtitle, imagen, body } = props;

    return (
        <div className="novedades">
        <h2 className="titulo">{title}</h2>
        <h4 className="subtitulo">{subtitle}</h4>
        <img className="imagen" src={imagen}/>
        <div className="cuerpo" dangerouslySetInnerHTML={{ __html: body }}/>
        <hr/>
        </div>
    )
}

export default NovedadItem;