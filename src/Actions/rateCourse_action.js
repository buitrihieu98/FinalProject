import api from "../API/api";

export const rateCourse=async (id,rating,comment,token,setComment)=>{
    api.post('https://api.itedu.me/course/rating-course',{courseId: id,
        formalityPoint: rating,
        contentPoint: rating,
        presentationPoint: rating,
        content: comment},token).then((response)=>{
        if(response.isSuccess){
            setComment('')
        }
    })
}
