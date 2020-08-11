import api from "../API/api";

export const deleteHistory=async (item,token)=>{
    console.log(item)
    api.delete(`https://api.itedu.me/course/delete-search-history/${item.id}`,{},token).then((response)=>{
        console.log('deleteHistory',response)
        if(response.isSuccess){
        }
    })
}
