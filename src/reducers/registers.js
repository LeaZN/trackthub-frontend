

export default function usersReducer (registers = [], action) {

   

    switch (action.type) {
        case 'CREATE_USER':
                return [...registers, action.payload];
               

        default:
                return registers;

    }
};
