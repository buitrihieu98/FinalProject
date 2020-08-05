import api from "../API/api";

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
