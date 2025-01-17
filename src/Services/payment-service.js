import api from "../API/api";

export const getCourseInfoForPayment = async (item,token,setDetail)=>{
    api.get(`https://api.itedu.me/payment/get-course-info/${item.id}`,{},token)
        .then((response)=>{
            console.log('response',response)
            if(response.isSuccess){
                setDetail(response.data.payload)
            }})
        .catch((error)=>{console.log('error',error)})


}
export  const getFreeCourse = async (item,token,props)=>{
    api.post('https://api.itedu.me/payment/get-free-courses', {courseId: item.id},token)
        .then((response) => {
            if (response.isSuccess) {
                props.navigation.push("CourseDetail", {item: item})
            }
        })
        .catch((error) => {
            console.log('error', error)
        })
}
