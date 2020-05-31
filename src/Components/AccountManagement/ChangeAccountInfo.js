import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import BackButton from "../Global/BackButton";

const ChangeAccountInfo = (props) => {
    const[newUserName,setNewUserName] =useState('')
    const[oldUserName,setOldUserName]=useState('Old Username')
    const[email,setEmail] =useState('email@gmail.com')
    const[newPassword,setNewPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
  return (
      <ScrollView style={styles.container}>
          <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={require('../../../assets/icon-avatar.png')}></Image>
              <TouchableOpacity>
                  <Text style={styles.changeAvatar}>Change?</Text>
              </TouchableOpacity>
          </View>
          <View>
              <Text style={styles.subtitle}>Email</Text>
              <Text style={styles.value}>{email}</Text>
              <Text style={styles.subtitle}>New Username</Text>
              <TextInput style={styles.input} onChangeText={newU=>setNewUserName(newU)} placeholder= {oldUserName} />
              <Text style={styles.subtitle}>New Password</Text>
              <TextInput style={styles.input} onChangeText={pw=>setNewPassword(pw)} placeholder={'New password'}/>
              <Text style={styles.subtitle}>Confirm Password</Text>
              <TextInput style={styles.input} onChangeText={cpw=>setConfirmPassword(cpw)} placeholder={'Confirm password'}/>

              <TouchableOpacity style={styles.buttonSave}
                                onPress={()=>{
                                    //do something
                                }}>
                  <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
          </View>
      </ScrollView>

  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
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
    changeAvatar:{
        marginTop:5,
        fontSize: 20,
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
    buttonSave:{
        marginTop:10,
        height: 50,
        width: '40%',
        backgroundColor: 'deepskyblue',
        borderRadius: 25,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    saveText:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
    },
    input:{
        margin: 5,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 25,
        fontSize: 20,
        fontWeight:'bold',
        paddingLeft: 15,

    },

});


export default ChangeAccountInfo
