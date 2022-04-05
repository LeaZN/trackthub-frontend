import React from 'react';
// import { useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core'


const ArtistId = () => {

   const { artistName } =  useParams();
   const query = new URLSearchParams (useLocation().search);

   const artists = useSelector((state) => state.artists);

  // console.log(artists);

  return (

    !artists.length ? <CircularProgress /> : (
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
          return <Link to={`/artist/${artist.artistName}/albums`} className="artistbyId" key="">
            <div className="artist-component">
          <h3>{artist.artistName}</h3>
          <img className="artist-photo" src={artist.selectedFile} alt="artistPhoto"/>
          <h4>Followers: {artist.followersCount}</h4>
          <h4>Rating: {artist.rating}/5</h4>
          
          
          
          </div>
          </Link>;
        })}









{/* <div className="artist">
        <header className="artist-header">
        </header>
  
        <div className="content-wrap">

        {artists.map((artist) =>(
                 <div className="object-container" key={artist._id}>
                   <ArtistById artist={artist} />
                   </div>
               ))}
         
        
        </div>
      </div> */}

</div>
    </>
   
    )
  )
}

export default ArtistId;