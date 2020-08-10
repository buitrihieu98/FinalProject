import api from "../API/api";

export const getRelatedCourse=async (cateId,setResult)=>{
    api.post('https://api.itedu.me/course/search',{
        keyword: "",
        opt: {
            sort: {
                attribute: "price",
                rule: "ASC"
            },
            category: cateId
            , time: [
            ], price: [
            ]
        },
        limit: 10,
        offset: 1
    }).then((response)=>{
        if(response.isSuccess){
            setResult(response.data.payload.rows)
        }
    })
}
