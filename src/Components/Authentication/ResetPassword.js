import React, {useState} from 'react';
import { View,Text, TextInput, StyleSheet,Image, ImageBackground,TouchableOpacity } from 'react-native';

const ResetPassword = () => {
    const [isMatched,setIsMatched]=useState(true)
    const [pass,setPass]=useState('')
    const [confirmPass,setConfirmPass]=useState('')
    const unmatched =<Text style={styles.warningText}>Confirm password and password must be matched</Text>
    const matched=<Text style={[styles.warningText,{color:'white'}]}> </Text>
    return (
        <ImageBackground source={require('../../../assets/background-login.jpg')} style={styles.container}>
            <Image source={require('../../../assets/icon-reset.png')} style={styles.logo}>
            </Image>
            <Text style={styles.title}>Reset your password</Text>
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
                <Text style={styles.loginText} >Reset</Text>
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
    logo:{
        marginTop:20,
        width: 100,
        height: 100,
    },
    title:{
        margin:10,
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
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
});
export default ResetPassword
