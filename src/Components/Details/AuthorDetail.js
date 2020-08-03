import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import BackButton from "../Global/BackButton";
import {Avatar} from "react-native-elements";
import ViewMoreText from "react-native-view-more-text";
import ListCourses from "../ListCourses/ListCourses";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import MyRating from "../Home/Rating";
import {getAuthorDetail} from "../../Actions/getAuthorDetail_action";


const AuthorDetail = (props) => {
    let item=props.route.params.item
    props.navigation.setOptions({title: item.username})
    const authentication = useContext(AuthenticationContext)
    const [detail,setDetail]=useState()
    const [ok,setOk]=useState(false)
    useEffect(()=>{
        console.log('itemmmmmmmmm',item)
        api.get(`https://api.itedu.me/instructor/detail/${item.id}`,{},)
            .then((response)=>{
                if(response.isSuccess){
                    setDetail(response.data.payload)
                    setOk(true)
            }})
            .catch((error)=>{console.log('error',error)})
        api.get(`https://api.itedu.me/instructor/detail/${item.userId}`,{},)
            .then((response)=>{
                if(response.isSuccess){
                    setDetail(response.data.payload)
                    setOk(true)
                }})
            .catch((error)=>{console.log('error',error)})
        api.get(`https://api.itedu.me/instructor/detail/${item.instructorId}`,{},)
            .then((response)=>{
                if(response.isSuccess){
                    setDetail(response.data.payload)
                    setOk(true)
                }})
            .catch((error)=>{console.log('error',error)})

        // getAuthorDetail(item).then((response)=>{setDetail(response.data)
        //     setOk(response.ok)})

    },[])
    const {theme} = useContext(ThemeContext)
  return (
      ok===true?<ScrollView style={{...styles.container,backgroundColor:theme.background}}>
          <View style={styles.avatarContainer}>
              {<Avatar size={"large"} rounded={true} avatarStyle={styles.avatar} source={{uri:detail.avatar}}></Avatar>}
              <Text style={styles.username}>{detail.name}</Text>
              <Text style={styles.email}>{detail.email}</Text>
          </View>
          {/*<TouchableOpacity style={styles.followButton}>*/}
          {/*    <Text style={styles.followText}>Follow</Text>*/}
          {/*</TouchableOpacity>*/}

          <View style={{marginLeft:10,marginTop:5,alignItems:'center', justifyContent:'center'}}>
              <MyRating  item={detail}></MyRating>
              <ViewMoreText numberOfLines={3} textStyle={styles.subInfo}>
                  <Text>{detail.intro}
                  </Text>
              </ViewMoreText>
          </View>
          <Text style={styles.subTitle}>Courses of this author</Text>
          <ListCourses navigation={props.navigation} list={detail.courses}></ListCourses>
      </ScrollView>:<View></View>

  )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    avatarContainer:{
        marginTop:10,
        alignItems: 'center',
    },
    avatar:{
    },
    username:{
        margin:5,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    followButton:{
        alignSelf:'center',
        height: 50,
        backgroundColor: 'deepskyblue',
        width:'90%',
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center'
    },
    followText:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
    },
    subTitle:{
        margin:5,

        fontSize:20,
        fontWeight:'bold'
    }
});


export default AuthorDetail
