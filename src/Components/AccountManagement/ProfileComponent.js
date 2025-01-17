import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
const ProfileComponent = (props) => {
const authentication = useContext(AuthenticationContext)
const userInfo=authentication.state.userInfo
const {theme} = useContext(ThemeContext)
    return (
      <View style={styles.container}>
          <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={{uri:userInfo.avatar}}>
              </Image>
              <Text style={styles.username}>{userInfo.name}</Text>
              <Text style={styles.email}>{userInfo.email}
              </Text>
              <Text style={styles.email}>{userInfo.phone}</Text>
          </View>

      </View>
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'azure',
    },
    titleContainer:{
        flexDirection:'row',
        marginTop:24,
        alignItems:'center',
        justifyContent:'center',
        height: 40,
        backgroundColor: 'beige',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
    },
    avatarContainer:{
        height:300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar:{
        height: 200,
        width:200,
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
    subtitle:{
        fontSize:20,
        fontWeight:'bold',
        color: 'black',
        marginLeft:15,
        marginTop:10,
    },
    heading:{
        fontSize:18,
        fontWeight:'bold',
        color: 'gray',
        marginLeft:25,
        marginTop:5,
    },
    value:{
        fontSize:25,
        fontWeight:'bold',
        marginLeft:25,
        marginTop:5,
    },
    button:{
        marginLeft: 10,
        backgroundColor: 'white',
        borderRadius: 25,
        justifyContent:'center',
        alignItems:'center',
    },

});

export default ProfileComponent
