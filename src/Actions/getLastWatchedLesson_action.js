import api from "../API/api";

export const getLastWatchedLesson =async(courseId,token,setVideo)=>{
    api.get(`https://api.itedu.me/course/last-watched-lesson/${courseId}`,{},token).then((response)=>{
        if(response.isSuccess){
            setVideo({videoUrl:response.data.payload.videoUrl,currentTime:response.data.payload.currentTime,isFinish:response.data.payload.isFinish})
        }
    })

}
