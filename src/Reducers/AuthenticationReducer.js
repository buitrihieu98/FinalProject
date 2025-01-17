
export const reducer = (prevState, action) =>{
    switch(action.type){
        case "LOGIN_SUCCEEDED":
            return {...prevState, authenticated: true, token: action.data.token, userInfo: action.data.userInfo}
        case "CHANGE_INFO_SUCCEEDED":
            return {...prevState, userInfo: action.data}
        case "LOGOUT":
            return {...prevState, authenticated: false,
                userInfo: null,
                token:null,}
        case "LOGIN_FAILED":
            return {...prevState, authenticated: false}
        default:
            throw new Error()
    }
}
