import React, {useContext} from 'react';
import {View, StyleSheet, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import ListCourses from "../ListCourses/ListCourses";
import {Avatar} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";

const Download = (props) => {
    const authentication = useContext(AuthenticationContext)
    const userInfo= authentication.state.userInfo
    if(userInfo){
        props.navigation.setOptions({headerRight: () => (
                <Avatar
                    style={{margin:5,marginRight:10,height:25,width:25}}
                    onPress={() => props.navigation.navigate("Profile")}
                    source={{uri:userInfo.avatar}}
                />
            ),})
    }

    const removeAll=()=>{
        //clear list
    }
    const {theme} = useContext(ThemeContext)

  return (
      <View style={{...styles.container,backgroundColor:theme.background}}>
          <View style={styles.subTitleContainer}>
              <TouchableOpacity style={styles.rmAllButton} onPress={removeAll}>
                  <Text style={styles.rmAllText}>Remove all</Text>
              </TouchableOpacity>
          </View>
          <ListCourses navigation={props.navigation} list={coursesList}></ListCourses>
      </View>

  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    titleContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height: 40,
        backgroundColor: 'beige',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
    },
    subTitleContainer:{
        flexDirection:'row',
        height: 40,
        alignItems:'center',
    },
    subTitle:{
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold',
    },
    rmAllButton:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        right: 10,
        width:80,
    },
    rmAllText:{
        fontSize:13,
        color:'blue',

    }
});


export default Download
