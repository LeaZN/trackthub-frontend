import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { useDispatch} from 'react-redux';

import { getAlbums } from './actions/albums';
import { getArtists } from './actions/artists';

import Login from "./pages/login";
import Home from "./pages/home";

import Artist from "./pages/artist";
import Albums from "./pages/albums";


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

<div>

    <nav className="nav">
        <div className="title-nav">
        TrackThub
        </div>
    </nav>

</div>


<Routes>


<Route path="/" element={<Login />}  />
<Route path="/Browse" element={<Home />} />
<Route path="/Artist" element={<Artist/>} />
<Route path="/Albums" element={<Albums />} />








</Routes>

</BrowserRouter>

{/* <Login/>
<Home/>
<Artists/>
<Albums/> */}

</div>


   
  );
}

export default App;