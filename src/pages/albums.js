
import { useSelector } from 'react-redux';
import Album from '../components/Albums/album'
import { CircularProgress } from '@material-ui/core'



function Albums() {

const albums = useSelector((state) => state.albums);
// console.log(albums);

  // const images = [
  //   { url: "https://source.unsplash.com/collection/888137/200x200"},
  // ];
  
    return (
      !albums.length ? <CircularProgress /> : (

      <div className="album-container">
         
  
               {albums.map((album) =>(
                 <div className="album-component" key={album._id}>
                   <Album album={album} />
                   </div>
               ))}

        
      </div>
      )
    );
  }
  
  export default Albums;
  