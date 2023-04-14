const OtherMessage = ({ message, lastMessage }) => {
  const isFirstMessage = !lastMessage || lastMessage.sender.username !== message.sender.username
  
  return(
    <div>
      {isFirstMessage && (
        <div />
      )}
      {
        message?.attachments?.length > 0
        ? (
          <img src={message.attachments[0].file} 
            alt="message-attachment"
            className="message-image"
            style={{float: 'left'}}
          />
        ) : (
          <div className="message-bubble message-bubble-other" style={{float: 'left'}}> {message.text} </div>
        )
      }
    </div>
  )
}

export default OtherMessage;