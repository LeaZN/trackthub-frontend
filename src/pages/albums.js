
import { useSelector } from 'react-redux';
import Album from '../components/Albums/album'
import Loading from '../components/Loading/loading';



function Albums() {

const albums = useSelector((state) => state.albums);

console.log(albums);

  

    return (

      !albums.length ? <Loading/> : (

      <div className="album-container">
         
  
               {albums.map((album) =>(
                 <div key={album._id}>
                   <Album album={album} />
                   </div>
               ))};


      </div>
      )
    );
  }
  
  export default Albums;
  