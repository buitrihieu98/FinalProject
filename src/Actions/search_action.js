import api from "../API/api";

export const search = async(keyword, setCourses,setAuthors,token,setNoCourses,setNoAuthors,setNoAll)=>{
    api.post('https://api.itedu.me/course/searchV2',{
        token:token,
        keyword: keyword,
        opt: {
            sort: {
                attribute: "price",
                rule: "ASC"
            },
            category: [
            ], time: [
            ], price: [
            ]
        },
        limit: 10,
        offset: 0
    }).then((response)=>{
        console.log('search',response)
        if(response.isSuccess){
            if(response.data.payload.courses.total===0){
                setNoCourses(true)
            }
            else{setNoCourses(false)}
            if(response.data.payload.instructors.total===0){
                setNoAuthors(true)
            }
            else{setNoAuthors(false)}
            if((response.data.payload.courses.total===0)&&(response.data.payload.instructors.total===0)){
                setNoAll(true)
            }
            else{setNoAll(false)}
            setCourses(response.data.payload.courses.data)
            setAuthors(response.data.payload.instructors.data)
        }
    })
}
