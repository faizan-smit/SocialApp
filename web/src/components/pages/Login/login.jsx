import React from "react";
import { useRef } from "react";
import axios from "axios";
import './login.css';

let Login = ()=>{




    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    let loginHandler = (e)=>{

        e.preventDefault();


        axios.post('/api/v1/login', {

            email: emailRef.current.value,
            password: passwordRef.current.value,
        })
    
    
    }



    return(




        <>
        
        <div>


            <form className="login-form" onSubmit={loginHandler}>

                <input type="email" name="" id="email" ref={emailRef} placeholder="Email" required autoComplete="off" />
                <input type="password" name="" id="password" ref={passwordRef} placeholder="Password" required autoComplete="off" />
                <button type="submit">Login</button>



            </form>


        </div>
  
        
        </>


    );


};

export default Login