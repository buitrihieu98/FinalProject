import api from "../API/api";

export const getVideo =async (props,content,token)=>{
    api.get(`https://api.itedu.me/lesson/video/${props.courseId}/${content.id}`,{},token).then((response)=>{
        if(response.isSuccess){
            props.setState(response.data.payload)
        }
    })
}

export const updateDone=async(lesson,token)=>{
    api.post('https://api.itedu.me/lesson/update-status',{lessonId:lesson.id},token).then((response)=>{
        console.log('updatedone',response)
        if(response.isSuccess){
            console.log('done')
        }
    })
}
export const getDetailLesson=async(props,content,token)=>{
    api.get(`https://api.itedu.me/lesson/detail/${props.courseId}/${content.id}`,{},token).then((response)=>{
        if(response.isSuccess){
            props.setLesson(response.data.payload)
        }
    })
}
export const updateTime=async(lesson,currentTime,token)=>{
        api.put('https://api.itedu.me/lesson/update-current-time-learn-video',{lessonId:lesson.id,currentTime:currentTime},token).then(r => {
            console.log('updatetime',r)
            if(r.isSuccess){
            }
        })
}
