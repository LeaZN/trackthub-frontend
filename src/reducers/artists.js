

export default function artistsReducer (artists = [], action) {

   

    switch (action.type) {
        case 'FETCH_ALL_ARTISTS':
                return action.payload;

        case 'CREATE_ARTIST':
                return artists;
        default:
                return artists;

    }
};
