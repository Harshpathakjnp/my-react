import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ImageAccess() {
    const [album, setAlbum] = useState(null);
    const [image, setImage] = useState('');
    const baseURL = `https://gist.githubusercontent.com/champaksworldcreate/b5314c76cc15b44686c7151a8fb039b0/raw/d6020258eea665ef2929f901d88ae3d41e22ba6b/images.json`;

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            let albumdata = response.data;
            console.log(albumdata[0].url);
            setAlbum(albumdata);
        }).catch((err) => {
            setAlbum({ "albumname": "", "sno": "", "name": "", "url": "" });

        });
    }, [])
    if (!album) return (<div>
        <center>
            <p>No Data</p>
        </center>
    </div>);
    return (
        <div>
            <center>
                <table>
                    {album.map((current, i) => {
                        return <tr  key={i}>
                            <td rowSpan={2}><img src={current.url} alt={current.name}></img>
                            <p>{current.albumname}</p>
                            <p>{current.name}</p>
                            <br></br><br></br>
                            </td>
                        </tr>
                    })}

                </table>
            </center>


            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        </div>
    )
}

export default ImageAccess;
