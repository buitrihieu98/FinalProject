import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import {ThemeContext} from "../../provider/ThemeProvider";
import {getTopNewCourses} from "../../Services/courses-service";

const NewRelease = (props) => {
    const {theme} = useContext(ThemeContext)
    const [topNewList, setTopNewList]=useState([])
    useEffect(()=>{
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
