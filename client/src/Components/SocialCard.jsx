import React, { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";  
import InstagramLogin from "react-instagram-oauth";

export default function SocialCard(props) {
    const [isConnected, setIsConnected] = useState(props.status);

    const authHandler = (err, data) => {
        console.log(err, data);
    };

    const responseFacebook = (response) => {
        setIsConnected(true);
        console.log(response);
    };

    const disconnectButtonHandler = () => {
        FB.logout((response) => {
            setIsConnected(false);
        });
    };

    return (
        <>
            <div className="col-sm-4">
                <div
                    style={{
                        backgroundColor: "white",
                        borderRadius: "0.75rem",
                    }}
                    className="p-3 mx-1 my-3 card text-center shadow "
                >
                    <img
                        src={props.image}
                        alt=""
                        className="img w-50 m-auto social-image my-2"
                    />
                    <p
                        className="my-3"
                        style={{ color: "black", fontWeight: "700" }}
                    >
                        Status : {isConnected ? "Connected" : "Not Connected"}
                    </p>
                    {!isConnected && props.name === "facebook" && (
                        <FacebookLogin
                            appId="1446898629224226"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            render={(renderProps) => (
                                <button
                                    onClick={renderProps.onClick}
                                    className="btn btn-success text-center px-3 py-2 my-2"
                                    style={{ letterSpacing: "0.8px" }}
                                >
                                    <b>Connect</b>
                                </button>
                            )}
                        />
                    )}

                    {!isConnected && props.name === "instagram" && (
                        <InstagramLogin
                            authCallback={authHandler}
                            appId={"1446898629224226"}
                            appSecret={"868eb53882a03482cdd5ae863fa5b71c"}
                            redirectUri={"http://localhost:5173/"}
                        />
                    )}
                    {isConnected && (
                        <button
                            onClick={disconnectButtonHandler}
                            className="btn btn-danger text-center px-3 py-2 my-2"
                            style={{ letterSpacing: "0.8px" }}
                        >
                            <b>Disconnect</b>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
