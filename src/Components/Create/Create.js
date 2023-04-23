import React, { Fragment, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import { FirebaseContext , AuthContext } from '../../store/context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Create = () => {
  const {user} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const [name,setName] = useState('')
  const [price,setPrice] = useState(0)
  const [category,setCategory] = useState('')
  const [image,setImage] = useState(null)
  const date = new Date()
  const history = useHistory()
  
  const handleSubmit = ()=>{
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url)
          firebase.firestore().collection('products').add({
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
              name="Name"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)    
              }}             
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"  
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)    
              }}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input"
            value={price}
            onChange={(e)=>{
                setPrice(e.target.value)    
              }} type="number" id="fname" name="Price" />
            <br />         
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image):null}></img>
          
            <br />
            <input type="file" onChange={(e)=>{
                setImage(e.target.files[0])    
              }} />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
