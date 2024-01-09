import React, { useState } from "react";
import { agregarComentario } from "./apiMethod"

const AgregarComentario = (props) => {

    const [comentario, setComentario] = useState([]);

    const handleOnchange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setComentario({ ...comentario, [name]: value })

    }

    const handlePublicar = async (event) => {
        event.preventDefault();

        const newComentario = {
            contenido: comentario.contenido,
            usuario: "PESCADOR",
            publicacionId: props.id
        };

        await agregarComentario(newComentario);/*api*/

        props.nuevoComentario(); /*actualizo estado componente padre para refrezcar el componente*/

        setComentario(" ") /*inicializo nuevamente*/

    }

    return (
        <>
            <div className="input-group mb-2">
                <input type="text" className="form-control" placeholder="Añadir comentario" aria-label="Recipient's username" aria-describedby="button-addon2" name="contenido" value={comentario.contenido || ''} onChange={handleOnchange} ></input>
                <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={handlePublicar}><font color="#00008B" face="Comic Sans MS">Comentar</font></button>
            </div>
        </>

    )

}

export default AgregarComentario;