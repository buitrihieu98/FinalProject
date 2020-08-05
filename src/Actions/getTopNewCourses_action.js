import api from "../API/api";

export const getTopNewCourses=async (setState)=>{
    api.post('https://api.itedu.me/course/top-new', {
        limit: 10,  page: 1
    }).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    }).catch((error)=>{
        console.log('failed ',error)
    })
}
