import React, {useContext, useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, ScrollView} from 'react-native';
import MyRating from "../Home/Rating";
import AuthorList from "../Home/AuthorList";
import ViewMoreText from 'react-native-view-more-text';
import LessonList from "./LessionList";
import {LocalDataContext} from "../../provider/localDataProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";


const CourseDetail = (props) => {
    let item=props.route.params.item
    const {authentication, setAuthentication,favoritesList, setFavoritesList} = useContext(AuthenticationContext)
    const userInfo=authentication.userInfo
    const {theme} = useContext(ThemeContext)
    const [bookmarked,setBookmarked] = useState(item.bookmark)
    //const [faveList,setFaveList] = useState(userInfo.favoritesList)
    props.navigation.setOptions({title: item.title})
    const lessons = [
        {
            name: 'Course Overview',
            totalTime: '2:04',
            contentList: [{name: 'Course Overview', time: '2:04'}],
        },
        {
            name: 'Getting Started with Angular',
            totalTime: '38:45',
            contentList: [{name: 'Introduction', time: '2:55'}, {name: 'Practise Exercises', time: '3:25',}, {name: 'Introduction', time: '2:55'}, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }, {name: 'Practise Exercises', time: '3:25'}, {
                name: 'Introduction',
                time: '2:55',
            }],
        },]

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
    const onPressBookmark = ()=>{
        let list = favoritesList
        if(item.bookmark===false){
            if(list.includes(item)===false){
                list.push(item)
                item.bookmark=true
                setFavoritesList(list)
            }
        }
        setBookmarked(!bookmarked)

    }
    const onPressRemove =()=>{
        let list = favoritesList
        if(item.bookmark===true){
            if(list.length>0){
                let index = list.indexOf(item)
                if(index>-1){
                    list.splice(index, 1)
                }
                item.bookmark=false
                setBookmarked(!bookmarked)
                setFavoritesList(list)
            }
        }
    }
    const buttonBookmark=<TouchableOpacity onPress={onPressBookmark} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-bookmark.png')}></Image>
        <Text style={styles.buttonText}>Bookmark</Text>
    </TouchableOpacity>
    const buttonBookmarked=<TouchableOpacity onPress={onPressRemove} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-bookmarked.png')}></Image>
        <Text style={styles.buttonText}>Unbookmark</Text>
    </TouchableOpacity>
  return (
      <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
          {/*video*/}
          <Image style={styles.video} source={require('../../../assets/background-2.jpg')}></Image>
          <Text style={styles.courseTitle}>{item.title}</Text>
          <View style={styles.infoContainer}>
              <AuthorList navigation={props.navigation} list={item.author}></AuthorList>
              <View style={styles.subInfoContainer}>
                  <Text style={styles.subInfo}>{`${item.level} . ${item.releasedDate} . ${item.duration}`}</Text>
                  <MyRating item={item}></MyRating>
              </View>
              <View style={styles.buttonsContainer}>
                  {/*<TouchableOpacity onPress={onPressBookmark} style={styles.button}>*/}
                  {/*    <Image style={styles.icon} source={require('../../../assets/icon-bookmark.png')}></Image>*/}
                  {/*    <Text style={styles.buttonText}>Bookmark</Text>*/}
                  {/*</TouchableOpacity>*/}
                  {/*{item.bookmark===false?buttonBookmark:buttonBookmarked}*/}
                  {bookmarked===false?buttonBookmark:buttonBookmarked}
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
                  <ViewMoreText numberOfLines={3} textStyle={styles.subInfo}>
                      <Text>Introduction of this course test test testtesttesttesttesttesttest test test testv  test test  test test test
                          Introduction of this course test test testtes ttesttesttesttest test test test testv  test test  test test test
                          Introduction of this course test test testt esttest t es tt esttesttest test test testv  test test  test test test
                          Introduction of this course test test testtestt e sttestte sttesttest test test testv  test test  test test test
                          Introduction of this course test test testtesttesttestte sttesttest test test testv  test test  test test test
                          Introduction of this course test test testt esttesttesttesttesttest test test testv  test test  test test test
                      </Text>
                  </ViewMoreText>
              </View>
              <LessonList item={lessons}/>
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
