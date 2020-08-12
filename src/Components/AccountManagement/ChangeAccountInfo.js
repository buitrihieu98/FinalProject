import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import * as ImagePicker from 'expo-image-picker';

const ChangeAccountInfo = (props) => {
    const authentication=useContext(AuthenticationContext)
    const[newName,setNewName] =useState(authentication.state.userInfo.name)
    const[email,setEmail] =useState(authentication.state.userInfo.email)
    const[oldAvatar,setOldAvatar]=useState(authentication.state.userInfo.avatar)
    const [newPhone,setNewPhone] = useState(authentication.state.userInfo.phone)
    const {theme} = useContext(ThemeContext)
    const onPressChangeAvatar=async () => {
            try {
                let result = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });
                if (!result.cancelled) {
                    console.log('pick image',result)
                    setOldAvatar(result.uri)
                }
            } catch (E) {
                console.log(E);
            }
        }
  return (
      <ScrollView style={{...styles.container,backgroundColor:theme.background}}>
          <View style={styles.avatarContainer}>
              <Image style={styles.avatar} source={{uri:oldAvatar}}></Image>
              <TouchableOpacity onPress={onPressChangeAvatar}>
                  <Text style={styles.changeAvatar}>Change?</Text>
              </TouchableOpacity>
          </View>
          <View>
              <Text style={styles.subtitle}>Email</Text>
              <Text style={styles.value}>{email}</Text>
              <Text style={styles.subtitle}>New Username</Text>
              <TextInput style={{...styles.input,backgroundColor:theme.itemBackground}} onChangeText={newU=>setNewName(newU)} defaultValue={newName} />
              <Text style={styles.subtitle}>New Phone</Text>
              <TextInput style={{...styles.input,backgroundColor:theme.itemBackground}} onChangeText={ph=>setNewPhone(ph)} defaultValue={newPhone}/>

              <TouchableOpacity style={styles.buttonSave}
                                onPress={()=> {console.log(newName,oldAvatar,newPhone)
                                    authentication.changeInfo(newName,oldAvatar,newPhone,authentication.state.token)
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

});


export default ChangeAccountInfo
