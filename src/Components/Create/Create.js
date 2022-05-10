import React, { Fragment,useState,useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/firebaseContext'
import {useHistory} from 'react-router-dom';


const Create = () => {
  const {firebase}= useContext(FirebaseContext)
  const {user} =useContext(AuthContext)
  const [name,setname]=useState('')
  const [category,setcategory]=useState('')
  const [price,setprice]=useState('')
  const [image,setimage]=useState(null)
  const date = new Date()
  const history=useHistory()
  const handleSubmit=()=>{
     firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
       ref.getDownloadURL().then((url)=>{
         console.log(url)
         firebase.firestore().collection('product').add({
           name,
           category,
           price,
           url,
           userId:user.uid,
           createdAt:date.toDateString()
         })
         history.push('/')
       })
     })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
         
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=>setname(e.target.value)}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              onChange={(e)=>setcategory(e.target.value)}
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e)=>setprice(e.target.value)} />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
    
            <br />
            <input type="file" onChange={(e)=>{
              setimage(e.target.files[0])
            }} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
