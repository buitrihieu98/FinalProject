import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {getRecommendCourses} from "../../Actions/getRecommendCourses_action";

const Recommended = (props) => {
    const authentication = useContext(AuthenticationContext)
    const userInfo= authentication.state.userInfo
    const {theme} = useContext(ThemeContext)
    const[recommendList,setRecommendList]=useState([])
    useEffect(()=>{
        getRecommendCourses(userInfo, setRecommendList).then(r =>{})
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
