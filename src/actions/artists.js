import * as api from '../api';


export const getArtists = () => async (dispatch) => {

        try {
            const { data } = await api.fetchArtists();

            dispatch({type: 'FETCH_ALL_ARTISTS', payload: data });
        } catch (error) {
            console.log(error.message)
            
        }

    
}

export const createArtist = (artist) => async (dispatch) => {
    try {
        const { data } = await api.createArtist(artist);

        dispatch({ type: "CREATE_ARTIST", payload: data });
    } catch (error) {
        console.log(error);
    }

}