import { useSelector } from 'react-redux';
import Artist from '../components/Artists/artist';
import { CircularProgress } from '@material-ui/core'


function Artists() {

  const artists = useSelector((state) => state.artists);
  // console.log(artists);

    return (

      !artists.length ? <CircularProgress /> : (
      <div className="artist">
        <div className="artist-container">

       {artists.map((artist) =>(
                 <div className="artist-component" key={artist._id}>
                   <Artist artist={artist} />
                   </div>
               ))}
         
        </div>
      </div>
      )
    );
  }
  
  export default Artists;
  