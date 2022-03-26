import axios from 'axios';


const albumsUrl= 'http://localhost:5000/albums';
const artistsUrl= 'http://localhost:5000/artists';


export const fetchAlbums = () => axios.get(albumsUrl);

export const fetchArtists = () => axios.get(artistsUrl);
