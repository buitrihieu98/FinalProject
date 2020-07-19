import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, ScrollView} from 'react-native';
import MyRating from "../Home/Rating";
import AuthorList from "../Home/AuthorList";
import ViewMoreText from 'react-native-view-more-text';
import LessonList from "./LessionList";
import {LocalDataContext} from "../../provider/localDataProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";


const CourseDetail = (props) => {
    let item=props.route.params.item
    const [detail,setDetail]=useState({})
    const authentication = useContext(AuthenticationContext)
    // const userInfo=authentication.userInfo
    const {theme} = useContext(ThemeContext)
    const [liked,setLiked]=useState(false)
    const [free,setFree]=useState(false)

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

    },[])

    const onPressLike = ()=>{
        api.post('https://api.itedu.me/user/like-course',{
            courseId: detail.id
        },authentication.state.token)
        setLiked(!liked)
    }

    //const [faveList,setFaveList] = useState(userInfo.favoritesList)
    props.navigation.setOptions({title: item.title})
    // const lessons = [
    //     {
    //         name: 'Course Overview',
    //         totalTime: '2:04',
    //         contentList: [{name: 'Course Overview', time: '2:04'}],
    //     },
    //     {
    //         name: 'Getting Started with Angular',
    //         totalTime: '38:45',
    //         contentList: [{name: 'Introduction', time: '2:55'},
    //             {name: 'Practise Exercises', time: '3:25',},
    //             {name: 'Introduction', time: '2:55'},
    //             {name: 'Practise Exercises', time: '3:25'}, {
    //             name: 'Introduction',
    //             time: '2:55',
    //         }, {name: 'Practise Exercises', time: '3:25'}, {
    //             name: 'Introduction',
    //             time: '2:55',
    //         }, {name: 'Practise Exercises', time: '3:25'}, {
    //             name: 'Introduction',
    //             time: '2:55',
    //         }],
    //     },]
    //"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //     "title": "Lập trình Android toàn tập",
    //     "subtitle": "Hướng dẫn Reactjs, React Router 4, Animations, Authentication, BDD và nhiều hơn nữa!",
    //     "price": 249000,
    //     "description": "Lập trình Android không khó, vì khóa học này sẽ hướng dẫn bạn chi tiết về lập trình Android, cung cấp thủ thuật về ASO giúp bạn tăng thu nhập với lập trình Android.",
    //     "requirement": [
    //       "thông minh",
    //       "đã biết lập trình cơ bản"
    //     ],
    //     "learnWhat": [
    //       "Tự tin phát triển những ứng dụng Android, game Android",
    //       "Biết cách upload ứng dụng Android lên Google Play",
    //       "Kiếm tiền từ các ứng dụng trên Google Play",
    //       "ASO - tối ưu ứng dụng lên TOP tìm kiếm từ khoá"
    //     ],
    //     "soldNumber": 5,
    //     "ratedNumber": 5,
    //     "videoNumber": 5,
    //     "totalHours": 5,
    //     "formalityPoint": 5,
    //     "contentPoint": 5,
    //     "presentationPoint": 5,
    //     "imageUrl": "https://developer.android.com/courses/images/android-for-developers.svg",
    //     "promoVidUrl": "https://developer.android.com/courses/images/android-for-developers.svg",
    //     "status": "PENDING",
    //     "isDeleted": true,
    //     "isHidden": true,
    //     "createdAt": "2020-07-07T07:16:46.488Z",
    //     "updatedAt": "2020-07-07T07:16:46.488Z",
    //     "instructorId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //     "instructorName": "string",
    //     "section": [
    //       {
    //         "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //         "courseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //         "numberOrder": 0,
    //         "name": "string",
    //         "isDeleted": true,
    //         "createdAt": "2020-07-07T07:16:46.488Z",
    //         "updatedAt": "2020-07-07T07:16:46.488Z",
    //         "lesson": [
    //           {
    //             "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //             "courseId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //             "sectionId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //             "numberOrder": 0,
    //             "name": "string",
    //             "content": "string",
    //             "videoName": "string",
    //             "captionName": "string",
    //             "hours": 0,
    //             "isPreview": true,
    //             "isDeleted": true,
    //             "createdAt": "2020-07-07T07:16:46.488Z",
    //             "updatedAt": "2020-07-07T07:16:46.488Z",
    //             "resource": [
    //               {
    //                 "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //                 "lessonId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //                 "name": "string",
    //                 "url": "string",
    //                 "createdAt": "2020-07-07T07:16:46.488Z",
    //                 "updatedAt": "2020-07-07T07:16:46.488Z"
    //               }
    //             ]
    //           }
    //         ]
    //       }
    //     ]


    // const onPressBookmark = ()=>{
    //     if(item.bookmark===false){
    //         if(userInfo.favoritesList.includes(item)===false){
    //             userInfo.favoritesList.push(item)
    //             item.bookmark=true
    //         }
    //     }
    //     setBookmarked(!bookmarked)
    //
    // }
    // const onPressRemove =()=>{
    //     if(item.bookmark===true){
    //         if(userInfo.favoritesList.length>0){
    //             let index = userInfo.favoritesList.indexOf(item)
    //             if(index>-1){
    //                 userInfo.favoritesList.splice(index, 1)
    //             }
    //             item.bookmark=false
    //             setBookmarked(!bookmarked)
    //
    //         }
    //     }
    // }
    // const onPressBookmark = ()=>{
    //     let list = favoritesList
    //     if(item.bookmark===false){
    //         if(list.includes(item)===false){
    //             list.push(item)
    //             item.bookmark=true
    //             setFavoritesList(list)
    //         }
    //     }
    //     setBookmarked(!bookmarked)
    //
    //
    // }
    // const onPressRemove =()=>{
    //     let list = favoritesList
    //     if(item.bookmark===true){
    //         if(list.length>0){
    //             let index = list.indexOf(item)
    //             if(index>-1){
    //                 list.splice(index, 1)
    //             }
    //             item.bookmark=false
    //             setBookmarked(!bookmarked)
    //             setFavoritesList(list)
    //         }
    //     }
    // }
    const buttonBookmark=<TouchableOpacity onPress={onPressLike} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-heart.png')}></Image>
        <Text style={styles.buttonText}>Like</Text>
    </TouchableOpacity>
    const buttonBookmarked=<TouchableOpacity onPress={onPressLike} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-hearted.png')}></Image>
        <Text style={styles.buttonText}>Unlike</Text>
    </TouchableOpacity>
  return (
      <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
          {/*video*/}
          <Image style={styles.video} source={{uri: detail.imageUrl}}></Image>
          <Text style={styles.courseTitle}>{detail.title}</Text>
          <View style={styles.infoContainer}>
              {/*<AuthorList navigation={props.navigation} list={item.author}></AuthorList>*/}
              {/*<AuthorList navigation={props.navigation} list={detail.instructorName}></AuthorList>*/}
              <View style={styles.subInfoContainer}>
                  {/*<Text style={styles.subInfo}>{`${item.level} . ${item.releasedDate} . ${item.duration}`}</Text>*/}
                  <Text style={styles.subInfo}>{`Price: ${detail.price}$ . Total hours: ${detail.totalHours}`}</Text>
                  <MyRating item={item}></MyRating>
              </View>
              <View style={styles.buttonsContainer}>
                  {liked===false?buttonBookmark:buttonBookmarked}
                  <TouchableOpacity style={{...styles.button,backgroundColor:theme.background}}>
                      <Image style={styles.icon} source={require('../../../assets/icon-channel.png')}></Image>
                      <Text style={styles.buttonText}>Add to Channel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{...styles.button,backgroundColor:theme.background}}>
                      <Image style={styles.icon} source={require('../../../assets/icon-download.png')}></Image>
                      <Text style={styles.buttonText}>Download</Text>
                  </TouchableOpacity>
              </View>
              <View style={{marginLeft:10}}>
                  <ViewMoreText numberOfLines={3}  textStyle={styles.subInfo}>
                      {/*<Text>Introduction of this course test test testtesttesttesttesttesttest test test testv  test test  test test test*/}
                      {/*    Introduction of this course test test testtes ttesttesttesttest test test test testv  test test  test test test*/}
                      {/*    Introduction of this course test test testt esttest t es tt esttesttest test test testv  test test  test test test*/}
                      {/*    Introduction of this course test test testtestt e sttestte sttesttest test test testv  test test  test test test*/}
                      {/*    Introduction of this course test test testtesttesttestte sttesttest test test testv  test test  test test test*/}
                      {/*    Introduction of this course test test testt esttesttesttesttesttest test test testv  test test  test test test*/}
                      {/*</Text>*/}
                      <Text> {detail.description}</Text>
                  </ViewMoreText>
              </View>
              {/*<LessonList item={lessons}/>*/}
              <LessonList item={detail.section}/>
          </View>
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
