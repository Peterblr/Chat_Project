import React from "react";
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import { auth } from '../components/firebase';
import firebase from "firebase/app";

const Login = () => {
    return (        
        <div id="login-page">
            <h2>
                Training Project
            </h2>
            <div id="login-card">
                <h2>Welcome to Chat!</h2>
                
                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined/> Sign In whith Google
                </div>

                <br />
                <br />
                <div
                    className="login-button facebook"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined/> Sign In whith Facebook
                </div>
                
            </div>

        </div>
    );
}

export default Login;