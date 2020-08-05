import api from "../API/api";

export const getTopRateCourses =async(setState)=>{
    api.post('https://api.itedu.me/course/top-rate',{
        limit: 10,  page: 1
    },)
        .then((response)=>{if(response.status===200){
            setState(response.data.payload)}
        else{
                console.log('Failed : ',response.status)
            }
        }).catch((error)=>{
        console.log('failed ',error)
    })
}
