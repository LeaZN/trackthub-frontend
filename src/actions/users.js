import * as api from '../api';




export const createUser = (register) => async (dispatch) => {
    try {
        const { data } = await api.createUser(register);

        dispatch({ type: "CREATE_USER", payload: data });
    } catch (error) {
        console.log(error);
    }

}


export const createLogin = (login) => async (dispatch) => {
    try {
        const { data } = await api.createLogin(login);

        dispatch({ type: "CREATE_LOGIN", payload: data });
    } catch (error) {
        console.log(error);
       
    }

}