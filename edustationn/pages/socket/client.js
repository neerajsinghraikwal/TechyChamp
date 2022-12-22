import React,{ useState, useEffect } from "react";

// import io from 'socket.io-client'
// let socket;
import style from "./client.module.css";


export default function () {
  const [name, SetName] = useState("");

  function handlesubmit(e) {
    e.preventDefault();
    console.log(name);
  }




  function handlechange(e){
SetName(e.target.value);
    console.log(name)
    // socket.emit('input-change', e.target.value)
  }

  return (
    <div className={style.mainS} >
      <p>Discussion</p>
      <div className={style.mainSt} >
        <form onSubmit={handlesubmit} className={style.mainForm}>
         
         <div className={style.mainInput}>
          <input
            type="text"
            value={name}
            placeholder="Write Something..."
            onChange={handlechange}
          />
          </div> 

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
