import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Libros() {

    const [listaLibros, setlistaLibros] = useState([])

    useEffect(()=> {
        const getLibros= async () => {
            const respuestaServidor= await axios.get("http://localhost:3001/libros")
            console.log(respuestaServidor)
            setlistaLibros(respuestaServidor.data)
            console.log(listaLibros)
        }
        getLibros()
    },[])


    return (
        <div>
            {listaLibros.map((e)=> {
                return(
                <p>{e.titulo}</p>
                )
            })}
        </div>
    )
}
