import {LOGIN_FAILED, LOGIN_SUCCEEDED} from "../Actions/authentication_action";

export const reducer = (prevState, action) =>{
    switch(action.type){
        case LOGIN_SUCCEEDED:
            return {...prevState, authenticated: true, token: action.data.token, userInfo: action.data.userInfo}
        case LOGIN_FAILED:
            return {...prevState, authenticated: false}
        default:
            throw new Error()
    }
}
