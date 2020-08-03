import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, LinkingStatic as Linking} from 'react-native';
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import AuthorItems from "./AuthorItems";


const CourseDetailToBuy = (props) => {
    let item=props.route.params.item
    const [detail,setDetail]=useState({})
    const authentication = useContext(AuthenticationContext)
    // const userInfo=authentication.userInfo
    const {theme} = useContext(ThemeContext)
    useEffect(()=>{
        console.log('id',item)
        api.get(`https://api.itedu.me/payment​/get-course-info​/${item.id}`,{},authentication.state.token)
            .then((response)=>{
                console.log('response',response)
                if(response.isSuccess){
                setDetail(response.data.payload)
                console.log('detail',detail)
            }})
            .catch((error)=>{console.log('error',error)})


    },[])
    props.navigation.setOptions({title: item.title})

    const onPressBuy=()=> {
        if(!detail.didUserBuyCourse){
            if(detail.price===0){
                api.post('https://api.itedu.me/payment/get-free-courses',{courseId:item.id},authentication.state.token)
                    .then((response)=>{
                        if(response.isSuccess){
                            props.navigation.push("CourseDetail", {item:item})
                        }})
                    .catch((error)=>{console.log('error',error)})
            }
            else{
                //link tới trang https://itedu.me/payment/{courseId}
                Linking.openURL(`https://api.itedu.me/payment/${item.id}`)
            }
        }
    }

    return (
        <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
            <Image style={styles.video} source={{uri: item.imageUrl}}></Image>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <View style={styles.infoContainer}>
                {/*<AuthorList navigation={props.navigation} list={detail.instructorName}></AuthorList>*/}
                {/*<AuthorItems navigation={props.navigation} item={detail}></AuthorItems>*/}
                <TouchableOpacity  style={{...styles.button,backgroundColor:theme.itemBackground}}>
                    <Text style={styles.username}>{item['instructor.user.name']}</Text>
                </TouchableOpacity>
                <View style={styles.subInfoContainer}>
                    <Text style={styles.subInfo}>{`Price: ${item.price} vnd`}</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={{...styles.button,backgroundColor:theme.background}} onPress={onPressBuy}>
                        <Image style={styles.icon} source={require('../../../assets/icon-buy.png')}></Image>
                        <Text style={styles.buttonText}>Buy</Text>
                    </TouchableOpacity>
                </View>
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
        borderRadius: 25,
    },
    icon:{
        height:40,
        width:40,
    },
    buttonText:{
        margin:5,
        fontSize:15,
    },
    username:{
        margin:5,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
export default CourseDetailToBuy
