import React,{useState} from 'react';
import {View, StyleSheet, Text, ScrollView, TouchableOpacity} from 'react-native';
import BackButton from "../Global/BackButton";
import SettingItem from "./SettingItem";
import SettingItemWithSwitch from "./SettingItemWithSwitch";

const SettingComponent = () => {
    const [isRequiredWiFiStreaming,setIsRequiredWiFiStreaming]=useState(true)
    const [isRequireWiFiDownloading,setIsRequiredWiFiDownloading]=useState(true)
    const [appVersion,setAppVersion]=useState('1.0')
  return (
      <View style={styles.container}>
          <View style={styles.titleContainer}>
              <BackButton></BackButton>
              <Text style={styles.title}>Setting</Text>
          </View>
          <ScrollView>
              <SettingItem name={'Change Account Info'}></SettingItem>
              <SettingItem name={'Subscription'}></SettingItem>
              <SettingItem name={'Communication Preferences'}></SettingItem>
              <SettingItem name={'Theme'}></SettingItem>
              <SettingItemWithSwitch name={'Require Wi-fi for streaming'}></SettingItemWithSwitch>
              <SettingItemWithSwitch name={'Require Wi-fi for downloading'}></SettingItemWithSwitch>
              <SettingItem name={'Send feedback'}></SettingItem>
              <SettingItem name={'Contact support'}></SettingItem>
              <SettingItem name={'App version'}></SettingItem>
              <TouchableOpacity style={styles.signOutButton}>
                  <Text style={styles.signOutText}>Sign out</Text>
              </TouchableOpacity>

          </ScrollView>

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
    signOutButton:{
        alignSelf:'center',
        height: 50,
        marginTop:60,
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

});
export default SettingComponent
