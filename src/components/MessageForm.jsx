import { useState } from "react"
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {

const [value, setValue] = useState('');
const { chatId, creds } = props;

const handleSubmit = (event) => {
  event.preventDefault();
  const text = value.trim()
  if (text.length > 0) sendMessage(creds, chatId, {text});
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
    </form>
  )
}

export default MessageForm;