import api from "../API/api";

export const getVideo =async (props,content,token)=>{
    api.get(`https://api.itedu.me/lesson/video/${props.courseId}/${content.id}`,{},token).then((response)=>{
        if(response.isSuccess){
            props.setState(response.data.payload)
        }
    })
}
