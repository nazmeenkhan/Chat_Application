import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import OtherMessage from "./OtherMessage";

const Chatfeed = (props) => {
  console.log(props);
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  const renderMessages = () => {
    const keys = Object.keys(messages)
    return keys.map(() => {
      
    })
  }

  return(
    <div>
      ChatFeed
    </div>
  )
}

export default Chatfeed;