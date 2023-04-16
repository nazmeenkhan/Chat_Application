import { ChatEngine } from 'react-chat-engine';
import './App.css';

import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const App = () => {
  if (!sessionStorage.getItem('username')) {
    return <LoginForm />
  }

  return (
    <ChatEngine 
      height="100vh"
      projectID="28d6184c-18ea-4873-bb6d-e7816aefddd2"
      userName={sessionStorage.getItem('username')}
      userSecret={sessionStorage.getItem('password')}
      renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
}

export default App