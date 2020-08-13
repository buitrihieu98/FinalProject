import api from "../API/api";
export const deleteHistory=async (item,token)=>{
    console.log(item)
    api.delete(`https://api.itedu.me/course/delete-search-history/${item.id}`,{},token).then((response)=>{
        console.log('deleteHistory',response)
        if(response.isSuccess){
        }
    })
}
export const getComments =async (item,setComments)=>{
    api.get(`https://api.itedu.me/course/get-course-detail/${item.id}/null`,{},).then((response)=>{
        console.log('comments',response)
        if(response.isSuccess){
            setComments(response.data.payload.ratings.ratingList)
        }
    })
}
export const getDetailCourse =async(item,token,setState)=>{
    api.get(`https://api.itedu.me/course/detail-with-lesson/${item.id}`,{},token)
        .then((response)=>{
            if(response.isSuccess){
                setState(response.data.payload)
            }
        })
        .catch((error)=>{console.log('error',error)
            return null})
}
export const getLastWatchedLesson =async(courseId,token,setVideo,setLesson)=>{
    api.get(`https://api.itedu.me/course/last-watched-lesson/${courseId}`,{},token).then((response)=>{
        if(response.isSuccess){
            setVideo({videoUrl:response.data.payload.videoUrl,currentTime:response.data.payload.currentTime,isFinish:response.data.payload.isFinish})
            api.get(`https://api.itedu.me/lesson/detail/${courseId}/${response.data.payload.lessonId}`,{},token).then((response2)=>{
                if(response2.isSuccess){
                    setLesson(response2.data.payload)
                }
            })
        }
    })
}
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
export const getSearchHistory=async (token,setResult)=>{
    api.get(`https://api.itedu.me/course/search-history`,{},token).then((response)=>{
        if(response.isSuccess){
            setResult(response.data.payload.data)
        }
    })
}
export const getTopRateCourses =async(setState)=>{
    api.post('https://api.itedu.me/course/top-rate',{
        limit: 10,  page: 1
    },)
        .then((response)=>{if(response.status===200){
            setState(response.data.payload)}
        else{
            console.log('Failed : ',response.status)
        }
        }).catch((error)=>{
        console.log('failed ',error)
    })
}
export const getTopNewCourses=async (setState)=>{
    api.post('https://api.itedu.me/course/top-new', {
        limit: 10,  page: 1
    }).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    }).catch((error)=>{
        console.log('failed ',error)
    })
}
export const getTopSellCourses =async(setState)=>{
    api.post(`https://api.itedu.me/course/top-sell`,{
        limit: 10,
        page: 1
    },).then((response)=>{
        if(response.isSuccess){
            setState(response.data.payload)
        }
    })
}
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
export const search = async(keyword, setCourses,setAuthors,token,setNoCourses,setNoAuthors)=>{
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
            setCourses(response.data.payload.courses.data)
            setAuthors(response.data.payload.instructors.data)
        }
    })
}
export const search2 = async(keyword, setCourses,setAuthors,token)=>{
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
        if(response.isSuccess){
            setCourses(response.data.payload.courses.data)
            setAuthors(response.data.payload.instructors.data)
        }
    })
}
