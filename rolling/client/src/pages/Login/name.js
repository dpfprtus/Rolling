import React from "react";
import '../../App.css';

const Name = ()=> {
    return (
        <div className="App">
            <section className="main">
            <img id="name" src="/img/name.svg" alt="name"></img>
            <h1 id="name_title" style={{textAlign:"center"}}>나의 이야기숲 시작하기</h1>
            <span id="line_4"style={{top:"210px"}} ></span>
            <p id="name_text">이름이나 닉네임을 적어주세요!</p>
            </section>
            </div>
    )
}

export default Name;