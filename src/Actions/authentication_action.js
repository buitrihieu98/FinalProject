import axios from 'axios'
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED"
export const LOGIN_FAILED = "LOGIN_FAILED"


export const login =(dispatch)=> (username, password) =>{
    axios.post('https://api.itedu.me/user/login', {
        email: username,  password:password
    }).then((response)=>{
        if(response.status===200){
            dispatch({type:LOGIN_SUCCEEDED, data:response.data})
            console.log('login succeeded')
        }
        else{
            console.log('login failed 1: ',response.status)
            dispatch({type:LOGIN_FAILED})
        }
    }).catch((error)=>{
        dispatch({type:LOGIN_FAILED})
        console.log('login failed 2',error)
    });

}
