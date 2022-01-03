import React , { useState } from 'react'
import loginpic from '../images/login.jpg'
import {NavLink, useHistory} from 'react-router-dom'

const Login = () => {

    const history = useHistory();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
             method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
               email, password
            })
        });

        const data = await res.json();

        if(data.status === 400 || !data){
            window.alert("Invalid Credentials");
        }else{
            window.alert("Login Successful..!");

            history.push("/");
        }


    }

    return (
        <>
        <section className="shadow-lg w-75 p-3 mb-5 bg-white rounded container mt-5">
            <div className="container  mt-5 ps-3">
            
            <div className="row">

            <div className="col-4 mt-3 ">
                <img src={ loginpic } alt="Log IN" />
                <p className="mb-5 ms-5">Don't have an account?<NavLink to="/signup" style={{ textDecoration: 'none' }}>  Sign Up</NavLink></p>
            </div>

            <div className="col ps-5 ms-5">
               <h1 className="mb-5  text-center">Login</h1>
               <form method="POST">

                {/* Email */}
                <div class="input-group mb-4">
                    <div class="input-group-prepend ms-5">
                        <label htmlFor="email">
                            <i class="zmdi zmdi-email zmdi-hc-2x"></i> 
                        </label>
                    </div>
                    <div className="col-sm-8 ms-4">
                        <input type="email" name="email" id="email" class="form-control" placeholder="Your Email" autoComplete="off" 
                         value={email} onChange={(e) => setEmail(e.target.value)} required={true}  />
                    </div>
                </div>

                {/* Password */}
                <div class="input-group mb-4">
                    <div class="input-group-prepend ms-5">
                        <label htmlFor="password">
                            <i class="zmdi zmdi-lock zmdi-hc-2x"></i> 
                        </label>
                    </div>
                    <div className="col-sm-8 ms-4">
                        <input type="password" name="password" id="password" class="form-control" placeholder="Your Password" autoComplete="off"
                       value={password} onChange={(e) => setPassword(e.target.value)} required={true}    />
                    </div>
                </div>

                
               <button type="submit" onClick={loginUser} name="login" id="login" className="btn btn-primary btn-lg mb-3 mt-4 ms-5" > Login</button>

                <p className="mb-5 ms-5">Forgot password?<NavLink to="/changepass" style={{ textDecoration: 'none' }}> Reset Password</NavLink></p>
           
            </form>
            </div>
            </div>
            </div>
           </section>
           
        </>
    )
}

export default Login
