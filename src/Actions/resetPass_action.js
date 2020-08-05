import api from "../API/api";

export const resetPass=async (email,props,setError)=>{
    api.post('https://api.itedu.me/user/forget-pass/send-email',{email:email},).then((response)=>{
        if(response.isSuccess){
            props.navigation.navigate("Login")
        }
        else{
            setError(response.error.message)
        }
    })
}
