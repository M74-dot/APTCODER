import React from 'react'
import contactpic from '../images/contact-img.png'


const Contact = () => {
    return (
        <>
            <section className="shadow-lg w-100 p-3 mb-5 bg-white rounded ">
            <div className="container">
            <div className="row">
            <div className="col-sm-6">
               <h1 className="mt-5 pt-5" style={{ fontWeight: 'bold' , fontSize: '43px'}}>Ready to level up?</h1>
               <h1 className="mb-3" style={{ color: 'red', fontWeight: 'bold' , fontSize: '43px'}}>Contact Us!</h1>
               
               <div className="mb-5" style={{fontStyle: 'normal' , fontSize: '18px', color:'#484848', lineHeight: '35px'}}>A team of dedicated, resourceful, and goal-driven professional educators with solid 
               commitments to the social and academic growth of every child.</div>
               <form>
                
                {/* Message */}
                <div className="form-group mb-4">
                    <textarea className="form-control" id="textarea" name="textarea" rows="8" placeholder="Your Message" required={true} ></textarea>
                </div>

                {/* Name & Phone Number*/}
                <div className="form-group input-group mb-4 d-flex justify-content-between align-items-between">
                    <div className="col">
                        <input type="text" name="name" id="name" class="form-control" placeholder=" Your Name" autoComplete="off" required={true} />
                    </div>

                    <div className="col ms-1">
                        <input type="number" name="phone" id="phone" class="form-control" placeholder=" Your Phone Number (Optional)"  />
                    </div>
                </div>

                {/* Email */}
                <div class="input-group mb-4">
                    <div className="col ">
                        <input type="email" name="email" id="email" class="form-control" placeholder="Your Email" autoComplete="off" required={true}   />
                    </div>
                </div>
            
                {/* Send Message */}
               <button type="submit" name="send" id="send" className="btn btn-primary btn-lg mb-5 mt-3">Send Message</button>

            </form>
            </div>
            <div className="col-sm-6 ">
                <img src={ contactpic } alt="Student" width="120%"/>
             </div>
            </div>
            </div>
           </section>
        </>
    )
}

export default Contact
