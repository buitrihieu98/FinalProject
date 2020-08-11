import React, {useEffect, useState} from 'react';
import {Text, ScrollView, View, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import SectionCoursesItem from "./SectionCoursesItem";
import ListCoursesItem from "../ListCourses/ListCoursesItem";
import SeeAllButton from "../Global/SeeAllButton";
const SectionCourses = (props) => {
    const onSeeAllButtonPress=()=>{
        props.navigation.push("SeeAllCourses",{title: props.title,
                list: props.list})
    }
    const[list,setList]=useState(props.list)
    useEffect(()=>{
        setList(props.list)
    },[props.list])
  return (
      <View>
          <View style={{justifyContent:'center'}}>
            <Text style={styles.title}>{props.title}</Text>
              <TouchableOpacity style={styles.Button} onPress={onSeeAllButtonPress}>
                  <Text style={styles.Text}>See all</Text>
                  <Image source={require('../../../assets/icon-next.png')} style={styles.icon}></Image>
              </TouchableOpacity>
          </View>
          <FlatList horizontal={true} data={list}
                    renderItem={({item, index, separators}) => (<SectionCoursesItem key = { list.key } navigation={props.navigation} item={item}></SectionCoursesItem>)}/>
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
        width:20,
        height:20
    }

});


export default SectionCourses
