import api from "../API/api";

export const getAuthorDetail = async(item) =>{
    api.get(`https://api.itedu.me/instructor/detail/${item.id}`,{},)
        .then((response)=>{
            if(response.isSuccess){
                return {data:response.data.payload, ok:true}
            }})
        .catch((error)=>{console.log('error',error)})
    api.get(`https://api.itedu.me/instructor/detail/${item.userId}`,{},)
        .then((response)=>{
            if(response.isSuccess){
                return {data:response.data.payload, ok:true}
            }})
        .catch((error)=>{console.log('error',error)})
    api.get(`https://api.itedu.me/instructor/detail/${item.instructorId}`,{},)
        .then((response)=>{
            if(response.isSuccess){
                return {data:response.data.payload, ok:true}
            }})
        .catch((error)=>{console.log('error',error)})
}
