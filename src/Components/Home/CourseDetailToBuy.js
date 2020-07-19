import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, ScrollView} from 'react-native';
import MyRating from "../Home/Rating";
import AuthorList from "../Home/AuthorList";
import ViewMoreText from 'react-native-view-more-text';
import {LocalDataContext} from "../../provider/localDataProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";


const CourseDetailToBuy = (props) => {
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

    props.navigation.setOptions({title: item.title})

    const buttonBookmark=<TouchableOpacity onPress={onPressLike} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-heart.png')}></Image>
        <Text style={styles.buttonText}>Like</Text>
    </TouchableOpacity>
    const buttonBookmarked=<TouchableOpacity onPress={onPressLike} style={{...styles.button,backgroundColor:theme.background}}>
        <Image style={styles.icon} source={require('../../../assets/icon-hearted.png')}></Image>
        <Text style={styles.buttonText}>Unlike</Text>
    </TouchableOpacity>

    const onPressBuy=()=> {
        api.post('https://api.itedu.me/payment/get-free-courses',{courseId:item.id},authentication.state.token)
            .then((response)=>{if(response.isSuccess){
                props.navigation.push("CourseDetail", {item:props.item})
            }})
            .catch((error)=>{console.log('error',error)})

    }

    return (
        <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
            {/*video*/}
            <Image style={styles.video} source={{uri: detail.imageUrl}}></Image>
            <Text style={styles.courseTitle}>{detail.title}</Text>
            <View style={styles.infoContainer}>
                {/*<AuthorList navigation={props.navigation} list={detail.instructorName}></AuthorList>*/}
                <View style={styles.subInfoContainer}>
                    {/*<Text style={styles.subInfo}>{`${item.level} . ${item.releasedDate} . ${item.duration}`}</Text>*/}
                    <Text style={styles.subInfo}>{`Price: ${detail.price}$ . Total hours: ${detail.totalHours}`}</Text>
                    <MyRating item={item}></MyRating>
                </View>
                <View style={styles.buttonsContainer}>
                    {liked===false?buttonBookmark:buttonBookmarked}
                    <TouchableOpacity style={{...styles.button,backgroundColor:theme.background}} onPress={onPressBuy}>
                        <Image style={styles.icon} source={require('../../../assets/icon-buy.png')}></Image>
                        <Text style={styles.buttonText}>Buy</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={{...styles.button,backgroundColor:theme.background}}>*/}
                    {/*    <Image style={styles.icon} source={require('../../../assets/icon-download.png')}></Image>*/}
                    {/*    <Text style={styles.buttonText}>Download</Text>*/}
                    {/*</TouchableOpacity>*/}
                </View>
                {/*<View style={{marginLeft:10}}>*/}
                {/*    <ViewMoreText numberOfLines={3}  textStyle={styles.subInfo}>*/}
                {/*        /!*<Text>Introduction of this course test test testtesttesttesttesttesttest test test testv  test test  test test test*!/*/}
                {/*        /!*    Introduction of this course test test testtes ttesttesttesttest test test test testv  test test  test test test*!/*/}
                {/*        /!*    Introduction of this course test test testt esttest t es tt esttesttest test test testv  test test  test test test*!/*/}
                {/*        /!*    Introduction of this course test test testtestt e sttestte sttesttest test test testv  test test  test test test*!/*/}
                {/*        /!*    Introduction of this course test test testtesttesttestte sttesttest test test testv  test test  test test test*!/*/}
                {/*        /!*    Introduction of this course test test testt esttesttesttesttesttest test test testv  test test  test test test*!/*/}
                {/*        /!*</Text>*!/*/}
                {/*        <Text> {detail.description}</Text>*/}
                {/*    </ViewMoreText>*/}
                {/*</View>*/}
                {/*<LessonList item={lessons}/>*/}
                {/*<LessonList item={detail.section}/>*/}
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
export default CourseDetailToBuy
