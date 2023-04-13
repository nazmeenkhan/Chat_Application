import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed'

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="28d6184c-18ea-4873-bb6d-e7816aefddd2"
      userName="Chat1"
      userSecret="123123"
      renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
}

export default App