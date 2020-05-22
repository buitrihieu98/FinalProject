import React from 'react';
import {TouchableOpacity, Image, View, StyleSheet,Text } from 'react-native';
import {Rating} from "react-native-elements";
//import Rating from "../Home/Rating";

const ListCoursesItem = (props) => {
    const onItemPress=()=>{
        props.navigation.push("CourseDetail", {item:props.item})
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onItemPress}>
            <Image style={styles.image}
                   source={require('../../../assets/icon-courses.png')}>
            </Image>
            <View style={{margin:5}}>
                <Text style={styles.coreInfo}>{props.item.title}</Text>
                <Text style={styles.coreInfo}>{props.item.author.length===1?props.item.author[0].username:`${props.item.author[0].username}+${props.item.author.length-1}`}</Text>
                <Text style={styles.subInfo}>{`${props.item.level} . ${props.item.releasedDate}`}</Text>
                <Text style={styles.subInfo}>{props.item.duration}</Text>
                {/*<Rating rate={props.item.rating}></Rating>*/}
                <View style={{flexDirection:'row'}}>
                    <Rating imageSize={18} tintColor={'linen'} readonly={true} ratingCount={5}  startingValue={props.item.rating} style={styles.rating} />
                    <Text style={{color:'darkgray',fontSize:15}}>({props.item.ratingNumber})</Text>
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
        width:100,
        height:100,
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
