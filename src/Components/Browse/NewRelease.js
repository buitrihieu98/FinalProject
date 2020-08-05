import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import {ThemeContext} from "../../provider/ThemeProvider";
import axios from "axios";
import {getTopNewCourses} from "../../Actions/getTopNewCourses_action";

const NewRelease = (props) => {
    const {theme} = useContext(ThemeContext)
    const [topNewList, setTopNewList]=useState([])
    useEffect(()=>{
        // axios.post('https://api.itedu.me/course/top-new', {
        //     limit: 10,  page: 1
        // }).then((response)=>{
        //     if(response.status===200){
        //         setTopNewList(response.data.payload)
        //     }
        //     else{
        //         console.log('Failed : ',response.status)
        //     }
        // }).catch((error)=>{
        //     console.log('failed ',error)
        // })
        getTopNewCourses(setTopNewList).then(r => {})
    },[])
    return (
        <View style={{...styles.container,backgroundColor:theme.background}}>
            <ListCourses navigation={props.navigation} list={topNewList}></ListCourses>
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


export default NewRelease
