import React from 'react';
import {TouchableOpacity,Image, View, StyleSheet,Text } from 'react-native';
import {Rating} from 'react-native-elements';
import SectionCourses from "./SectionCourses";
//import Rating from "./Rating";

const SectionCoursesItem = (props) => {
  return (
      <TouchableOpacity style={styles.container}>
          <Image style={styles.video}
              source={require('../../../assets/icon-video.png')}>
          </Image>
          <View style={{margin:5}}>
              <Text style={styles.coreInfo}>{props.item.title}</Text>
              <Text style={styles.coreInfo}>{props.item.author}</Text>
              <Text style={styles.subInfo}>{`${props.item.level} . ${props.item.releasedDate}`}</Text>
              <Text style={styles.subInfo}>{props.item.duration}</Text>
              <View style={{flexDirection:'row'}}>
                  <Rating imageSize={18} tintColor={'linen'} readonly={true} ratingCount={5}  startingValue={props.item.rating} style={styles.rating} />
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
