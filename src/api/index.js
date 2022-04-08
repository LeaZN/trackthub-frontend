import { useQuery } from 'react-query';
import axios from 'axios';
import setAuthorizationToken from '../auth/setAuthorizationToken';

const registerUrl= 'http://localhost:5000/v1/auth/register';
const loginUrl= 'http://localhost:5000/v1/auth/login';

const albumsUrl= 'http://localhost:5000/v1/albums';
const artistsUrl= 'http://localhost:5000/v1/artists/';


// const fetchArtistById = (artistId) => {
//     return axios.get(`http://localhost:5000/v1/artists/${artistId}`)
// };

export const fetchAlbums = () => axios.get(albumsUrl);
export const fetchArtists = () => axios.get(artistsUrl);




// export const useArtistData = (artistId) => {
//     return useQuery(['artistData', artistId], () => fetchArtistById(artistId))
// };

export const createUser = (newUser) => axios.post(registerUrl, newUser);
export const createLogin = (newLogin) => axios.post(loginUrl, newLogin).then(res => {
    const token = res.data.tokens.access.token;
    const username = res.data.user.name;
    localStorage.setItem('username', username);
    localStorage.setItem('jwtToken', token);
    setAuthorizationToken(token);
});



export const createAlbum = (newAlbum) => axios.post(albumsUrl, newAlbum);
export const createArtist = (newArtist) => axios.post(artistsUrl, newArtist);
