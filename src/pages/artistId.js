import React from 'react';
// import { useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading/loading';


const ArtistId = () => {

   const { artistName } =  useParams();
   const query = new URLSearchParams (useLocation().search);

   const artists = useSelector((state) => state.artists);


  return (

    !artists.length ? <Loading/> : (
      <>

<div className="query"> {query.get("artistName")}</div>

        <div className="artist-container">


{artists.filter((artist) => {
          if (`${artistName}` === "" ) {
              return null
          } else if ( artist.artistName === `${artistName}` ) {
            return artist
          }
        }).map((artist) => {
          return  <Link to={`/artist/${artist.artistName}/albums`} className="artistId-component" key="">
            <div >
          <h3>{artist.artistName}</h3>
          <img className="artist-photo" src={artist.selectedFile} alt="artistPhoto"/>
          <div className="artist-elements">
          <h4>Followers: {artist.followersCount}</h4>
          <h4>Rating: {artist.rating}/5</h4>
          </div>
          </div>
          </Link>
          
        })}


</div>
    </>
   
    )
  )
}

export default ArtistId;