import React, { useState , useContext} from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/context';

export default function Signup() {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  
  const {firebase} = useContext(FirebaseContext);
  const history = useHistory() 

  const handleClick = (e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email ,password)
    .then ((result)=>result.user.updateProfile({displayName:username})
    .then(()=>firebase.firestore().collection('users').add({
      id:result.user.uid,
      username:username,
      phone:phone
    }))
    .then(()=>history.push('/login'))

    )
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo"></img>
        <form onSubmit={handleClick}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=>
            setUsername(e.target.value)
            }
            name="name"
          />
          <br />

          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={
              (e)=>setEmail(e.target.value)
            }
            name="email"
            
          />
          <br />

          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            value={phone}
            onChange={
              (e)=>
              setPhone(e.target.value)
            }
            name="phone"
            
          />
          <br />

          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={
              (e)=>
              setPassword(e.target.value)
            }
            name="password"
            
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
