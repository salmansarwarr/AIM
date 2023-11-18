import React from 'react'

export default function SocialCard(props) {
  return (
    <>
    <div className='col-sm-4'>
     <div style={{backgroundColor:"white",borderRadius:"0.75rem"}} className='p-3 mx-1 my-3 card text-center shadow '>
        
<img src={props.image} alt="" className='img w-50 m-auto social-image my-2'  srcset="" />
<p className='my-3' style={{color:"black",fontWeight:'700'}}>Status : Connected</p>
{!props.status && <button className='btn btn-success text-center px-3 py-2 my-2' style={{letterSpacing:"0.8px"}} ><b>Connect</b></button>}
{props.status && <button className='btn btn-danger text-center px-3 py-2 my-2' style={{letterSpacing:"0.8px"}} ><b>Disconnect</b></button>}
</div>


    </div> 
    </>
  )
}
