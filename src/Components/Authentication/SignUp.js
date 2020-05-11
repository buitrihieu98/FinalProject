import React, {useState} from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const SignUp = () => {
    const [isMatched,setIsMatched]=useState(true)
    const [pass,setPass]=useState('')
    const [confirmPass,setConfirmPass]=useState('')
    const unmatched =<Text style={styles.warningText}>Confirm password and password must be matched</Text>
    const matched=<Text style={[styles.warningText,{color:'white'}]}> </Text>
    return (
      <ImageBackground source={require('../../../assets/background.jpg')} style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput style={styles.input} placeholder= {'Username'}/>
          <TextInput style={styles.input} placeholder= {'Email'}/>
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
          {isMatched===false? unmatched:matched}
          <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.backToSignIn}>Already have an account, back to sign in?</Text>
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
