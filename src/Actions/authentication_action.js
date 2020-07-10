import axios from 'axios'
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED"
export const LOGIN_FAILED = "LOGIN_FAILED"


export const login =(dispatch)=> (username, password) =>{
    axios.post('https://api.itedu.me/user/login', {
        email: username,  password:password
    }).then((response)=>{
        if(response.status===200){
            dispatch({type:LOGIN_SUCCEEDED, data:response.data})
        }
        else{
            dispatch({type:LOGIN_FAILED})
        }
    }).catch((error)=>{
        dispatch({type:LOGIN_FAILED})
    });

}
