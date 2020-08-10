import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import {getRelatedCourse} from "../../Actions/getRelatedCourse_action";

const RelatedCourses = (props) => {
    let item=props.route.params.item
    const [result,setResult]=useState([])

    useEffect(()=>{
        getRelatedCourse(item, setResult).then(r =>{})
    },[])

    return (
        <View style={styles.container}>
            <ListCourses navigation={props.navigation} list={result}></ListCourses>
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


export default RelatedCourses
