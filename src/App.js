import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { useDispatch} from 'react-redux';
import { getAlbums } from './actions/albums';
import { getArtists } from './actions/artists';

// import ProtectedRoute from './auth/protectedRoute';


import LogIn from "./pages/login";
import Home from "./pages/home";
import Logout from './components/Logout/logout';
import Artists from "./pages/artists";
import Albums from "./pages/albums";
import ArtistId from "./pages/artistId";
import AlbumId from "./pages/albumId";
import AddArtist from './pages/addArtist';


// import Logo from './images/logo.png'
// import NotFound from "./pages/notFound";


const App = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getArtists());
}, [dispatch]);


useEffect(() => {
    dispatch(getAlbums());
}, [dispatch]);



  return (

<div className="App">

  <BrowserRouter>
  


  <div className="nav">

      <nav>
          <div className="nav-title"> 
          TrackThub
          </div>
          <div className="nav-logo">
          </div>
         <div className="nav-links">
          <Link to="/browse" className="nav-home">
              Browse
          </Link>
          <Link to="/artist" className="nav-artists">
              Artists
          </Link>
          <Link to="/albums" className="nav-albums">
              Albums
          </Link>
          <Link to="/admin" className="nav-admin">
              Create New
          </Link>
          <div className="nav-user">
          <Logout/>
          </div>
          </div>
    </nav>
</div>


  <Routes>

    <Route path="/" element={<LogIn />}  exact />

    {/* <Route path="/Browse" element={<ProtectedRoute component={Home} />}/>
    <Route path="/Artist" element={<ProtectedRoute component={Artists} /> } />
    <Route path="/Albums" element={<ProtectedRoute component={Albums} /> } />

    <Route path="/Artist/:artistName" element={<ProtectedRoute component={ArtistId} />} />
    <Route path="/Artist/:artistName/albums" element={<ProtectedRoute component={AlbumId} />} />

    <Route path="/Admin" element={<ProtectedRoute component={AddArtist} />} /> */}


    <Route path="/Browse" element={<Home />}/>
    <Route path="/Artist" element={<Artists /> } />
    <Route path="/Albums" element={<Albums /> } />

    <Route path="/Artist/:artistName" element={<ArtistId />} />
    <Route path="/Artist/:artistName/albums" element={<AlbumId />} />

    <Route path="/Admin" element={<AddArtist />} />


    {/* <Route element={<NotFound/>} /> */}


  </Routes>

</BrowserRouter>

</div>


   
  );
}

export default App;