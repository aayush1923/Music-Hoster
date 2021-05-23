import React from 'react'
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
               {/*logo*/}
            
         
               <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt=""></img>
                 
               <a href={loginUrl}>LOGIN</a>
        </div>
    )
}

export default Login
