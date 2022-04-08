

export default function usersReducer (logins = [], action) {

   

    switch (action.type) {
  
        case 'CREATE_LOGIN':
                return [...logins, action.payload];
        default:
                return logins;

    }
};
