import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList} from 'react-native';
import PathItem from "./PathItem";
import SeeAllButton from "../Global/SeeAllButton";
import ListCoursesItem from "../ListCourses/ListCoursesItem";
const PathList = (props) => {
    // const renderCoursesList =(pathList) =>{
    //     let pathListArray=[]
    //     pathListArray=pathListArray.concat(pathList)
    //     return pathListArray.map(item=> <PathItem item={item}></PathItem>)
    // }
    return (
        <View>
            <View style={{justifyContent:'center'}}>
                <Text style={styles.title}>{props.title}</Text>
                <SeeAllButton></SeeAllButton>
            </View>
            {/*<ScrollView horizontal={true}>*/}
            {/*    {renderCoursesList(props.pathList)}*/}
            {/*</ScrollView>*/}
            <FlatList horizontal={true} data={props.list} renderItem={({item, index, separators}) => (<PathItem item={item}></PathItem>)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        marginLeft:5,
        fontWeight:'bold',
        fontSize:20,
    }

});




export default PathList
