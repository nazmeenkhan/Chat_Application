import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

const Chatfeed = (props) => {
  console.log(props);
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  const renderMessages = () => {
    const keys = Object.keys(messages)
    return keys.map((key, index) => {
      const message = messages[key]
      const lastMessageKey = index === 0 ? null : keys[index-1];
      const isMyMessage = userName === message.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {
              isMyMessage 
              ? <MyMessage message={message} /> 
              : <OtherMessage message={message} lastMessage={messages[lastMessageKey]} />
            }
          </div>
          <div className="" style={{}}>
            read-reciept
          </div>
        </div>
      )
    })
  }

  if(!chat) return 'Loading...'
  return(
    <div className="chat-title-container">
      <div className="chat-title">
        {chat?.title}
      </div>
      <div className="chat-subtitle"> 
        {
          chat?.people.map((person) => `${person.person.username}`)
        }
      </div> 
      {renderMessages()}
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}

export default Chatfeed;