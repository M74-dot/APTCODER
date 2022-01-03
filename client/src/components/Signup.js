import React, {useState} from 'react'
import signupimg from '../images/signup.jpg'
import {NavLink, useHistory} from 'react-router-dom'

const Signup = () => {

    const history = useHistory();
    
    // useState
    const [user , setUser] = useState({
        name:"", email:"", phone:"", work:"", password:"", cpassword:""
    });

    let name,value;

    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value})
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email, phone, work, password, cpassword} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })
        });

        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("Invalid Registration");
        }else{
            window.alert("Registration Successful..!");

            history.push("/login");
        }

    }

    return (
        <>
           <section className="shadow-lg w-75 p-3 mb-5 bg-white rounded container mt-5">
            <div className="container  mt-5 ps-5">
            <div className="row">
            <div className="col ps-5">
               <h1 className="mb-5  text-center">Sign UP</h1>
               <form method="POST" autoComplete="off">

                {/* Name */}
                <div className="form-group input-group mb-4">
                    <div class="input-group-prepend  me-4">
                        <label htmlFor="name">
                            <i class="zmdi zmdi-account zmdi-hc-2x"></i> 
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" name="name" id="name" class="form-control" placeholder=" Your Full Name" autoComplete="off" 
                        value={user.name} onChange={handleInputs} required={true} />
                    </div>
                </div>

                {/* Email */}
                <div class="input-group mb-4">
                    <div class="input-group-prepend me-4">
                        <label htmlFor="email">
                            <i class="zmdi zmdi-email zmdi-hc-2x"></i> 
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input type="email" name="email" id="email" class="form-control" placeholder="Your Email" autoComplete="off"
                        value={user.email} onChange={handleInputs} required={true}   />
                    </div>
                </div>

                {/* Phone */}
                <div class="input-group mb-4">
                    <div class="input-group-prepend me-4">
                        <label htmlFor="phone">
                            <i class="zmdi zmdi-phone-in-talk zmdi-hc-2x"></i> 
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input type="number" name="phone" id="phone" class="form-control" placeholder="Your Phone Number" autoComplete="off"
                        value={user.phone} onChange={handleInputs} required={true}   />
                    </div>
                </div>

                {/* Profession */}
                <div class="input-group mb-4">
                    <div class="input-group-prepend me-4">
                        <label htmlFor="work">
                            <i class="zmdi zmdi-slideshow zmdi-hc-2x"></i> 
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input type="text" name="work" id="work" class="form-control" placeholder="Your Profession" autoComplete="off"
                        value={user.work} onChange={handleInputs} required={true}   />
                    </div>
                </div>

                {/* Password */}
                <div class="input-group mb-4">
                    <div class="input-group-prepend me-4">
                        <label htmlFor="password">
                            <i class="zmdi zmdi-lock zmdi-hc-2x"></i> 
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input type="password" name="password" id="password" class="form-control" placeholder="Your Password" autoComplete="off"
                        value={user.password} onChange={handleInputs}  required={true}  />
                    </div>
                </div>

                {/* Confirm Password */}
                <div class="input-group mb-4">
                    <div class="input-group-prepend me-4">
                        <label htmlFor="cpassword">
                            <i class="zmdi zmdi-lock zmdi-hc-2x"></i> 
                        </label>
                    </div>
                    <div className="col-sm-10">
                        <input type="password" name="cpassword" id="cpassword" class="form-control" placeholder="Confirm Password" autoComplete="off"
                        value={user.cpassword} onChange={handleInputs}  required={true}  />
                    </div>
                </div>

               <button type="submit" name="signup" id="signup" onClick={PostData} className="btn btn-primary btn-lg mb-5 mt-4 ms-5">Register</button>

            </form>
            </div>
            <div className="col-4 mt-5 pt-5 ps-5 pe-5 ">
                <img src={ signupimg } alt="Sign UP" />
                <p>Already have an account? <NavLink to="/login" style={{ textDecoration: 'none' }}>Login</NavLink></p>
            </div>
            </div>
            </div>
           </section>
        </>
    )
}

export default Signup
