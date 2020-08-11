import api from "../API/api";

export const getSearchHistory=async (token,setResult)=>{
    api.get(`https://api.itedu.me/course/search-history`,{},token).then((response)=>{
        if(response.isSuccess){
            setResult(response.data.payload.data)
        }
    })
}
