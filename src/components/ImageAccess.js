import React from 'react';
import { useState,useEffect } from 'react';
import axious from 'axious';

function ImageAccess() {
    const [album,setAlbum] = useState([]);
    const [image,setImage] = useState('');

    useEffect(()=>{
        axious.get().then((response) => {
            console.log(response.data);
            setAlbum(response.data);
        }).catch((err) => {
            <p>Error</p>
            
        });
    })
  return (
    <div>
        <p>{album[0].url}</p>
      
    </div>
  )
}

export default ImageAccess;
