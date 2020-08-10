import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import api from "../../API/api";

const SignUp = (props) => {
    const [isMatched,setIsMatched]=useState(true)
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [pass,setPass]=useState('')
    const [error,setError]=useState('')
    const [confirmPass,setConfirmPass]=useState('')
    const onPressBackLogin=()=>{
        props.navigation.navigate("Login")
    }
    const onPressSignUp=(username,email,phone,pass)=>{
        if (isMatched===false){
            setError('Password and Confirmed password must be matched')
        }
        else {
            api.post('https://api.itedu.me/user/register',{username:username,email:email,phone:phone,password:pass},).then((response)=>{
                if(response.isSuccess){
                    console.log('email sent')
                    props.navigation.navigate("Login")
                }
            })
        }
    }
    return (
      <ImageBackground source={require('../../../assets/background.jpg')} style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput style={styles.input} onChangeText={text=>setUsername(text)} placeholder= {'Username'}/>
          <TextInput style={styles.input} onChangeText={text=>setEmail(text)} placeholder= {'Email'}/>
          <TextInput style={styles.input} onChangeText={text=>setPhone(text)} placeholder= {'Phone'}/>
          <TextInput style={styles.input} placeholder= {'Password'} onChangeText={pw=>setPass(pw)}
                     onSubmitEditing={()=>{
                         if(pass===confirmPass){
                             setIsMatched(true)
                         }
                         else{
                             setIsMatched(false)
                         }
                     }}/>
          <TextInput style={styles.input} placeholder= {'Confirm password'}onChangeText={cpw=>setConfirmPass(cpw)}
                     onSubmitEditing={()=>{
                         if(pass===confirmPass){
                             setIsMatched(true)
                         }
                         else{
                             setIsMatched(false)
                         }
                     }}/>
          <Text style={[styles.warningText,{color:'red'}]}>{error}</Text>
          <TouchableOpacity onPress={onPressBackLogin}>
              <Text style={styles.backToSignIn}>Already have an account, back to sign in?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressSignUp(username,email,phone,pass)} style={styles.buttonLogin}>
              <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
      </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        marginBottom:30,
        fontSize: 60,
        fontWeight:'bold',
        color:'white'
    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    input:{
        margin: 20,
        height: 50,
        width: '80%',
        backgroundColor: 'white',
        opacity: 0.8,
        borderRadius: 25,
        fontSize: 20,
        fontWeight:'bold',
        paddingLeft: 35,

    },
    buttonLogin:{
        marginTop:20,
        marginBottom:10,
        height: 50,
        width: '40%',
        backgroundColor: 'deepskyblue',
        opacity: 0.8,
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center'
    },
    loginText:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
    },
    warningText:{
        fontSize: 15,
        color:'red',
    },
    backToSignIn:{
        alignSelf:'flex-end',
        fontSize: 15,
        color:'white',
    }
});
export default SignUp
