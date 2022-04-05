import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { useDispatch} from 'react-redux';
import { getAlbums } from './actions/albums';
import { getArtists } from './actions/artists';

import { Auth0Provider } from '@auth0/auth0-react';
import ProtectedRoute from './auth/protectedRoute';


import LogIn from "./pages/login";
import Home from "./pages/home";
import Logout from './components/Logout/logout';
import Artists from "./pages/artists";
import Albums from "./pages/albums";
import ArtistId from "./pages/artistId";
import AlbumId from "./pages/albumId";
import AddArtist from './pages/addArtist';


// import { useAuth0 } from '@auth0/auth0-react';
// import Loading from './components/Loading/loading';
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


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (

<div className="App">

  <BrowserRouter>
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={`${window.location.origin}/browse`}>


  <div className="nav">

      <nav>
          <div className="nav-title"> 
          TrackThub
          </div>

          <div className="nav-logo">
            {/* <img className="logo" src={Logo} alt="trackthub-logo"/> */}
          </div>

          {/* <img className="logo" src={Logo} alt="trackthub-logo"/> */}
          
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

    <Route path="/Browse" element={<ProtectedRoute component={Home} />}/>
    <Route path="/Artist" element={<ProtectedRoute component={Artists} /> } />
    <Route path="/Albums" element={<ProtectedRoute component={Albums} /> } />

    <Route path="/Artist/:artistName" element={<ProtectedRoute component={ArtistId} />} />
    <Route path="/Artist/:artistName/albums" element={<ProtectedRoute component={AlbumId} />} />

    <Route path="/Admin" element={<ProtectedRoute component={AddArtist} />} />

    {/* <Route element={<NotFound/>} /> */}

  </Routes>

</Auth0Provider>
</BrowserRouter>

</div>


   
  );
}

export default App;