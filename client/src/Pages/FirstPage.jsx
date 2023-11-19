import React from 'react'
import logo from '../assets/AIM Logo 1.svg'


export default function FirstPage() {
  return (
    <>
     <div className="container-fluid">
        <div className='first-page-card m-auto bg-white p-5'>
            <div  className='d-flex align-items-center justify-content-center'>
            <img className='logo' src={logo} alt="" />
            </div>
<h1 className='h3 ps-2 mt-2' style={{borderLeft:"0.5rem solid grey"}}>
Generate Social Media Post Content Using Generative Al, publish to all Platforms while gaining Performance Analytics & Email Marketing tactics.
     </h1>

     <div className='text-center mt-5 '>
        <div className='login-heading'>New User ?</div>
        <button className='btn login-button px-3 py-1'>Sign up</button>
     </div>
     <div className='text-center mt-5' >
     <div className='login-heading'>Old User ?</div>
        <button className='btn login-button px-3 py-1'>Sign in</button>
     </div>
        </div>
     </div> 
    </>
  )
}
