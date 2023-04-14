import axios from "axios";
import { useState } from "react"

const LoginForm = () => {
  
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const projectID = "28d6184c-18ea-4873-bb6d-e7816aefddd2";

  const handleSubmit = async (event) => {
    console.log(event)
    event.preventDefault();
    const authObj = {
      'Project-Id': projectID,
      'user-name': username,
      'user-secret': password
    }

    try {
      await axios
      .get('https://api.chatengine.io/chats', {headers: authObj});

      sessionStorage.setItem('username', username)
      sessionStorage.setItem('password', password)

      window.location.reload();
      setError('');

    } catch(err) {
      console.log(err)
      alert(err.message)
      setError('Oops incorrect creds.')
    }
  }

  return(
    <div className="login-form-container">
        <div className="login-form-view">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="username">User Name: </label>
              <input className="form-control" type="text" id="username" value={username} 
                onChange={ (event) => {setUser(event.target.value)} } 
                placeholder="Username"
                style={{}}  
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password: </label>
              <input className="form-control" type="password" id="password" value={password} 
                onChange={ (event) => {setPassword(event.target.value)} } 
                placeholder="Password"  
              />
            </div>
            <div className="" style={{}}>
              <button className="btn login-btn">Sign In</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default LoginForm