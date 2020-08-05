import api from "../API/api";

export const likeCourse = async (item,token)=>{
    api.post('https://api.itedu.me/user/like-course',{
        courseId: item.id
    },token)
}
