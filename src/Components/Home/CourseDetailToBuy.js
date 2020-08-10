import React, {useContext, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, ScrollView, Linking} from 'react-native';
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import AuthorItems from "./AuthorItems";
import {getFreeCourse} from "../../Actions/getFreeCourse_action";
import {getCourseInfoForPayment} from "../../Actions/getCourseInfoForPayment_action";


const CourseDetailToBuy = (props) => {
    let item=props.route.params.item
    const [detail,setDetail]=useState({})
    const authentication = useContext(AuthenticationContext)
    const {theme} = useContext(ThemeContext)
    useEffect(()=>{
        getCourseInfoForPayment(item,authentication.state.token,setDetail).then((r)=>{})
    },[])
    props.navigation.setOptions({title: item.title})

    const onPressBuy= async () => {
        if (!detail.didUserBuyCourse) {
            if (detail.price === 0) {
                getFreeCourse(item,authentication.state.token,props).then((r)=>{})
            } else {
                //link tới trang https://itedu.me/payment/{courseId}
                await Linking.openURL(`https://api.itedu.me/payment/${item.id}`)
            }
        }
    }

    return (
        <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
            <Image style={styles.video} source={{uri: item.imageUrl}}></Image>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <View style={styles.infoContainer}>
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
