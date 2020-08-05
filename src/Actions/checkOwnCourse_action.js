import api from "../API/api";

export const checkOwnCourse =async (props,token,setState)=>{
    api.get(`https://api.itedu.me/user/check-own-course/${props.item.id}`,{},token)
        .then((response)=>{
            if(response.isSuccess){
                setState(response.data.payload.isUserOwnCourse)
            }})
        .catch((error)=>{console.log('error',error)})
}
