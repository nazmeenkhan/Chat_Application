import { useState } from "react"
import { sendMessage, isTyping } from "react-chat-engine";
import { SendOutlined } from "@ant-design/icons";

const MessageForm = (props) => {

const [value, setValue] = useState('');
const { chatId, creds } = props;

const handleSubmit = (event) => {
  event.preventDefault();
  const text = value.trim()
  if (text.length > 0) {
    sendMessage(creds, chatId, {text});
  }
  setValue('');
}

const handleChange = (event) => {
  setValue(event.target.value);
  isTyping(props, chatId);
}

  return (
    <form className="" onSubmit={handleSubmit}>
      <textarea 
        placeholder="Type a new message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        className="message-input"
      />
      <button type="submit" className="send-message-button">
        <SendOutlined className=""/>
      </button>
    </form>
  )
}

export default MessageForm;