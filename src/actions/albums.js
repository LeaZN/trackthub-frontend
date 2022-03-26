import * as api from '../api';


export const getAlbums = () => async (dispatch) => {

        try {
            const { data } = await api.fetchAlbums();

            dispatch({type: 'FETCH_ALL_ALBUMS', payload: data });
        } catch (error) {
            console.log(error.message)
            
        }

    
}