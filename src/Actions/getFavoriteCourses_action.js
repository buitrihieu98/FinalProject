import api from "../API/api";

export  const getFavoriteCourses =async (token,setState)=>{
    api.get(`https://api.itedu.me/user/get-favorite-courses`,{},token).then((response)=>{

        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
