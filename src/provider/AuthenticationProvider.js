import React, {useState, useReducer} from 'react';
import {login} from "../Actions/authentication_action";
import {reducer} from "../Reducers/AuthenticationReducer";


const AuthenticationContext = React.createContext()

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState()
    const [favoritesList, setFavoritesList] = useState([])

    const initialState = {
        authenticated: false,
        userInfo: null,
        token:null,
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        // <AuthenticationContext.Provider value={{authentication, setAuthentication,favoritesList, setFavoritesList}} >
        <AuthenticationContext.Provider value={{state, login:login(dispatch)/* register:register, forgot:forgot*/}} >
            {props.children}
        </AuthenticationContext.Provider>
    )
};
export {AuthenticationProvider, AuthenticationContext}
