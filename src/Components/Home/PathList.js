import React from 'react';
import {Text, View, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity} from 'react-native';
import PathItem from "./PathItem";
import SeeAllButton from "../Global/SeeAllButton";
import ListCoursesItem from "../ListCourses/ListCoursesItem";
const PathList = (props) => {
    const onSeeAllButtonPress=()=>{
        props.navigation.push("SeeAllPath",{title: props.title,
            list: props.list})
    }
    return (
        <View>
            <View style={{justifyContent:'center'}}>
                <Text style={styles.title}>{props.title}</Text>
                <TouchableOpacity style={styles.Button} onPress={onSeeAllButtonPress}>
                    <Text style={styles.Text}>See all</Text>
                    <Image source={require('../../../assets/icon-next.png')} style={styles.icon}></Image>
                </TouchableOpacity>
            </View>
            {/*<ScrollView horizontal={true}>*/}
            {/*    {renderCoursesList(props.pathList)}*/}
            {/*</ScrollView>*/}
            <FlatList horizontal={true} data={props.list} renderItem={({item, index, separators}) => (<PathItem navigation={props.navigation} item={item}></PathItem>)}/>
        </View>
    )
};

const styles = StyleSheet.create({
    title:{
        marginLeft:5,
        fontWeight:'bold',
        fontSize:20,
    },
    Button:{
        alignSelf:"flex-end",
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        right: 10,

    },
    Text:{
        fontSize:15,
    },
    icon:{
        width:10,
        height:10
    }

});




export default PathList
