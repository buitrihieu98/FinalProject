import api from "../API/api";

export const changePass = async (authentication,oldPassword,newPassword,setOk,setError)=>{
    api.post('https://api.itedu.me/user/change-password',{id: authentication.state.userInfo.id,
        oldPass: oldPassword,
        newPass: newPassword},authentication.state.token).then((response)=>{
        console.log(response)
        if(response.status===200){
            setOk(true)
        }
        else{
            setError(response.data)
        }
    })
}
