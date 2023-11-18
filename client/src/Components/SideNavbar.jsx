import React, { useEffect, useState } from 'react'
import logo from '../assets/AIM Logo 1.svg'
import arrow from '../assets/Shape.svg'
import image1 from '../assets/content_3832214 1.png'
import image2 from '../assets/image 1.png'
import image3 from '../assets/image 11.png'
import {Link} from 'react-router-dom'


export default function SideNavbar(props) {
    let [navbarToggle, setNavbarToggle] = useState(true)


    const handleClick = () => {
        if (navbarToggle) {
            props.setCheck(false)
            setNavbarToggle(false)
        } else {
            setNavbarToggle(true)
            props.setCheck(true)

        }
        console.log("hello")
    }

    //     useEffect(()=>{
    // var menu_btn = document.querySelector("#menu-btn");
    // var sidebar = document.querySelector("#sidebar");
    // var container = document.querySelector(".my-container");
    // menu_btn.addEventListener("click", () => {
    //   sidebar.classList.toggle("active-nav");
    //   container.classList.toggle("active-cont");
    // });

    // })
    return (
        <>





            <div className={`side-navbar ${(navbarToggle) ? "active-nav" : ""} d-flex justify-content-between flex-wrap flex-column`} style={{ zIndex: 1000 }} id="sidebar">
                <ul className="nav flex-column text-white w-100">
                    <Link to="/" className="nav-link1 h3 my-2 text-center">
                        <img src={logo} alt="" />
                    </Link>
                    <li href="#" className="nav-link m-2">
                        <Link to="/" style={{textDecoration:"none",color:"#202020"}}>
                        {/* <i className="bx bxs-dashboard"></i> */}
                        <img src={image3} alt="" />
                        <span className="mx-2"> Connect Profiles</span>
                        {navbarToggle && <img src={arrow} alt="" style={{ float: "right" }} />}
                        </Link>
                    </li>
                    <li href="#" className="nav-link m-2">
                        {/* <i className="bx bx-user-check"></i> */}
                        <Link to="/content" style={{textDecoration:"none",color:"#202020"}}>
                        <img src={image1} alt="" />
                        <span className="mx-2">Generate Content</span>
                        {navbarToggle && <img src={arrow} alt="" style={{ float: "right" }} />}
                        </Link>

                    </li>
                    <li href="#" className="nav-link m-2">
                    <Link to="/performance" style={{textDecoration:"none",color:"#202020"}}>
                        
                        <img src={image3} alt="" />
                        {/* <i className="bx bx-conversation"></i> */}
                        <span className="mx-2">Post's Performance</span>
                        {navbarToggle && <img src={arrow} alt="" style={{ float: "right" }} />}
                    </Link>
                    </li>
                </ul>

                <span href="#" className="text-center h4 w-100 mb-5">

                    <button className='btn btn-danger text-center px-3 py-2' style={{ letterSpacing: "0.8px" }} ><b>Logout</b></button>
                </span>
            </div>


            <div className={`p-1 my-container ${(navbarToggle) ? "active-cont" : ""}`}>

                <nav className="navbar top-navbar navbar-light fixed-top bg-white px-3" style={{ zIndex: 100 ,height:"80px"}}>
                    <span className='nav-title'>
                        <img src={logo} className='img' style={{ height: '50px' }} alt="" />
                        <span className={`${(navbarToggle) ? "active-cont" : ""} my-container my-3`}>
                            <span className='h2 px-3 py-1 me-2' style={{ border: "0.2rem solid black", borderRadius: "50%", aspectRatio: "1/1" }}>{props.NavNumber}</span>
                            <span className='h2 hide-at-small'>{props.NavTitle}</span>
                        </span>
                    </span>
                    <a className="btn border-0" onClick={handleClick} style={{ float: "right", zIndex: '100' }} id="menu-btn"><i className="bx bx-menu h1"></i></a>
                </nav>
                {/* <a className="btn border-0" onClick={handleClick} style={{float:"right",zIndex:'100'}} id="menu-btn"><i className="bx bx-menu"></i></a> */}


            </div>


        </>
    )
}
