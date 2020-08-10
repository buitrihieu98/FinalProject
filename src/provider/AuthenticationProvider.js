import React, {useState, useReducer} from 'react';
import {login} from "../Actions/authentication_action";
import {reducer} from "../Reducers/AuthenticationReducer";
import {changeAccountInfo} from "../Actions/changeAccountInfo_action";


const AuthenticationContext = React.createContext()

const AuthenticationProvider = (props) => {
    const initialState = {
        authenticated: false,
        userInfo: null,
        token:null,
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthenticationContext.Provider value={{state, login:login(dispatch),changeInfo:changeAccountInfo(dispatch)} }>
            {props.children}
        </AuthenticationContext.Provider>
    )
};
export {AuthenticationProvider, AuthenticationContext}
