import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createAlbum } from '../actions/albums';
import { createArtist } from '../actions/artists';



function AddArtist() {
  

    const [artistData, setArtistData] = useState({
        artistName: '', followersCount: '', artistPhoto: '', rating: '',
    });

    const [albumData, setAlbumData] = useState({
        albumName:'', artistName:'', albumPhoto:'', releaseDate:'', numberOfTracks:'',
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
          setArtistData({artistName: '', followersCount: '', artistPhoto: '', rating: ''});
           
        }

        const clearAlbum = () => {
          setAlbumData ({ albumName:'', artistName:'', albumPhoto:'', releaseDate:'', numberOfTracks:'' });
           
        }

  
    return (
      <div className="addArtist">
        <header className="addArtist-header">
       </header>
  
         <div className="content-wrap-admin">

    <div className="addArtist">
        <h1> Add Artist</h1>
         <form autoComplete="off" noValidate onSubmit={handleSubmitArtist}>
        <fieldset>
          <label>
            <p>Artist Name</p>
            <input 
            name="artistName" 
            value={artistData.artistName}
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
            onChange={(e) => setArtistData({ ...artistData, followersCount: e.target.value})}
            />
          </label>
        </fieldset>
       

        <div className="addArtistFile">
        <p>Photo</p>

        </div>
        <FileBase 
          type='file'
          multiple={false}
          onDone={({base64}) => setArtistData({ ...artistData, selectedFile: base64})}
        />


        <fieldset>
          <label>
            <p>Rating</p>
            <input 
            name="rating" 
            value={artistData.rating}
            onChange={(e) => setArtistData({ ...artistData, rating: e.target.value})}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      <button onClick={clearArtist}>Clear</button>

      </div>

<div className="addAlbum">
      <h1> Add Album</h1>
      <form autoComplete="off" noValidate onSubmit={handleSubmitAlbum}>
        <fieldset>
          <label>
            <p>Album Name</p>
            <input 
            name="albumName"
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
            value={albumData.artistName}
            onChange={(e) => setAlbumData({ ...albumData, artistName: e.target.value})}
            />
          </label>
        </fieldset>
        {/* <fieldset>
          <label>
            <p>Album Photo</p>
            <input 
            name="albumPhoto" 
            value={albumData.albumPhoto}
            onChange={(e) => setAlbumData({ ...albumData, albumPhoto: e.target.value})}
            />
          </label>
        </fieldset> */}

        <div className="addAlbumFile">
        <p>Photo</p>
        
        <FileBase 
          type='file'
          multiple={false}
          onDone={({base64}) => setAlbumData({ ...albumData, selectedFile: base64})}
        />

        </div>

        <fieldset>
          <label>
            <p>Release Date</p>
            <input 
            name="releaseDate" 
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
            value={albumData.numberOfTracks}
            onChange={(e) => setAlbumData({ ...albumData, numberOfTracks: e.target.value})}
            />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      <button onClick={clearAlbum}>Clear</button>

      </div>
         </div>
      </div>
    );
  }
  
  export default AddArtist;
  