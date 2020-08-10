import api from "../API/api";

export const changeAccountInfo = (dispatch)=>(name,avatar,phone,token)=>{
        console.log('changes')
        api.put('https://api.itedu.me/user/update-profile',{name:name,avatar:avatar,phone:phone},token).then((response)=>{
            console.log('changeInfo',response)
            if(response.isSuccess){
                dispatch({type:'CHANGE_INFO_SUCCEEDED', data:response.data.payload})
            }
            else{
                console.log(response.error)
            }
        })
}
