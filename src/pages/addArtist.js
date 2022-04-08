import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createAlbum } from '../actions/albums';
import { createArtist } from '../actions/artists';


function AddArtist() {
  
    const [artistData, setArtistData] = useState({
        artistName: '', followersCount: '', selectedFile: '', rating: '',
    });

    const [albumData, setAlbumData] = useState({
        albumName:'', artistName:'', selectedFile:'', releaseDate:'', numberOfTracks:'',
    });

    const dispatch = useDispatch();

    const handleSubmitArtist = event => {
            event.preventDefault();
            dispatch(createArtist(artistData));
            alert('You have added an artist.')
        }
        const handleSubmitAlbum = event => {

            event.preventDefault();

            dispatch(createAlbum(albumData));

            alert('You have added an album.')
        }


        const clearArtist = () => {
          setArtistData({artistName: '', followersCount: '', selectedFile: '', rating: ''});
           
        }

        const clearAlbum = () => {
          setAlbumData ({ albumName:'', artistName:'', selectedFile:'', releaseDate:'', numberOfTracks:'' });
           
        }

  
    return (

      

         <div className="admin-container">

    <div className="addArtist">
        <h1> Add Artist</h1>
         <form autoComplete="off" noValidate onSubmit={handleSubmitArtist}>
        <fieldset>
          <label>
            <p>Artist Name</p>
            <input 
            name="artistName" 
            value={artistData.artistName}
            placeholder=" Billy Idol"
            required
            onChange={(e) => setArtistData({ ...artistData, artistName: e.target.value})}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Followers</p>
            <input 
            name="followers" 
            value={artistData.followersCount}
            placeholder="3000"
            onChange={(e) => setArtistData({ ...artistData, followersCount: e.target.value})}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Rating</p>
            <input 
            name="rating" 
            placeholder="4"
            value={artistData.rating}
            onChange={(e) => setArtistData({ ...artistData, rating: e.target.value})}
            />
          </label>
        </fieldset>
        <div className="addArtistFile">
        <fieldset>
        <p>Photo</p>
        <FileBase 
          type='file'
          multiple={false}
          onDone={({base64}) => setArtistData({ ...artistData, selectedFile: base64})}
        />
        </fieldset>
        </div>
        <button className="addArtist-submit-btn" type="submit">Submit</button>
      </form>
      <button className="addArtist-clear-btn" onClick={clearArtist}>Clear</button>

      </div>



<div className="addAlbum">
      <h1> Add Album</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmitAlbum}>
        <fieldset>
          <label>
            <p>Album Name</p>
            <input 
            name="albumName"
            placeholder="Dressed for space"
            value={albumData.albumName}
            onChange={(e) => setAlbumData({ ...albumData, albumName: e.target.value})}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Artist Name</p>
            <input 
            name="artistName" 
            placeholder="Trust"
            value={albumData.artistName}
            onChange={(e) => setAlbumData({ ...albumData, artistName: e.target.value})}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Release Date</p>
            <input 
            name="releaseDate" 
            placeholder="2016"
            value={albumData.releaseDate}
            onChange={(e) => setAlbumData({ ...albumData, releaseDate: e.target.value})}
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            <p>Number Of Tracks</p>
            <input 
            name="numberOfTracks" 
            placeholder="11"
            value={albumData.numberOfTracks}
            onChange={(e) => setAlbumData({ ...albumData, numberOfTracks: e.target.value})}
            />
          </label>
        </fieldset>
      <fieldset>
          <div className="addAlbumFile">
            <p>Photo</p>
                <FileBase 
                  type='file'
                  multiple={false}
                  onDone={({base64}) => setAlbumData({ ...albumData, selectedFile: base64})}
                />
         </div>
      </fieldset>
        <button className="addAlbum-submit-btn"type="submit">Submit</button>
      </form>

      <button className="addAlbum-clear-btn" onClick={clearAlbum}>Clear</button>

      </div>
    </div>
     );
  }
  
  export default AddArtist;
  