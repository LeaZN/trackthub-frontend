
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {AiOutlineSearch} from "react-icons/ai";
import Loading from '../components/Loading/loading';

function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const artists = useSelector((state) => state.artists);
  console.log(artists);

  const username = localStorage.username;

    return (



        // !artists.length ? <Loading/> : (

      <div className="browse">
        <div className="welcome-message">
          Welcome {username}!
        </div>
           <form >
              <label className='browse-all'>
                <input className="browse-search-bar" type="text" placeholder="Search for an artist…" 
                onChange= { event => {setSearchTerm(event.target.value)}}
                />
                <button className="browse-search-btn" > <AiOutlineSearch size={25}/> </button>
              </label>
            </form>
  
        {artists.filter((artist) => {
          if (searchTerm === "" ) {
              return null
          } else if (artist.artistName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return artist
          }
        }).map((artist) => {
          return <Link to={`/artist/${artist.artistName}`} className="searchItem" key={artist._id}> <div>{artist.artistName}</div> </Link>;
        })}

      </div>
    
      )
    // )
    ;
  }
  
  export default Home;
  