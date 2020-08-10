import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import BackButton from "../Global/BackButton";
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import api from "../../API/api";
import {changePass} from "../../Actions/changePass_action";

const ChangePass = (props) => {
    const authentication=useContext(AuthenticationContext)
    const[oldName,setOldName]=useState(authentication.state.userInfo.name)
    const[oldPassword,setOldPassword]=useState('')
    const[newPassword,setNewPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
    const [match,setMatch]=useState(false)
    const [ok,setOk]=useState(false)
    const [error,setError]=useState('')
    const {theme} = useContext(ThemeContext)
    const unmatched =<Text style={styles.warningText}>Confirm password and password must be matched</Text>
    const matched=<Text style={[styles.warningText,{color:'white'}]}>Matched</Text>

    return (
        <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={{uri:authentication.state.userInfo.avatar}}></Image>
            </View>
            <View>
                <Text style={styles.subtitle}>Name</Text>
                <Text style={styles.value}>{oldName}</Text>
                <Text style={styles.subtitle}>Old Password</Text>
                <TextInput style={{...styles.input,backgroundColor:theme.itemBackground}} onChangeText={(opw)=>setOldPassword(opw)}  placeholder={'Old password'}/>
                <Text style={styles.subtitle}>New Password</Text>
                <TextInput style={{...styles.input,backgroundColor:theme.itemBackground}} onChangeText={(pw)=>setNewPassword(pw)}
                           onSubmitEditing={()=>{
                               if(newPassword===confirmPassword){
                                   setMatch(true)
                               }
                               else{
                                   setMatch(false)
                               }
                           }} placeholder={'New password'}/>
                <Text style={styles.subtitle}>Confirm Password</Text>
                <TextInput style={{...styles.input,backgroundColor:theme.itemBackground}} onChangeText={(cpw)=>setConfirmPassword(cpw)} onSubmitEditing={()=>{
                    if(newPassword===confirmPassword){
                        setMatch(true)
                    }
                    else{
                        setMatch(false)
                    }
                }} placeholder={'Confirm password'}/>
                {match?matched:unmatched}
                <TouchableOpacity style={styles.buttonSave}
                                  onPress={()=>{
                                      console.log(oldPassword)
                                      if(match){
                                          changePass(authentication, oldPassword, newPassword, setOk, setError).then( r =>{})
                                      }
                                  }}>
                    <Text style={styles.saveText}>Change</Text>
                </TouchableOpacity>
                {ok?<Text style={styles.warningText}>Password changed</Text>:<Text style={styles.warningText}>{error}</Text>}
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
        height: 150,
        width:150,
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
    warningText:{
        fontSize: 15,
        color:'red',
        alignSelf: 'center'
    },

});


export default ChangePass
