import React, { useState } from 'react'
import axios from 'axios';
//Axios is a powerful and flexible library that simplifies
// the process of making HTTP requests in JavaScript applications.
import { useNavigate,Link } from 'react-router-dom'
const Mechaniclogin = () => {

    const[email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    async function submit (e){

        e.preventDefault();

        try{

            await axios.post("mongodb+srv://shrutigarg749:<tiJsT7pltNcE9Nip>@cluster0.f0h3eyd.mongodb.net/test",{
                email,password
            })
        }

        catch(e){
                
            console.log(e);
        }
    }
  return (
    <div>
        <form action='POST'>
            <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Email'></input>
            
            <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'></input>

            <input type='submit'>Submit</input>
        </form>

        <br/>
        <p>OR</p>
        <br/>
        <Link to='/MechanicForm/Mechanicform'>SignUp Page😍
            </Link>
    </div>
  )
}

export default Mechaniclogin