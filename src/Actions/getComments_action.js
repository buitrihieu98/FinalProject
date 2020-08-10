import api from "../API/api";

export const getComments =async (item,setComments)=>{
    api.get(`https://api.itedu.me/course/get-course-detail/${item.id}/null`,{},).then((response)=>{
        console.log('comments',response)
        if(response.isSuccess){
            setComments(response.data.payload.ratings.ratingList)
        }
    })
}
