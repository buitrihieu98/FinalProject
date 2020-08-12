import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    Share,
    ScrollView,
    ActivityIndicator,
    Dimensions, Slider,
} from 'react-native';
import MyRating from "../Home/Rating";
import ViewMoreText from 'react-native-view-more-text';
import LessonList from "./LessionList";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
import AuthorItems from "../Home/AuthorItems";
import YoutubePlayer from 'react-native-youtube-iframe';
import {Video} from "expo-av";
import getYouTubeID from 'get-youtube-id';
import {getDetailCourse, getLastWatchedLesson} from "../../Services/courses-service";
import {getCourseLikeStatus, getProcess, likeCourse} from "../../Services/user-service";
import {downloadVideo} from "../../Services/download-service";

const CourseDetail = (props) => {
    const WINDOW_WIDTH = Dimensions.get('window').width;
    const playerRef=useRef(null)
    let item=props.route.params.item
    const [detail,setDetail]=useState({})
    const [processCourse,setProcesCourse]=useState(0)
    const authentication = useContext(AuthenticationContext)
    const {theme} = useContext(ThemeContext)
    const [liked,setLiked]=useState(false)
    const [isLoading,setIsLoading] = useState(true)
    const [hasPromo,setHasPromo] = useState(false)
    const [video, setVideo] = useState({videoUrl:'',currentTime:0,isFinish:false})
    const [isYoutube,setIsYoutube]=useState(false)
    const [cateId,setCateId]=useState([])
    const [canDown,setCanDown]=useState(true)
    const [isDownloading,setIsDownloading]=useState(false)
    const [progressDown,setProgressDown]=useState(0)
    // const handleVideoRef = (component) => {
    //     const playbackObject = component
    //     if(playbackObject){
    //         playbackObject.playFromPositionAsync(video.currentTime).then(r => {})
    //         playbackObject.pauseAsync().then(r => {})
    //     }
    // }
    useEffect(()=>{
        getDetailCourse(item, authentication.state.token, setDetail).then(r  =>{})
        getCourseLikeStatus(item, authentication.state.token, setLiked).then(r =>{} )
        getProcess(item, authentication.state.token, setProcesCourse).then(r =>{} )
        getLastWatchedLesson(item.id,authentication.state.token,setVideo).then(r =>{} )
        if(detail!=={}){
            setIsLoading(false)
            console.log(detail)
        }
    },[])
    useEffect(()=>{
        if((video.videoUrl!=='')&&(video.videoUrl!==undefined)&&(video.videoUrl!==null)){
            setHasPromo(true)
            setIsYoutube(video.videoUrl.includes("youtu"))
        }
        if(video.videoUrl.includes("mp4")){
            setCanDown(true)
        }
        else{
            setCanDown(false)
        }
    },[video])

    const onPressRelated=()=>{
        props.navigation.push("RelatedCourses",{item:cateId})
    }
     const onPressShare =async () => {
         try {
             const result = await Share.share({
                 message:
                     `https://itedu.me/course-detail/${detail.id}`,
             });
             if (result.action === Share.sharedAction) {
                 if (result.activityType) {
                     // shared with activity type of result.activityType
                 } else {
                     // shared
                 }
             } else if (result.action === Share.dismissedAction) {
                 // dismissed
             }
         } catch (error) {
             alert(error.message);
         }}

    const onPressLike = ()=>{
        likeCourse(item, authentication.state.token).then(r =>{})
        setLiked(!liked)
    }
    // const onPressDownload=()=>{
    //     downloadVideo(video, setProgressDown).then(r =>{})
    //
    // }
    const onPressComment=()=>{
        props.navigation.navigate("RatingsAndComments",{item:item})
    }
    const buttonBookmark=<TouchableOpacity onPress={onPressLike} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-heart.png')}></Image>
        <Text style={styles.buttonText}>Like</Text>
    </TouchableOpacity>
    const buttonBookmarked=<TouchableOpacity onPress={onPressLike} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-hearted.png')}></Image>
        <Text style={styles.buttonText}>Unlike</Text>
    </TouchableOpacity>
    const buttonDown=<TouchableOpacity onPress={onPressDownload} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-download.png')}>
        </Image>
        <Text style={styles.buttonText}>Download this video</Text>
    </TouchableOpacity>
    // const progressBar =<Progress.Bar progress={progressDown} width={'100%'} />
  return (
      isLoading?
          <View>
              <ActivityIndicator size="large" />
          </View>:
      <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
          {hasPromo?
              (isYoutube?
                  <YoutubePlayer ref={playerRef}
                                 height={300}
                                 width={400}
                                 videoId={getYouTubeID(video.videoUrl)}
                                 play={false}
                                 volume={80}
                                 playbackRate={1}
                                 playerParams={{
                                     cc_lang_pref: "us",
                                     showClosedCaptions: true
                                 }}>
                  </YoutubePlayer> :
                  <Video
                      source={{ uri: video.videoUrl }}
                      rate={1.0}
                      // ref={(component) => handleVideoRef(component)}
                      useNativeControls={true}
                      volume={2.0}
                      isMuted={false}
                      resizeMode="cover"
                      shouldPlay={true}
                      style={{ width: WINDOW_WIDTH, height: 300 }}
                  />
                  )
              :<Image style={styles.video} source={{uri: detail.imageUrl}}></Image>}
          {/*{canDown? buttonDown: <View></View>}*/}
          {/*{isDownloading?progressBar:<View></View>}*/}
          {/*<Slider disabled={false} minimumTrackTintColor={theme.foreground} maximumTrackTintColor={theme.background}*/}
          {/*        maximumValue={100} minimumValue={0} value={progressDown} ></Slider>*/}
          <Text style={styles.courseTitle}>{detail.title}</Text>
              <AuthorItems navigation={props.navigation} item={detail}></AuthorItems>
              <View style={styles.subInfoContainer}>
                  <Text style={styles.subInfo}>{`Price: ${detail.price} vnd . Total hours: ${detail.totalHours}`}</Text>
                  <MyRating item={detail}></MyRating>
                  <Text style={styles.subInfo}>{`Your Progress: ${processCourse}%`}</Text>
              </View>
              <View style={styles.buttonsContainer}>
                  {liked===false?buttonBookmark:buttonBookmarked}
                  <TouchableOpacity onPress={onPressRelated} style={{...styles.button,backgroundColor:theme.background}}>
                      <Image style={styles.icon} source={require('../../../assets/icon-related.png')}></Image>
                      <Text style={styles.buttonText}>Related courses</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onPressComment} style={{...styles.button,backgroundColor:theme.background}}>
                      <Image style={styles.icon} source={require('../../../assets/icon-comments.png')}></Image>
                      <Text style={styles.buttonText}>Ratings & Comments</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={onPressShare} style={{...styles.button,backgroundColor:theme.background}}>
                      <Image style={styles.icon} source={require('../../../assets/icon-share.png')}></Image>
                      <Text style={styles.buttonText}>Share</Text>
                  </TouchableOpacity>
              </View>
              <View style={{marginLeft:10, }}>
                  <ViewMoreText numberOfLines={3}  textStyle={styles.subInfo}>
                      <Text> {detail.description}</Text>
                  </ViewMoreText>
              </View>
              <LessonList setState={setVideo} courseId={item.id} item={detail.section}/>
      </ScrollView>
  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    video:{
        height:200,
        width:'100%',
    },
    courseTitle:{
        fontSize:25,
        margin:5,
        fontWeight:'bold'
    },
    infoContainer:{
    },
    subInfo:{
        fontSize: 20,
        color:'darkgray'
    },
    subInfoContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    rating:{
      alignSelf:'center',
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    button:{
        margin:15,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:80,
    },
    icon:{
        height:40,
        width:40,
    },
    buttonText:{
        margin:5,
        fontSize:15,
    }
});
export default CourseDetail
