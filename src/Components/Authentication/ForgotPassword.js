import React, {useState} from 'react';
import { View,Text, TextInput, StyleSheet,Image, ImageBackground,TouchableOpacity } from 'react-native';

const ForgotPassrod = () => {
    const [email,setEmail]=useState('')
    return (
        <ImageBackground source={require('../../../assets/background-login.jpg')} style={styles.container}>
            <Image source={require('../../../assets/icon-forgotpass.png')} style={styles.logo}>
            </Image>
            <Text style={styles.title}>Forgot your password?</Text>
            <TextInput style={styles.input} placeholder= {'Enter your email to reset password'}
                       onChangeText={e=>setEmail(e)}
            />
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
        paddingLeft: 8,

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
});
export default ForgotPassrod
