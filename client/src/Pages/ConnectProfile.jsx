import React, { useEffect } from 'react'
import SocialCard from '../Components/SocialCard'
import insta from '../assets/image 3.png'
import thread from '../assets/image 5.png'
import fb from '../assets/image 4.png'
import tw from '../assets/image 2.png'

import LinkedIn from '../assets/icons8-linkedin-48 1.png'



export default function ConnectProfile(props) {
    useEffect(()=>{
        props.setNavbarNum("1")
        props.setNavbarTitle("Connect Profiles")
    })
  return (
    <>
    <div className='container mt-5'>
     <div className='row'>
        <SocialCard image={insta} status={true}/>
        <SocialCard image={fb} status={true}/>
        <SocialCard image={tw} status={true}/>
        <SocialCard image={LinkedIn} status={true}/>
        <SocialCard image={thread} status={true}/>



        </div> 
        </div>
    </>
  )
}
