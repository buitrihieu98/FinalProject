import axios from "axios";
const client = axios.create({
    timeout: 20000
})
export const downloadVideo=async (video,setProgress)=>{
    // axios({
    //     url:video.url,
    //     method:'GET',
    //     responseType:'blob'
    // }).then((response)=>{
    //     console.log(response)
    //     let blob = new Blob([response.data], {
    //             type:
    //                 "video.mp4"
    //         })
    //     let  file = new File(blob, "image.png")
    //
    // })
    let result = await client.get(video.url, {
        responseType:'blob',
        onDownloadProgress: progressEvent => {
            const total = parseFloat(progressEvent.currentTarget.responseHeaders['Content-Length'])
            const current = progressEvent.currentTarget.response.length

            let percentCompleted = Math.floor(current / total * 100)
            console.log('completed: ', percentCompleted)
            setProgress(percentCompleted)
        }
    })
        .then(res => {
            console.log("All DONE: ", res.headers)
            // let blob = new Blob([response.data], {type: "video.mp4"})
            // let  file = new File(blob, "image.png")
        })
}


