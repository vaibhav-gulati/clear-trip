const ChatMessage = ({ message, sender }) => {
    console.log("inside child", message,sender)
    const isBot = sender === 'BOT';
    const messageStyle = isBot ? 'message-bot' : 'message-user';
    const alignStyle = isBot ? 'align-left' : 'align-right';
  
    return (
      <div className={`chat-message ${alignStyle}`}>
        <div className={`message ${messageStyle}`}>
          {message}
        </div>
      </div>
    );
  };

const Chatinfo=({splitData})=>{
    console.log("inside chatsplit", splitData)
return(
    <>
    <div className="split1">
           <div className='logoCard'>
                    <img className='imageSize' src={splitData[0].imageURL}></img>
                </div>
                <div className='infoCard'>
                    <span>{splitData[0].title}</span>
                    <span>{splitData[0].orderId}</span>
                </div>

    </div>
    <div className="chatDetails">
        <div className="chat">
          {splitData[0].messageList.map((messageData) => (
            <ChatMessage
              key={messageData.messageId}
              message={messageData.message}
              sender={messageData.sender}
            />
          ))}
        </div>
      </div>
    </>
)
}
export default Chatinfo