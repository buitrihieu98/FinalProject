import React, {useContext} from 'react';
import {TouchableOpacity,Image, View, StyleSheet,Text } from 'react-native';
import {Rating} from 'react-native-elements';
import SectionCourses from "./SectionCourses";
import {ThemeContext} from "../../provider/ThemeProvider";
//import Rating from "./Rating";

const SectionCoursesItem = (props) => {
    const {theme} = useContext(ThemeContext)
    const onPressItem=()=>{
        props.navigation.push("CourseDetail", {item:props.item})
    }
  return (
      <TouchableOpacity style={{...styles.container,backgroundColor:theme.itemBackground}} onPress={onPressItem}>
          <Image style={styles.video}
              source={require('../../../assets/icon-video.png')}>
          </Image>
          <View style={{margin:5}}>
              <Text style={styles.coreInfo}>{props.item.title}</Text>
              <Text style={styles.coreInfo}>{props.item.author.length===1?props.item.author[0].username:`${props.item.author[0].username} +${props.item.author.length-1}`}</Text>
              <Text style={styles.subInfo}>{`${props.item.level} . ${props.item.releasedDate}`}</Text>
              <Text style={styles.subInfo}>{props.item.duration}</Text>
              <View style={{flexDirection:'row'}}>
                  <Rating imageSize={18} tintColor={theme.itemBackground} readonly={true} ratingCount={5}  startingValue={props.item.rating} style={styles.rating} />
                  <Text style={{marginTop:4,color:'darkgray',fontSize:15}}>({props.item.ratingNumber})</Text>
              </View>
              {/*<Rating rate={props.item.rating}></Rating>*/}
          </View>
      </TouchableOpacity>

  )
};

const styles = StyleSheet.create({
    container:{
        margin:5,
        width:200,
        height:200,
        backgroundColor:'linen',
    },
    video:{
        width:'60%',
        height: '40%',
    },
    coreInfo:{
        fontSize:15,
    },
    subInfo:{
        fontSize: 15,
        color:'darkgray'
    },
    rating:{
        margin:5,
        alignSelf:'flex-start'
    }

});



export default SectionCoursesItem
