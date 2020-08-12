import React, {useContext, useEffect, useState} from 'react';
import {TouchableOpacity, Image, View, StyleSheet,Text } from 'react-native';
import {Rating} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {checkOwnCourse} from "../../Services/user-service";

const ListCoursesItem = (props) => {
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
                   source={{uri: props.item.imageUrl}}>
            </Image>
            <View style={{margin:5}}>
                <Text style={{...styles.coreInfo, fontWeight:'bold'}}>{props.item.title}</Text>
                <Text style={styles.coreInfo}>{props.item.learnWhat}</Text>
                <Text style={styles.subInfo}>{`Price:${props.item.price}`}</Text>
                <Text style={styles.subInfo}>{`${props.item.totalHours} hours`}</Text>
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
export default ListCoursesItem
