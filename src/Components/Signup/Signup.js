import React,{useState,useContext} from 'react';
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/firebaseContext';
import './Signup.css';

export default function Signup() {

  const history=useHistory()
  const [username,setusername]=useState('')
  const [useremail,setuseremail]=useState('')
  const [usernumber,setusernumber]=useState('')
  const [userpassword,setuserpassword]=useState('')

  const{firebase} =useContext(FirebaseContext)

  const handlesignup=(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(useremail,userpassword).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('user').add({
          id:result.user.uid,
          name:username,
          phone:usernumber
        }).then(()=>{
          history.push("/login")
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlesignup}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={useremail}
            onChange={(e)=>setuseremail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={usernumber}
            onChange={(e)=>setusernumber(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={userpassword}
            onChange={(e)=>setuserpassword(e.target.value)}
            name="password"
            defaultValue="Doe"
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
