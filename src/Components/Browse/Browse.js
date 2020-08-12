import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, ScrollView, ActivityIndicator} from 'react-native';
import {Avatar, Tile} from "react-native-elements";
import AuthorList from "../Home/AuthorList";
import Tag from "../Global/Tag";
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {getAllCategory} from "../../Services/category-service";
import {getInstructorList} from "../../Services/author-service";


const Browse = (props) => {
    const authentication=useContext(AuthenticationContext)
    const avatar=authentication.state.userInfo.avatar
    if(avatar){
        props.navigation.setOptions({headerRight: () => (
                <Avatar
                    style={{margin:5,marginRight:10,height:25,width:25}}
                    onPress={() => props.navigation.navigate("Profile")}
                    source={{uri:avatar}}
                />
            ),})
    }


    const {theme} = useContext(ThemeContext)
    const [categoryList,setCategoryList]=useState([])
    const [instructorList,setInstructorList]=useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        getAllCategory(setCategoryList).then(r => {})
        getInstructorList(setInstructorList).then(r => {})
        if(categoryList!==[]){
            setIsLoading(false)
        }
    },[])


  return (
      isLoading?<View>
              <ActivityIndicator size="large" />
          </View>:
      <View style={{...styles.container,backgroundColor:theme.background}}>
          <ScrollView>
              <View style={{...styles.tileContainer,backgroundColor:theme.background}}>
                  <Tile onPress={()=>{
                      props.navigation.push("NewRelease")
                  }} containerStyle={styles.tile}
                      title={'New Release'} featured={true} height={100} titleStyle={styles.tileTitle}
                        imageSrc={require('../../../assets/background-3.jpg')}>
                  </Tile>
                  <Tile onPress={()=>{
                      props.navigation.push("Recommended")
                  }} containerStyle={styles.tile}
                      title={'Recommended for you'} featured={true} titleNumberOfLines={2} height={100} titleStyle={styles.tileTitle}
                        imageSrc={require('../../../assets/background-2.jpg')}>
                  </Tile>
              </View>
              <Text style={styles.subtitle}>Popular skills</Text>
              <View style={{flexDirection: 'row', margin:5}}>
                  <ScrollView horizontal={true}>
                      {categoryList.map(item => <Tag navigation={props.navigation} item={item}></Tag> )}
                  </ScrollView>
              </View>
              <Text style={styles.subtitle}>Top Authors</Text>
              <AuthorList navigation={props.navigation} list={instructorList}></AuthorList>
          </ScrollView>
      </View>

  )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    titleContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height: 40,
        backgroundColor: 'white',
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
    },
    subtitle:{
        fontSize:20,
        fontWeight:'bold',
        color: 'black',
        marginLeft:10,
    },
    tile:{
        margin:10,
    },
    tileTitle:{
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
    },
    tileContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    }
});


export default Browse
