import React, { useState } from 'react'

function Register() {

  return (
      <div className="contact section-bg py-5">
    <div className="container" data-aos="fade-up">
      <div className="section-title mt-5">
        <h2 className="mb-1">Ro'yxatdan O'tish</h2>
        <div className="row mt-5" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-lg-6 ">
            <img
              style={{ height: 300, marginRight: "40px !important" }}
              src={require("./../assets/img/doctor.png")}
              alt=""
            />
          </div>
          <div className="col-lg-6 h-auto align-self-end">
           <form className='register-form'>
            <input type="text" placeholder='Ful Name *'/>
            <input type="text" placeholder='Ful Name *'/>
            <input type="text" placeholder='Email *'/>
            <input type="text" placeholder='Password *'/>
            <input type="password" placeholder='Password *'/>
            <div className="col-12 mt-0 form-group">
                <p className="w-100 text-start">
                  hisobga kirish{" "}
                  <a href="/login">Kirish</a>
                </p>
              </div>
            <button>Ro'yxatdan O'tish</button>
           </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Register