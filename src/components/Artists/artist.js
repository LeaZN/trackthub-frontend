
import { Link } from 'react-router-dom';

function Artist({ artist }) {

    return (
         
<div className="artist-component">

<Link to={`/artist/${artist.artistName}/albums`}>
<img className="artist-photo" src={artist.selectedFile} alt="artistPhoto"/>
<div className="artist-elements">
<h3>{artist.artistName}</h3>
<h4>Followers: {artist.followersCount}</h4>
<h4>Rating: {artist.rating}/5</h4>
</div>
</Link>

</div>
    
    );
}
  
  export default Artist;
  