import React, {useContext, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {Avatar} from "react-native-elements";
import BackButton from "../Global/BackButton";
import Tag from "../Global/Tag"
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import ListCoursesItem from "../ListCourses/ListCoursesItem";

const ProfileComponent = (props) => {

const authentication = useContext(AuthenticationContext)
const userInfo=authentication.state.userInfo
const {theme} = useContext(ThemeContext)
    const [isLoading,setIsLoading] = useState(true)
    const [interestList,setInterestList]=useState([])
    useEffect(()=>{
        // userInfo.favoriteCategories.map((id)=>{
        //     api.get(`https://api.itedu.me/category/${id}`,{},).then((response)=>{
        //         if(response.isSuccess){
        //             let list = interestList
        //             if(list.indexOf(response.data.payload!==-1)){
        //                 list.push(response.data.payload)
        //                 setInterestList(list)
        //             }
        //         }
        //     })
        // })
        // if(interestList!==[]){
        //     setIsLoading(false)
        // }
    },[])

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
          {/*{isLoading?<View></View>:<View style={{margin:10}}>*/}
          {/*    /!*<Text style={styles.subtitle}>Interest topic</Text>*!/*/}
          {/*    /!*<ScrollView horizontal={true}>*!/*/}
          {/*    /!*    {interestList.map(item => <Tag navigation={props.navigation} item={item}></Tag> )}*!/*/}
          {/*    /!*</ScrollView>*!/*/}
          {/*</View>}*/}

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
