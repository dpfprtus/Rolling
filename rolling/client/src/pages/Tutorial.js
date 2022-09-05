import React from 'react';
import '../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

const Slide1 = () => {
  return (
    <div className="App">
  <section className="main">
  <h1 id="title">이야기 숲에 대해서</h1>
  <p id="text" >함께 가꾸는 이야기숲은...<br/><br/>
          서로의 ‘숲’에 <span style={{color:"#00A3FF"}}>메시지를</span> 남기며<br/>
          메시지 <span style={{color:"#00A3FF"}}>나무로 가득한 숲</span>을 만들어가는<br/>
          웹서비스 입니다.
      </p>
      <img id="tutorial" src="/img/tutorial.svg" alt="tutorial"></img>
  </section>
  </div>
  )
}

const Slide2 = () => {
  return (
    <div className="App">
  <section className="main">
    <h1 className="title1">이야기 숲을 가꾸는 방법 - 시작하기</h1>
    <p id="text">먼저, ‘나의 이야기숲 시작하기’버튼을<br/>눌러서
숲 링크를 생성해주세요.</p>
    <button type="button" id="tutorial_1"></button>
    <span id="line_1"></span>
    <p id="text_1">나의  숲 링크를 복사하여 친구들에게<br/> 널리
퍼뜨려보세요.</p>
  </section>
  </div>
  )
}

const Slide3 = () => {
  return (
    <div className="App">
  <section className="main">
    <h1 className='title2'>이야기 숲을 가꾸는 방법 - 메시지 심기</h1>
    <p id="text">서로의 숲 링크를 클릭하여 서로의 숲을<br/>
구경하기도 하고, 메시지도 남겨보세요!</p>
    <span id="line_2"></span>
    <p id="text_2">친구의 숲에서 ‘메시지 남기기’ 버튼을 누르면</p>
    <img id="tutorial_2" src="img/tutorial_2.svg" alt="tutorial_2"></img>
    <span id="line_3"></span>
    <p id="text_1" style={{top:"440px"}}>1. 친구의 숲에 심어줄 나무를 고르고<br/>
        2. 메시지를 남길 닉네임을 설정하고<br/>
        3. 메시지를 작성할 수 있습니다.
        </p>
    <img id="img_1" src="img/tutorial_3.svg" alt="tutorial_3"></img>
    <span id="line_4"></span>
    <p id="text_2" style={{top:"670px"}}>작성한 메시지는 숲에 나무로 심어집니다.</p>
    <img id="img_2" src="img/tutorial_4.svg" alt="tutorial_4"></img>
  </section>
  </div>
  )
}

const Slide4 = () => {
  return (
    <div className="App">
  <section className="main">
    <h1 id="title" style={{left:"40px"}}>이야기 숲을 가꾸는 방법 - 메시지 관리</h1>
    <p id="text">나의 숲에 심어진 메시지 나무를 클릭하여</p>
    <img id="img_2" src="img/tutorial_4.svg" style={{top:"280px"}} alt="tutorial_4"></img>
    <span id="line_4" style={{top:"400px"}}></span>
    <p id="text" style={{top:"400px"}}>메시지 내용을 확인하거나</p>
    <img id="img_3" src="img/tutorial_5.svg" alt="tutorial_5"></img>
    <span id="line_4" style={{top:"615px"}}></span>
    <p id="text" style={{top:"615px"}}>원치않는 메시지를 삭제할 수도 있습니다.</p>
    <img id="img_4" src="img/tutorial_6.svg" alt="tutorial_6"></img>
    <span id="line_4" style={{top:"750px"}}></span>
    <h1 id="title" style={{top:"750px",left:"40px"}}>이제 나의 이야기숲을 만들어볼까요?</h1>
    <button type="button" id="start_button"></button>
  </section>
  </div>

  )
}
const Tutorial = () => {
    
    return (
        <main className="ExampleComponent">
      <div className="main-wrap">
        <Swiper className="main"
          spaceBetween={8}
          initialSlide={0}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 3000 }}
        >
            <SwiperSlide><Slide1/></SwiperSlide>
            <SwiperSlide><Slide2/></SwiperSlide>
            <SwiperSlide><Slide3/></SwiperSlide>
            <SwiperSlide><Slide4/></SwiperSlide>
        </Swiper>
        </div>
        </main>
    )
}
export default Tutorial;
