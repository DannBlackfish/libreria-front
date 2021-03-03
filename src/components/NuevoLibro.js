import React, { useState } from 'react'
import axios from 'axios'

export default function NuevoLibro() {

    const [nuevoLibro, setNuevoLibro] = useState({
        titulo:"",
        paginas: 0,
        descripcion: "",
        author: ""
    })

    const handleChange= (e) =>{
        e.preventDefault()
        setNuevoLibro({
            ...nuevoLibro,
            [e.target.name]: e.target.value
        })        
    }

    const sendNewBook= async() => {
        console.log(nuevoLibro)
        const uploadBook= await axios.post("http://localhost:3001/libros/nuevos", nuevoLibro)
        setNuevoLibro({
            ...nuevoLibro,
            titulo:"",
            paginas: 0,
            descripcion: "",
            author: ""
        })
    }

    return (
        <div>
            <form onSubmit= {() => sendNewBook()}>
            <input type="text" name="titulo" placeholder="titulo del libro" onChange={(e)=> handleChange(e)}/>
                    Titulo:
            <input type="number" name="paginas"  onChange={(e)=> handleChange(e)}/>
                    Num de paginas: 
            <input type="text" name="descripcion" placeholder="titulo del libro" onChange={(e)=> handleChange(e)}/>
                    Descripción:     
            <input type="text" name="author" placeholder="titulo del libro" onChange={(e)=> handleChange(e)}/>
                    Autor:    
                    <button type="submit">Crear libro</button>
            </form>
        </div>
    )
}
