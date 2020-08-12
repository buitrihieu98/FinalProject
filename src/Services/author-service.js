import api from "../API/api";

export const getAuthorDetail = async(item,setState,setOk) =>{
    api.get(`https://api.itedu.me/instructor/detail/${item.id}`,{},)
        .then((response)=>{
            if(response.isSuccess){
                setState(response.data.payload)
                setOk(true)
            }})
        .catch((error)=>{console.log('error',error)})
    api.get(`https://api.itedu.me/instructor/detail/${item.userId}`,{},)
        .then((response)=>{
            if(response.isSuccess){
                setState(response.data.payload)
                setOk(true)
            }})
        .catch((error)=>{console.log('error',error)})
    api.get(`https://api.itedu.me/instructor/detail/${item.instructorId}`,{},)
        .then((response)=>{
            if(response.isSuccess){
                setState(response.data.payload)
                setOk(true)
            }})
        .catch((error)=>{console.log('error',error)})
}
export const getInstructorList = async(setState)=>{
    api.get('https://api.itedu.me/instructor',{},).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
