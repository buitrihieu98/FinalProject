import api from "../API/api";

export const search = async(keyword, setCourses,setAuthors,token)=>{
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
            setCourses(response.data.payload.courses.data)
            setAuthors(response.data.payload.instructors.data)
        }
    })
}
