import React, {useState, useReducer} from 'react';
import {reducer} from "../Reducers/AuthenticationReducer";
import {changeAccountInfo, login, logOut} from "../Services/user-service";



const AuthenticationContext = React.createContext()

const AuthenticationProvider = (props) => {
    const initialState = {
        authenticated: false,
        userInfo: null,
        token:null,
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthenticationContext.Provider value={{state, login:login(dispatch),changeInfo:changeAccountInfo(dispatch),logout: logOut(dispatch) }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
};
export {AuthenticationProvider, AuthenticationContext}
