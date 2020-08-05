import api from "../API/api";

export  const getContinueLearning =async (token,setState)=>{
    api.get(`https://api.itedu.me/user/get-process-courses`,{},token).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
