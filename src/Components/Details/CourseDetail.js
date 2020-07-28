import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    Image,
    ScrollView,
    ActivityIndicator,
    Dimensions
} from 'react-native';
import MyRating from "../Home/Rating";
import AuthorList from "../Home/AuthorList";
import ViewMoreText from 'react-native-view-more-text';
import LessonList from "./LessionList";
import {LocalDataContext} from "../../provider/localDataProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import AuthorItems from "../Home/AuthorItems";
import YoutubePlayer from 'react-native-youtube-iframe';
import {Video} from "expo-av";
import getYouTubeID from 'get-youtube-id';

const CourseDetail = (props) => {
    const WINDOW_WIDTH = Dimensions.get('window').width;
    const playerRef=useRef(null)
    let item=props.route.params.item
    const [detail,setDetail]=useState({})
    const [processCourse,setProcesCourse]=useState(0)
    const authentication = useContext(AuthenticationContext)
    // const userInfo=authentication.userInfo
    const {theme} = useContext(ThemeContext)
    const [liked,setLiked]=useState(false)
    const [isLoading,setIsLoading] = useState(true)
    const [hasPromo,setHasPromo] = useState(false)
    const [video, setVideo] = useState({videoUrl:'',currentTime:0,isFinish:false})
    const [isYoutube,setIsYoutube]=useState(false)

    useEffect(()=>{
        api.get(`https://api.itedu.me/course/detail-with-lesson/${item.id}`,{},authentication.state.token)
            .then((response)=>{if(response.isSuccess){
                setDetail(response.data.payload)
        }})
            .catch((error)=>{console.log('error',error)})

        api.get(`https://api.itedu.me/user/get-course-like-status/${item.id}`,{},authentication.state.token)
            .then((response)=>{if(response.isSuccess){
            setLiked(response.data.likeStatus)
        }})
        api.get(`https://api.itedu.me/user/process-course/${item.id}`,{},authentication.state.token)
            .then((response)=>{if(response.isSuccess){
                setProcesCourse(response.data.payload)
            }})
        if(detail!=={}){
            setIsLoading(false)
        }
    },[])
    useEffect(()=>{
        setVideo({videoUrl: detail.promoVidUrl,currentTime:0,isFinish:false})
    },[detail])
    useEffect(()=>{
        if((video.videoUrl!=='')&&(video.videoUrl!==undefined)&&(video.videoUrl!==null)){
            setHasPromo(true)
            setIsYoutube(video.videoUrl.includes("youtu"))
            console.log('video la gi',video)
        }
    },[video])

    const onPressLike = ()=>{
        api.post('https://api.itedu.me/user/like-course',{
            courseId: detail.id
        },authentication.state.token)
        setLiked(!liked)
    }

    const buttonBookmark=<TouchableOpacity onPress={onPressLike} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-heart.png')}></Image>
        <Text style={styles.buttonText}>Like</Text>
    </TouchableOpacity>
    const buttonBookmarked=<TouchableOpacity onPress={onPressLike} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-hearted.png')}></Image>
        <Text style={styles.buttonText}>Unlike</Text>
    </TouchableOpacity>
  return (
      isLoading?<View>
              <ActivityIndicator size="large" />
          </View>:
      <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
          {hasPromo?(isYoutube?<YoutubePlayer ref={playerRef}
                                                 height={300}
                                                 width={400}
                                                 videoId={getYouTubeID(video.videoUrl)}
                                                 play={true}
                                                 onChangeState={event => console.log(event)}
                                                 onReady={() => console.log("ready")}
                                                 onError={e => console.log(e)}
                                                 onPlaybackQualityChange={q => console.log(q)}
                                                 volume={50}
                                                 playbackRate={1}
                                                 playerParams={{
                                                     cc_lang_pref: "us",
                                                     showClosedCaptions: true
                                                 }}></YoutubePlayer> :<Video
              source={{ uri: video.videoUrl }}
              rate={1.0}
              useNativeControls={true}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{ width: WINDOW_WIDTH, height: 300 }}
          />):<Image style={styles.video} source={{uri: detail.imageUrl}}></Image>}
          <Text style={styles.courseTitle}>{detail.title}</Text>
              <AuthorItems navigation={props.navigation} item={detail}></AuthorItems>
              <View style={styles.subInfoContainer}>
                  {/*<Text style={styles.subInfo}>{`${item.level} . ${item.releasedDate} . ${item.duration}`}</Text>*/}
                  <Text style={styles.subInfo}>{`Price: ${detail.price} vnd . Total hours: ${detail.totalHours}`}</Text>
                  <MyRating item={detail}></MyRating>
                  <Text style={styles.subInfo}>{`Your Progress: ${processCourse}%`}</Text>
              </View>
              <View style={styles.buttonsContainer}>
                  {liked===false?buttonBookmark:buttonBookmarked}
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
