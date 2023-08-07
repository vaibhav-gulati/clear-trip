import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
import { useEffect, useState } from 'react';

function App() {
 const [chatData, setChatData] = useState([]);

 useEffect(()=>{

  const fetchData = async()=>{

    const resp = await fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats');
    const data = await resp.json();
    setChatData(data)
  }

  fetchData()
 },[])

  return (
    <div className="App">
      <Chat info={chatData}/>
    </div>
  );
}

export default App;
