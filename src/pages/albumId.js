import React from 'react';
// import { useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading/loading';


const AlbumId = () => {



   const { artistName } =  useParams();
     const query = new URLSearchParams (useLocation().search);


  const artists = useSelector((state) => state.artists);

  console.log(artists);

  const albums = useSelector((state) => state.albums);

  console.log(albums);
  // console.log(`${artistName}`);


  return (

    !albums.length ? <Loading/> : (
      <>

<div className="query"> {query.get("albumName")}</div>

        <div className="album-container">

{albums.filter((album) => {
          if (`${artistName}` === "" ) {
              return null
          } else if ( album.artistName === `${artistName}` ) {
            return album
          }
        }).map((album) => {
          return  <Link to={`/artist/${artistName}/albums/${album.albumName}`} className="album-component" key="">
          
         <div>

          <img className="album-photo" src={album.selectedFile} alt="albumPhoto"/>
          <div className="album-elements">
          <h3>{album.artistName}</h3>
          <h3>{album.albumName}</h3>
          <h4>{album.releaseDate}</h4>
          <h4>{album.numberOfTracks} Tracks</h4>
          </div>
        </div>
        </Link>;
    
        })}


</div>
    </>
   
    )
  )
}

export default AlbumId;