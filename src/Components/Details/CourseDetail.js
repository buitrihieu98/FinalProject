import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, ScrollView} from 'react-native';
import MyRating from "../Home/Rating";
import AuthorList from "../Home/AuthorList";



const CourseDetail = (props) => {
  return (
      <ScrollView style={styles.container}>
          {/*video*/}
          <Image style={styles.video} source={require('../../../assets/background-2.jpg')}></Image>
          <Text style={styles.courseTitle}>{props.item.title}</Text>
          <View style={styles.infoContainer}>
              <AuthorList authorList={props.item.author}></AuthorList>
              <View style={styles.subInfoContainer}>
                  <Text style={styles.subInfo}>{`${props.item.level} . ${props.item.releasedDate} . ${props.item.duration}`}</Text>
                  {/*<Rating imageSize={20} tintColor={'linen'} readonly={true}*/}
                  {/*            ratingCount={5}  startingValue={props.item.rating} style={styles.rating} />*/}
                  <MyRating item={props.item}></MyRating>
              </View>
              <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.button}>
                      <Image style={styles.icon} source={require('../../../assets/icon-bookmark.png')}></Image>
                      <Text style={styles.buttonText}>Bookmark</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                      <Image style={styles.icon} source={require('../../../assets/icon-channel.png')}></Image>
                      <Text style={styles.buttonText}>Add to Channel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                      <Image style={styles.icon} source={require('../../../assets/icon-download.png')}></Image>
                      <Text style={styles.buttonText}>Download</Text>
                  </TouchableOpacity>
              </View>
              {/*see more text*/}

          </View>

      </ScrollView>

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
    buttonsContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    button:{
        margin:15,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'azure',
        height:80,
    },
    icon:{
        height:40,
        width:40,
    },
    buttonText:{
        margin:5,
        fontSize:15,

    }


});



export default CourseDetail
