import api from "../API/api";

export const getCourseLikeStatus =async(item,token,setState)=>{
    api.get(`https://api.itedu.me/user/get-course-like-status/${item.id}`,{},token)
        .then((response)=>{if(response.isSuccess){
            setState(response.data.likeStatus)
        }})
}
