import api from "../API/api";

export const getTopSellCourses =async(setState)=>{
    api.post(`https://api.itedu.me/course/top-sell`,{
        limit: 10,
        page: 1
    },).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
