import React , {useState} from "react";
import axios from "axios";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (props) =>{

    const intialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(intialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        const response =  await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if(response.data.error === false){
            setFormData(intialForm);
        } 
    }

    return(
    <main className="holder">
    <div className="columna left">
    <h2>Contacto Rápido</h2>
    <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
    <p>
    <label>Nombre</label>
    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
    </p>
    <p>
    <label>Email</label>
    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
    </p>
    <p>
    <label>Teléfono</label>
    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
    </p>
    <p>
    <label>Comentario</label>
    <textarea id="comentario" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
    </p>
    <p className="acciones">
    <input type="submit" value="Enviar"/>
    </p>
    </form>
    {sending ? <p>Enviando...</p> : null}
    {msg ? <p>{msg}</p> : null}
    </div>
    <div className="columna right">
    <h2>Otras vias de contacto</h2>
    <p>Tambien se pueden comunicar con nosotros ... </p>
    <ul>
    <li>Teléfono: +54-342000001</li>
    <li>Email: contacto@chaltendestinos.com.ar</li>
    </ul>
    <div className="icono" id="whatsapp">
    <i className="fab fa-whatsapp"></i>
    </div>
    <div className="icono" id="telegram">
    <i className="fab fa-telegram"></i>
    </div>
    </div>
    </main>
    );
}

export default ContactoPage;