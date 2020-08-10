import api from "../API/api";

export const getUserInfo=(token,setUserInfo)=>{
    api.get('https://api.itedu.me/user/me',{},token).then((response)=>{
        console.log('getUserInfo',response)
        if(response.isSuccess){
            setUserInfo(response.data.payload)
        }
        else{
            console.log(response.error)
        }
    })
}
