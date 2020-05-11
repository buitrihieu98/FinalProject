import React, {useState} from 'react';
import {Text, View,StyleSheet,Image,ScrollView } from 'react-native';
import BackButton from "../Global/BackButton";
import Tag from "../Global/Tag"

const ProfileComponent = () => {
    const interestTagList = ['JavaScript','C#','C++','PHP','Python','Java']
    const[username,setUsername] =useState('Username')
    const[email,setEmail] =useState('email@gmail.com')
    const [totalActiveDays,setTotalActiveDays] = useState(0)
    const [mostActiveTime,setMostActiveTime] = useState('21:00')
    const [mostViewedSubject,setMostViewedSubject] = useState('Managerial Skills')
    return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <BackButton></BackButton>
              <Text style={styles.title}>Profile</Text>
          </View>
          <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={require('../../../assets/icon-avatar.png')}></Image>
              <Text style={styles.username}>{username}</Text>
              <Text style={styles.email}>{email}
              </Text>
          </View>
          <View>
              <Text style={styles.subtitle}>Interest</Text>
              <View style={{flexDirection: 'row', margin:5}}>
                  <ScrollView horizontal={true}>
                      {interestTagList.map(value => <Tag name={value}></Tag> )}
                  </ScrollView>
              </View>
              <Text style={styles.subtitle}>Activity Insight</Text>
              <Text style={styles.heading}>Total active days</Text>
              <Text style={styles.value}>{totalActiveDays}</Text>
              <Text style={styles.heading}>Most active time of day</Text>
              <Text style={styles.value}>{mostActiveTime}</Text>
              <Text style={styles.heading}>Most viewed subject</Text>
              <Text style={styles.value}>{mostViewedSubject}</Text>
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
