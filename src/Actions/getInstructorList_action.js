import api from "../API/api";

export const getInstructorList = async(setState)=>{
    api.get('https://api.itedu.me/instructor',{},).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
