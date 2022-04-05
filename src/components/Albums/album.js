import {  Link } from 'react-router-dom';




function Album({ album }) {

    return (

<div className="album-component">
<Link to={`/artist/${album.artistName}/albums/${album.albumName}`} >
<img className="album-photo" src={album.selectedFile} alt="albumPhoto"/>

<h3>{album.albumName}</h3>
<h3>{album.artistName}</h3>
<h4>{album.releaseDate}</h4>

 <h4>{album.numberOfTracks} Tracks</h4> 
 </Link>
 </div>
        
    );
}
  
  export default Album;
  