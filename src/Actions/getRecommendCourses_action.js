import api from "../API/api";

export const getRecommendCourses =async (userInfo,setState)=>{
    api.get(`https://api.itedu.me/user/recommend-course/${userInfo.id}/10/0`,{},).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
