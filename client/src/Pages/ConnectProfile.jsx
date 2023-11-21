import React, { useEffect } from "react";
import SocialCard from "../Components/SocialCard";
import insta from "../assets/image 3.png";
import thread from "../assets/image 5.png";
import fb from "../assets/image 4.png";
import tw from "../assets/image 2.png";
import LinkedIn from "../assets/icons8-linkedin-48 1.png";

export default function ConnectProfile(props) {
    useEffect(() => {
        props.setNavbarNum("1");
        props.setNavbarTitle("Connect Profiles");
    });
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <SocialCard image={insta} name={'instagram'} status={false} />
                    <SocialCard image={fb} name={'facebook'} status={false} />
                    <SocialCard image={tw} status={false} />
                    <SocialCard image={LinkedIn} status={false} />
                    <SocialCard image={thread} status={false} />
                </div>
            </div>
        </>
    );
}
