import api from "../API/api";

export const getDetailCourse =async(item,token,setState)=>{
    api.get(`https://api.itedu.me/course/detail-with-lesson/${item.id}`,{},token)
        .then((response)=>{
            if(response.isSuccess){
                setState(response.data.payload)
            }
        })
        .catch((error)=>{console.log('error',error)
        return null})
}
