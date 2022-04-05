import { useQuery } from 'react-query';
import axios from 'axios';


const albumsUrl= 'http://localhost:5000/albums';
const artistsUrl= 'http://localhost:5000/artists/';


// const fetchArtistById = (artistId) => {
//     return axios.get(`http://localhost:5000/artists/${artistId}`)
// };

export const fetchAlbums = () => axios.get(albumsUrl);

export const fetchArtists = () => axios.get(artistsUrl);



// export const useArtistData = (artistId) => {
//     return useQuery(['artistData', artistId], () => fetchArtistById(artistId))
// };

export const createAlbum = (newAlbum) => axios.post(albumsUrl, newAlbum);
export const createArtist = (newArtist) => axios.post(artistsUrl, newArtist);
