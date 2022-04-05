

export default function albumsReducer (albums = [], action) {

   

        switch (action.type) {
            case 'FETCH_ALL_ALBUMS':
                    return action.payload;

            case 'CREATE_ALBUM':
                    return [...albums, action.payload];
            default:
                    return albums;

        }
};

