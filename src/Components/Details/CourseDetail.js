import React from 'react';
import {Text,View, StyleSheet, Image} from 'react-native';
import {Rating} from 'react-native-elements';
import AuthorItems from "../Home/AuthorItems";


const CourseDetail = (props) => {
  return (
      <View style={styles.container}>
          {/*video*/}
          <Image style={styles.video} source={require('../../../assets/background-2.jpg')}></Image>
          <Text style={styles.courseTitle}>{props.item.title}</Text>
          <View style={styles.infoContainer}>
              <AuthorItems item={props.item.author}></AuthorItems>
              <View style={styles.subInfoContainer}>
                  <Text style={styles.subInfo}>{`${props.item.level} . ${props.item.releasedDate} . ${props.item.duration}`}</Text>
                  <Rating imageSize={20} tintColor={'linen'} readonly={true}
                              ratingCount={5}  startingValue={props.item.rating} style={styles.rating} />
              </View>

          </View>

      </View>

  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'azure',
    },
    video:{
        marginTop:24,
        height:200,
        width:'100%',
    },
    courseTitle:{
        fontSize:25,
        margin:5,
        fontWeight:'bold'
    },
    infoContainer:{
        flexDirection:'row',
    },
    subInfo:{
        fontSize: 15,
        color:'darkgray'
    },
    subInfoContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    rating:{
      alignSelf:'center',
    },


});



export default CourseDetail
