import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import BackButton from "../Global/BackButton";
import SettingItem from "./SettingItem";
import SettingItemWithSwitch from "./SettingItemWithSwitch";
import {ThemeContext} from "../../provider/ThemeProvider";

const SettingComponent = (props) => {
    const [isRequiredWiFiStreaming,setIsRequiredWiFiStreaming]=useState(true)
    const [isRequireWiFiDownloading,setIsRequiredWiFiDownloading]=useState(true)
    const [appVersion,setAppVersion]=useState('1.0')
    const {theme,changeTheme} = useContext(ThemeContext)
    const onPressChangeInfo=()=>{
        props.navigation.push("ChangeAccountInfo")
    }
    const onPressChangePass=()=>{
        props.navigation.push("ChangePass")
    }
    const onPressSubscription=()=>{
        props.navigation.push("Subscription")
    }
    const onPressChangeTheme=()=>{
        changeTheme()
    }
    const signOut=()=>{
        props.navigation.popToTop()
    }
  return (
      <View style={{...styles.container,backgroundColor:theme.background}}>
          <ScrollView>
              {/*<SettingItem name={'Change Account Info'}></SettingItem>*/}
              <TouchableOpacity onPress={onPressChangeInfo} style={{...styles.subContainer,backgroundColor:theme.background}}>
                  <Text style={styles.itemName}>Change Account Info</Text>
                  <Image source={require('../../../assets/icon-next.png')} style={styles.icon}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressChangePass} style={{...styles.subContainer,backgroundColor:theme.background}}>
                  <Text style={styles.itemName}>Change Password</Text>
                  <Image source={require('../../../assets/icon-next.png')} style={styles.icon}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressSubscription} style={{...styles.subContainer,backgroundColor:theme.background}}>
                  <Text style={styles.itemName}>Subscription</Text>
                  <Image source={require('../../../assets/icon-next.png')} style={styles.icon}></Image>
              </TouchableOpacity>
              {/*<SettingItem name={'Subscription'}></SettingItem>*/}
              <TouchableOpacity onPress={onPressChangeTheme} style={{...styles.subContainer,backgroundColor:theme.background}}>
                  <Text style={styles.itemName}>Change theme</Text>
              </TouchableOpacity>
              {/*<SettingItemWithSwitch name={'Require Wi-fi for streaming'}></SettingItemWithSwitch>*/}
              {/*<SettingItemWithSwitch name={'Require Wi-fi for downloading'}></SettingItemWithSwitch>*/}
              {/*<SettingItem name={'Send feedback'}></SettingItem>*/}
              {/*<SettingItem name={'Contact support'}></SettingItem>*/}
              {/*<SettingItem name={'App version'}></SettingItem>*/}
              <TouchableOpacity style={{...styles.subContainer,backgroundColor:theme.background}}>
                  <Text style={styles.itemName}>{`App version: ${appVersion}`}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={signOut} style={styles.signOutButton}>
                  <Text style={styles.signOutText}>Sign out</Text>
              </TouchableOpacity>
          </ScrollView>
      </View>
  )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    subContainer:{
        backgroundColor:'whitesmoke',
        width: '100%',
        height: 50,
        borderBottomWidth:2,
        justifyContent:'center',
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
    signOutButton:{
        alignSelf:'center',
        height: 50,
        margin:10,
        backgroundColor: 'deepskyblue',
        width:'80%',
        borderRadius: 25,
        alignItems:'center',
        justifyContent:'center'
    },
    signOutText:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
    },
    itemName:{
        margin:5,
        marginLeft:10,
        fontSize:20,
    },
    icon:{
        width:20,
        height:20,
        position:'absolute',
        right: 10,
    }

});
export default SettingComponent
