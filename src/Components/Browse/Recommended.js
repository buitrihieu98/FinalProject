import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import {LocalDataContext} from "../../provider/localDataProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";

const Recommended = (props) => {
    const authentication = useContext(AuthenticationContext)
    const userInfo= authentication.state.userInfo
    const {theme} = useContext(ThemeContext)
    const[recommendList,setRecommendList]=useState([])
    useEffect(()=>{
        api.get(`https://api.itedu.me/user/recommend-course/${userInfo.id}/10/0`,{},).then((response)=>{
            if(response.isSuccess){
                setRecommendList(response.data.payload)
            }
        })
    },[])
    return (
        <View style={{...styles.container,backgroundColor:theme.background}}>
            <ListCourses navigation={props.navigation} list={recommendList}></ListCourses>
        </View>

    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    title:{
        fontSize:20,
        margin:10,
        fontWeight:'bold',
    }

});


export default Recommended
