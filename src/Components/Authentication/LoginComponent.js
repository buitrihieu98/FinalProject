import React, {useEffect, useState} from 'react';
import { View,Text, TextInput, StyleSheet,Image, ImageBackground,TouchableOpacity } from 'react-native';
import {login} from "../../Core/Services/AuthenticationService";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";

const LoginComponent = (props) => {
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const [status, setStatus]=useState(null)

    const renderLoginStatus = (status)=>{
        if(!status){
            return <View></View>
        }
        else if(status.status ===200){
            return (<Text style={{marginTop:10,fontSize:20, color:"white", fontWeight:"bold"}}>Login successfully</Text>)
        }
        else{
            return (<Text style={{marginTop:10,fontSize:20, color:"white", fontWeight:"bold"}}>{status.errorString}</Text>)
        }
    }
    useEffect(()=>{
        if(status && status.status===200){
            props.navigation.navigate("MainScreen", {params:{status}})
        }
    },[status])

    const [hidePass, setHidePass] = useState(true)

    // const onPressLogin=()=>{
    //     setStatus(login(username,password))
    //     setAuthentication(login(username,password))
    //     //props.navigation.navigate("MainScreen")
    // }
    const onPressSignUp=()=>{
        props.navigation.navigate("SignUp")
    }
    const onPressForgot=()=>{
        props.navigation.navigate("Forgot")
    }
    return (
        <AuthenticationContext.Consumer>
            {
                ({setAuthentication})=>{
               return(
                    <ImageBackground source={require('../../../assets/background.jpg')} style={styles.container}>
                        <Image source={require('../../../assets/logo.png')} style={styles.logo}>
                        </Image>
                        <TextInput onChangeText={text => setUsername(text)} defaultValue={username} style={styles.input} placeholder= {'Username'}/>
                        <View style={styles.inputContainer}>
                            <TextInput
                                onChangeText={text => setPassword(text)}
                                defaultValue={password}
                                style={styles.input}
                                placeholder= {'Password'}
                                secureTextEntry={hidePass}
                            />
                            <TouchableOpacity style={styles.buttonEye} onPress={()=>{
                                setHidePass(!hidePass)
                            }}
                            >
                                <Image source={require('../../../assets/icon-eye.png')} style={{height:'100%', width:'100%'}}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <TouchableOpacity style={{marginRight: 50}} onPress={onPressForgot}>
                                <Text style={styles.normalText}>Forgot password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onPressSignUp}>
                                <Text style={styles.normalText}>Sign up?</Text>
                            </TouchableOpacity>
                        </View>
                        {renderLoginStatus(status)}
                        <TouchableOpacity style={styles.buttonLogin} onPress={()=>{
                            setStatus(login(username,password))
                            setAuthentication(login(username,password))
                        }
                        }>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </ImageBackground>
               )
           }}
        </AuthenticationContext.Consumer>
    )
};

const styles = StyleSheet.create({
    logo:{
        marginTop:80,
        width: 250,
        height: 250,
    },
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%'
    },
    input:{
        margin: 10,
        height: 50,
        width: '80%',
        backgroundColor: 'white',
        opacity: 0.5,
        borderRadius: 25,
        fontSize: 20,
        fontWeight:'bold',
        paddingLeft: 35,

    },
    buttonEye:{
        position:'absolute',
        top: 8,
        right: 37,
        width: 30,
        height:30,
        marginTop:12,
        marginRight:15
    },
    buttonLogin:{
        marginTop:20,
        marginBottom:10,
        height: 50,
        width: '40%',
        backgroundColor: 'deepskyblue',
        opacity: 0.5,
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center'
    },
    loginText:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
    },
    normalText:{
        fontSize: 15,
        color:'white',
    }


});
export default LoginComponent;
