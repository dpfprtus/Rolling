import React from 'react';
import '../../App.css';
import { REST_API_KEY,REDIRECT_URL } from './KakaoLoginData';


const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;
    
const Login = () => {
    return (
        <div className="App">
            <section className="main">
                <h1 id="title" style={{textAlign:"center"}}>나의 이야기숲 시작하기</h1>
                <img id="login_img" src="img/login.svg" alt="login"></img>
                <button id="login_button" onClick={()=>{window.location.href=KAKAO_AUTH_URL}}></button>
            </section>
            </div>
    )
}

export default Login