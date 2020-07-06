import React, {useContext, useState} from 'react';
import {Text, View,StyleSheet,Image,ScrollView } from 'react-native';
import {Avatar} from "react-native-elements";
import BackButton from "../Global/BackButton";
import Tag from "../Global/Tag"
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {ThemeContext} from "../../provider/ThemeProvider";

const ProfileComponent = (props) => {

const authenticationContext = useContext(AuthenticationContext)
const userInfo=authenticationContext.state.userInfo
const {theme} = useContext(ThemeContext)
    // const authorList=[
    //     {id:1,username:'Hai Pham',email:'thisisanemail@gmail.com', avatar:'', authorCoursesList:authorCoursesList},
    //     {id:2,email:'thisisanemail@gmail.com', username:'Hieu', avatar:'',authorCoursesList:authorCoursesList},
    //     {id:3,email:'thisisanemail@gmail.com', username:'Nam', avatar:'',authorCoursesList:authorCoursesList},
    //     {id:4,email:'thisisanemail@gmail.com', username:'Vi', avatar:'',authorCoursesList:authorCoursesList},
    //     {id:5,email:'thisisanemail@gmail.com', username:'Thy', avatar:'',authorCoursesList:authorCoursesList}]
    // //coursesList for testing
    // const coursesList=[
    //     {id:1, title: 'React Native', author: authorList , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    //     {id:2, title: 'Java', author: authorList , level:'Beginner', releasedDate: 'July 2019', duration: '50 hours', rating : 5, ratingNumber: 709,},
    //     {id:3, title: 'Game Development', author: authorList , level:'Beginner', releasedDate: 'Sept 2019', duration: '50 hours', rating : 3, ratingNumber: 1307,}]
    // //pathList for testing
    // const pathList=[
    //     {id:1, title: 'React Native',coursesList:coursesList ,coursesNumber:12, progress:80},
    //     {id:2, title: 'Java',coursesList:coursesList, coursesNumber:25, progress:80},
    //     {id:3, title: 'PHP',coursesList:coursesList, coursesNumber:12, progress:80},]
    // const interestTagList = [{name:'JavaScript', authorList:authorList, coursesList:coursesList,pathList:pathList},
    //     {name:'C#', authorList:authorList, coursesList:coursesList,pathList:pathList},
    //     {name:'PHP', authorList:authorList, coursesList:coursesList,pathList:pathList},
    //     {name:'React', authorList:authorList, coursesList:coursesList,pathList:pathList}
    // ]
    // const authorCoursesList=[{id:1, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    //     {id:2, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    //     {id:3, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    //     {id:4, title: 'React Native', author: [{id:1,username:'hieu'},{id:2, username:'hieu2'}] , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,}]

const[username,setUsername] =useState('Username')
    const[email,setEmail] =useState('email@gmail.com')
    const [totalActiveDays,setTotalActiveDays] = useState(0)
    const [mostActiveTime,setMostActiveTime] = useState('21:00')
const [mostViewedSubject,setMostViewedSubject] = useState('Managerial Skills')
    return (
      <View style={styles.container}>
          <View style={styles.avatarContainer}>
              <Avatar size={"large"}rounded={true} avatarStyle={styles.avatar} source={require('../../../assets/icon-avatar.png')}>
              </Avatar>
              <Text style={styles.username}>{userInfo.name}</Text>
              <Text style={styles.email}>{userInfo.email}
              </Text>
          </View>
          {/*<View>*/}
          {/*    <Text style={styles.subtitle}>Interest</Text>*/}
          {/*    <View style={{flexDirection: 'row', margin:5}}>*/}
          {/*        <ScrollView horizontal={true}>*/}
          {/*            {userInfo.interestTopicList.map(item => <Tag navigation={props.navigation} item={item}></Tag> )}*/}
          {/*        </ScrollView>*/}
          {/*    </View>*/}
          {/*    <Text style={styles.subtitle}>Activity Insight</Text>*/}
          {/*    <Text style={styles.heading}>Total active days</Text>*/}
          {/*    <Text style={styles.value}>{userInfo.totalActiveDays}</Text>*/}
          {/*    <Text style={styles.heading}>Most active time of day</Text>*/}
          {/*    <Text style={styles.value}>{userInfo.mostActiveTime}</Text>*/}
          {/*    <Text style={styles.heading}>Most viewed subject</Text>*/}
          {/*    <Text style={styles.value}>{userInfo.mostViewedSubject}</Text>*/}
          {/*</View>*/}
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
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar:{
        marginTop:10,
        height: 100,
        width:100,
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
    }

});

export default ProfileComponent
