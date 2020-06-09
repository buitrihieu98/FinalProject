import React, {useContext} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import BackButton from "../Global/BackButton";
import {Avatar} from "react-native-elements";
import ViewMoreText from "react-native-view-more-text";
import ListCourses from "../ListCourses/ListCourses";
import {ThemeContext} from "../../provider/ThemeProvider";


const AuthorDetail = (props) => {
    let item=props.route.params.item
    props.navigation.setOptions({title: item.username})
    const {theme} = useContext(ThemeContext)
  return (
      <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
          <View style={styles.avatarContainer}>
              {<Avatar size={"large"} rounded={true} avatarStyle={styles.avatar} source={require('../../../assets/icon-avatar.png')
              }></Avatar>}
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.email}>{item.email}</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
          <View style={{marginLeft:10,marginTop:5}}>
              <ViewMoreText numberOfLines={3} textStyle={styles.subInfo}>
                  <Text>{item.description}
                  </Text>
              </ViewMoreText>
          </View>
          <Text style={styles.subTitle}>Courses of this author</Text>
          <ListCourses navigation={props.navigation} list={item.authorCoursesList}></ListCourses>
      </ScrollView>
  )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    avatarContainer:{
        marginTop:10,
        alignItems: 'center',
    },
    avatar:{
    },
    username:{
        margin:5,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    followButton:{
        alignSelf:'center',
        height: 50,
        backgroundColor: 'deepskyblue',
        width:'90%',
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center'
    },
    followText:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
    },
    subTitle:{
        margin:5,

        fontSize:20,
        fontWeight:'bold'
    }
});


export default AuthorDetail
