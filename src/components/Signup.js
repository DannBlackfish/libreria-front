import React, { useState } from 'react'
import axios from 'axios'

export default function Signup() {

    const [infoSignup, setInfoSignup] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleChange= (e) =>{
        e.preventDefault()
        setInfoSignup({
            ...infoSignup,
            [e.target.name]: e.target.value
        })
        console.log(infoSignup)
        
    }

    const sendNewUser= async() => {
        console.log(infoSignup)
        const uploadUser= await axios.post("http://localhost:3001/signup", infoSignup)
        console.log("ayuuuda")
        setInfoSignup({
            ...infoSignup,
            name:"",
            email:"",
            password:""
        })
    }

    return (
        <div>
            <form onSubmit= {() => sendNewUser()}>
                <input type="text" name="name" placeholder="tu Nombre" onChange={(e)=> handleChange(e)}/>
                    Nombre:
        

                <input type="email" name="email" placeholder="nombre@email.com" onChange={(e)=> handleChange(e)}/>
                    Email:
                

                <input type="password" name="password" placeholder="****" onChange={(e)=> handleChange(e)}/>
                    Contraseña:
               

                <button type="submit">Signup</button>
            </form>
            
        </div>
    )
}
