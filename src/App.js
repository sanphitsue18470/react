import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";

function App() {
    var word="";
    var text="";
    var rangd=Math.floor(Math.random()*5);
    switch(rangd){
        case 0 :
            text="เชียงใหม่";
            word="Chiangmai"
            break;
        case 1 :
             text="สงขลา";
             word="Songkhla"
             break;   
        case 2 :
            text="ภูเก็ต";
            word="Phuket"
            break; 
        case 3 :
            text="กรุงเทพ";
            word="Bangkok"
            break; 
        case 4 :
            text="ตรัง";
            word="Trang"
            break;
    }
 return (
     <body> <div className='textst'>
     <h1>จงเขียนชื่อภาษาอังกฤษของแต่ละจังหวัดดังต่อไปนี้</h1>
     <h2>{text}</h2>
    <WordCard value={word}/>
 </div></body>

 );
}

export default App;