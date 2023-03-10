// import React,{ useState, useEffect } from "react";

// // import io from 'socket.io-client'
// // let socket;
// import style from "./client.module.css";


// export default function () {
//   const [name, SetName] = useState("");

//   function handlesubmit(e) {
//     e.preventDefault();
//     console.log(name);
//   }




//   function handlechange(e){
// SetName(e.target.value);
//     console.log(name)
//     // socket.emit('input-change', e.target.value)
//   }

//   return (
//     <div className={style.mainS} >
//       <p>Discussion</p>
//       <div className={style.mainSt} >
//         <form onSubmit={handlesubmit} className={style.mainForm}>
         
//          <div className={style.mainInput}>
//           <input
//             type="text"
//             value={name}
//             placeholder="Write Something..."
//             onChange={handlechange}
//           />
//           </div> 

//           <input type="submit" value="Send" />
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react'
import socketIOClient from 'socket.io-client'

const ENDPOINT = 'http://localhost:3000'

 export default function Chat() {
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])
  const [socket] = useState(() => socketIOClient(ENDPOINT))

  useEffect(() => {
    socket.on('newMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })
    socket.on('previousMessages', (previousMessages) => {
      setMessages(previousMessages)
    })
  }, [])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    socket.emit('sendMessage', value)
    setValue('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Send" />
      </form>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  )
}

// export default Chat
