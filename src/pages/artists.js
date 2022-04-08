import { useSelector } from 'react-redux';
import Artist from '../components/Artists/artist';
import Loading from '../components/Loading/loading';


function Artists() {

  const artists = useSelector((state) => state.artists);
  // console.log(artists);

    return (

      !artists.length ? <Loading/> : (
        <div className="artist">
        <div className="artist-container">

       {artists.map((artist) =>(
                 <div key={artist._id}>
                   <Artist artist={artist} />
                   </div>
               ))}
         
        </div>
      </div>
      )
    );
  }
  
  export default Artists;
  