import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

function ImageAccess() {
    const [album,setAlbum] = useState(null);
    const [image,setImage] = useState('');
    const baseURL = `https://gist.githubusercontent.com/champaksworldcreate/b5314c76cc15b44686c7151a8fb039b0/raw/d6020258eea665ef2929f901d88ae3d41e22ba6b/images.json`;

    useEffect(()=>{
        axios.get(baseURL).then((response) => {
            let albumdata = response.data;
            console.log(albumdata[0].url);
            setAlbum(albumdata);
        }).catch((err) => {
            setAlbum({ "albumname": "","sno": "","name": "", "url": "" });
            
        });
    },[])
    if (!album) return (<div>
        <center>
            <p>No Data</p>
        </center>
    </div>);
  return (
    <div>
        <h1> 
            {album.map((current,i)=>{
                return <div key={i}>
                    <img src={current.url} alt={current.name}></img>
                </div>
            })}
        </h1>
      
    </div>
  )
}

export default ImageAccess;
