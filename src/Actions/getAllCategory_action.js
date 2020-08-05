import api from "../API/api";

export const getAllCategory = async (setState)=>{
    api.get('https://api.itedu.me/category/all',{},).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
