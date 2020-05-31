import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import SectionCoursesItem from "./SectionCoursesItem";
import SearchedPathList from "../Search/SearchedPathList";
import SearchedPathItem from "../Search/SearchedPathItem";

const SeeAllPath = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.route.params.title}</Text>
            <FlatList  data={props.route.params.list}
                       renderItem={({item, index, separators}) => (<SearchedPathItem navigation={props.navigation} item={item}></SearchedPathItem>)}/>
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


export default SeeAllPath
