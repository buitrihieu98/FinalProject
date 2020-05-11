import React from 'react';
import {Text, View, StyleSheet, ScrollView } from 'react-native';
import PathItem from "./PathItem";
import SeeAllButton from "../Global/SeeAllButton";
const PathList = (props) => {
    //pathList for testing
    const pathList=[
        {
            id:1,
            title: 'React Native',
            coursesNumber:12

        },
        {
            id:2,
            title: 'java',
            coursesNumber:25
        },
        {
            id:3,
            title: 'PHP',
            coursesNumber:12

        },
    ]

    const renderCoursesList =(pathList) =>{
        return pathList.map(item=> <PathItem item={item}></PathItem>)
    }
    return (
        <View>
            <View style={{justifyContent:'center'}}>
                <Text style={styles.title}>{props.title}</Text>
                <SeeAllButton></SeeAllButton>
            </View>
            <ScrollView horizontal={true}>
                {renderCoursesList(pathList)}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:20,
    }

});




export default PathList
