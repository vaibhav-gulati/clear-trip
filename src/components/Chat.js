import { useState } from 'react';
import '../App.css'
import Chatinfo from './Chatinfo';
const Chat = ({info})=>{
    const [splitScreen, setSplitScreen] = useState(false);
    const [splitData, setSplitData]= useState([]);


    const dateFunc=(val)=>{
        var current_date=new Date(val);
        var formatted_date = current_date.getDate() + "/" + current_date.getMonth() + 1 + "/" + current_date.getFullYear();
        return formatted_date;
    }
    function handleClick(event){
        console.log("info",info)
        const data = info.filter((val)=>val.id==event);
        setSplitData(data)
        setSplitScreen(true)
        console.log("filtered value", data)

        console.log("item clicked", event)
    }
return(
    <div className='parentDiv'>
    <div className='mainCard'>
       {info.map((chat)=>{
        return(
            <div className='singleCard' key={chat.id} onClick={()=>handleClick(chat.id)}>
                <div className='logoCard1'>
                    <img className='imageSize' src={chat.imageURL}></img>
                </div>
                <div className='infoCard'>
                    <span>{chat.title}</span>
                    <span>{chat.orderId}</span>
                </div>
                <div className='dateCard'>
                    <span> {dateFunc(chat.latestMessageTimestamp)}</span>
                </div>
            </div>
        )
       })}
        </div>

        {splitScreen &&   <div className='chatInfo'>
       <Chatinfo splitData={splitData}/>
      
       </div>}
        
        
     
    </div>
)
}

export default Chat