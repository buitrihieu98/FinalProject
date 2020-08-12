import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity,Image, View, StyleSheet,Text } from 'react-native';
import {Rating} from 'react-native-elements';
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";


const SectionCoursesItem = (props) => {
    const {theme} = useContext(ThemeContext)
    const authentication = useContext(AuthenticationContext)
    const[didBuy,setDidBuy]=useState(false)
    useEffect(()=>{
        api.get(`https://api.itedu.me/user/check-own-course/${props.item.id}`,{},authentication.state.token)
            .then((response)=>{
                if(response.isSuccess){
                    setDidBuy(response.data.payload.isUserOwnCourse)
                }})
            .catch((error)=>{console.log('error',error)})
    },[])

    const onPressItem=()=>{
        //api check own courses
        if(didBuy){
            props.navigation.push("CourseDetail", {item:props.item})
        }
        else{
            props.navigation.push("CourseDetailToBuy", {item:props.item})
        }
    }
  return (
      <TouchableOpacity style={{...styles.container,backgroundColor:theme.itemBackground}} onPress={onPressItem}>
          <Image style={styles.video}
                 source={{uri: props.item.imageUrl}}>
          </Image>
          <View style={{margin:5}}>
              <Text style={styles.coreInfo}>{props.item.title}</Text>
              <Text style={styles.subInfo}>{props.item['instructor.user.name']}</Text>
              <Text style={styles.subInfo}>{`Price: ${props.item.price} vnd . Total hours:${props.item.totalHours}`}</Text>
              <View style={{flexDirection:'row'}}>
                  <Rating imageSize={18} tintColor={theme.itemBackground} ratingBackgroundColor={theme.foreground} type={'custom'} readonly={true} ratingCount={5}  startingValue={props.item.contentPoint} style={styles.rating} />
              </View>
          </View>
      </TouchableOpacity>

  )
};

const styles = StyleSheet.create({
    container:{
        margin:5,
        width:220,
        height:220,
        backgroundColor:'linen',
        alignItems:'center'
    },
    video:{
        width:'100%',
        height: '50%',
    },
    coreInfo:{
        fontSize:15,
        fontWeight:'bold'
    },
    subInfo:{
        fontSize: 15,
        color:'darkgray'
    },
    rating:{
        margin:5,
        alignSelf:'center'
    }

});



export default SectionCoursesItem
