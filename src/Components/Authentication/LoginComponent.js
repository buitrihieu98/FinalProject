import React, {useState} from 'react';
import { View,Text, TextInput, StyleSheet,Image, ImageBackground,TouchableOpacity } from 'react-native';

const LoginComponent = () => {
    const [hidePass, setHidePass] = useState(true)
    return (
      <ImageBackground source={require('../../../assets/background-login.jpg')} style={styles.container}>
          <Image source={require('../../../assets/logo.png')} style={styles.logo}>
          </Image>
          <TextInput style={styles.input} placeholder= {'Username'}/>
          <View style={styles.inputContainer}>
              <TextInput
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
              <TouchableOpacity style={{marginRight: 50}}>
                  <Text style={styles.normalText}>Forgot password?</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Text style={styles.normalText}>Sign up?</Text>
              </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
      </ImageBackground>
    )
};

const styles = StyleSheet.create({
    logo:{
        marginTop:20,
        width: 200,
        height: 200,
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
        marginTop:30,
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
