import './App.css';
const App = ()=> {
  return (
    
    <div className="App">
      <section className="main">
        <h1 id="title">함께 가꾸는 이야기 숲</h1>
        <img src="/img/mainpage_1.png" id="mainpage_1" alt="mainpage_1" />
        <img src="/img/mainpage_2.png" id="mainpage_2" alt="mainpage_2" />
        <img src="/img/mainpage_3.png" id="mainpage_3" alt="mainpage_3" />
        <img src="/img/mainpage_4.png" id="mainpage_4" alt="mainpage_4" />
        <img src="/img/mainpage_5.png" id="mainpage_5" alt="mainpage_5" />
        <div id = "comment_1">
          <img src="img/comment_1.png" alt="comment_1"></img>
        </div>
        <div id = "comment_2"> 
          <img src="img/comment_2.png" alt="comment_2"></img>
        </div>
        <div id = "comment_3">
          <img src="img/comment_3.png" alt="comment_3"></img>
        </div>
        
        <button type="button" id="button_2" onClick={()=>{window.location.href = "/tutorial"}}>
          </button>
        <button id="button_1" type="button" onClick={()=>{window.location.href = "/main"}}>
        </button>
        </section>
        
    </div>
    
  );
}

export default App;
