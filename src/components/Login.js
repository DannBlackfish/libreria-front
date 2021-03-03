import React, {useState} from 'react'
import axios from 'axios'

export default function Login() {

    const [newLogin, setNewLogin] = useState({
        email:"",
        password:""
    })

    const handleChange= (e) =>{
        e.preventDefault()
        setNewLogin({
            ...newLogin,
            [e.target.name]: e.target.value
        })
        console.log(newLogin)
        
    }

    const sendLogin= async() => {  
        const postLogin= await axios.post("http://localhost:3001/login", newLogin)
        setNewLogin({
            ...newLogin,
            email:"",
            password:""
        })
    }



    return (
        <div>
             <form onSubmit= {() => sendLogin()}>
                <input type="email" name="email" placeholder="nombre@email.com" onChange={(e)=> handleChange(e)}/>
                    Email:
                

                <input type="password" name="password" placeholder="****" onChange={(e)=> handleChange(e)}/>
                    Contraseña:
               

                <button type="submit">Signup</button>
            </form>
        </div>
    )
}
