import './Login.css';
import React ,{ useState ,useContext}from 'react';
import Logo from '../../olx-logo.png';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/context';

function Login() {
  const [email,setEMail]= useState("");
  const [password,setPassword]= useState("")
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  const handleClick = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      history.push('/')
    })
    .catch((error)=>{
      alert(error.message)
    })
    
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt='logo'></img>
        <form onSubmit={handleClick}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>{
              setEMail(e.target.value)
            }}
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>
            setPassword(e.target.value)
            }
            name="password"

          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
