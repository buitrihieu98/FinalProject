import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet,Text } from 'react-native';
import Rating from "../Home/Rating";

const ListCoursesItem = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image}
                   source={require('../../../assets/icon-courses.png')}>
            </Image>
            <View style={{margin:5}}>
                <Text style={styles.coreInfo}>{props.item.title}</Text>
                <Text style={styles.coreInfo}>{props.item.author}</Text>
                <Text style={styles.subInfo}>{`${props.item.level} . ${props.item.releasedDate}`}</Text>
                <Text style={styles.subInfo}>{props.item.duration}</Text>
                <Rating rate={props.item.rating}></Rating>
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
        width:50,
        height:100,
    },
    coreInfo:{
        fontSize:15,
    },
    subInfo:{
        fontSize: 15,
        color:'darkgray'
    }
});

export default ListCoursesItem
