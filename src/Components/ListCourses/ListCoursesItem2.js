import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, Image, View, StyleSheet,Text } from 'react-native';
import {Rating} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {checkOwnCourse} from "../../Services/user-service";

const ListCoursesItem2 = (props) => {
    const authentication = useContext(AuthenticationContext)
    const[didBuy,setDidBuy]=useState(false)
    useEffect(()=>{
        checkOwnCourse(props,authentication.state.token,setDidBuy).then((r)=>{})
    },[])

    const onPressItem=()=>{
        if(didBuy){
            props.navigation.push("CourseDetail", {item:props.item})
        }
        else{
            props.navigation.push("CourseDetailToBuy", {item:props.item})
        }
    }
    const {theme} = useContext(ThemeContext)
    return (
        <TouchableOpacity style={{...styles.container,backgroundColor:theme.itemBackground}} onPress={onPressItem}>
            <Image style={styles.image}
                   source={{uri: props.item.courseImage}}>
            </Image>
            <View style={{margin:5}}>
                <Text style={{...styles.coreInfo, fontWeight:'bold'}}>{props.item.courseTitle}</Text>
                {props.item.coursePrice===undefined?<Text style={styles.subInfo}>{`Process:${props.item.process} %`}</Text>:<Text style={styles.subInfo}>{`Price:${props.item.coursePrice}`}</Text>}
                <View style={{flexDirection:'row'}}>
                    <Rating imageSize={18} tintColor={theme.itemBackground} ratingBackgroundColor={theme.foreground} type={'custom'} readonly={true} ratingCount={5}  startingValue={props.item.courseAveragePoint} style={styles.rating} />
                </View>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    container:{
        margin:5,
        backgroundColor:'linen',
        flexDirection:'row',
    },
    image:{
        alignSelf:'center',
        width:150,
        height:130,
    },
    coreInfo:{
        fontSize:15,
    },
    subInfo:{
        fontSize: 15,
        color:'darkgray'
    },
    rating:{
        marginTop:2,
    }
});
export default ListCoursesItem2
