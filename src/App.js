import './App.css';
// import { useState, useEffect, useRef } from 'react'
import { useEffect, useRef, Suspense } from 'react'

function App() {
  const quti = useRef("")
  console.log(quti)
  useEffect(()=>{
    quti.current.style.backgroundColor = "yellow"
  })
  return (
    <div className="app">
      
    <div ref={quti} className="box"></div>

    </div>
  );
}

export default App;

// if(dataCellId){
//             const copiedText = userData[dataCellId - 1];
//             navigator.permissions.query({name: "clipboard-write"}).then(result => {
//                 if (result.state === "granted" || result.state === "prompt") {
//                   function updateClipboard(copiedText) {
//                     navigator.clipboard.writeText(copiedText).then(function() {
//                         clipboarNotificationSuccess.classList.add('copiedToClipboardActive');
//                     }, function() {
//                         clipboarNotificationFailed.classList.add('copiedToClipboardActive');
//                     });
//                   }
//                   updateClipboard(copiedText.status + copiedText.id)
//                 }
//             });

//         }
//         clipboarNotificationSuccess.classList.remove('copiedToClipboardActive');

// <button onClick={() => setNumber(prev => prev + 1)}> + </button>
      // <h1>{number}</h1>
      // <h1>{number1}</h1>
      // <button onClick={() => setNumber1(prev => prev - 1)}> - </button>

// import {useState} from 'react'
// const [active, setActive] = useState(false)
// <div className={active ? "sidebar__active" : "sidebar"}>
//     </div>
//     <button onClick={() => setActive(!active)} >Change color</button>

// const [number, setNumber] = useState(0)
  // const [number1, setNumber1] = useState(0)

  // useEffect(() => {
  //   console.log("nkjcjdbcjsd")
  // }, [number, number1])