import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { AuthContext, FirebaseContext } from './store/firebaseContext';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext'


import Home from './Pages/Home';

function App() {
  const {setuser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setuser(user)
    })
  })
  return (
    <div>
    <Post>
      <BrowserRouter>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/create'>
        <Create/>
      </Route>
      <Route path='/view'>
        <View />
      </Route>
      </BrowserRouter>
    </Post>
    </div>
  );
}

export default App;
