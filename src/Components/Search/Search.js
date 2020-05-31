import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SearchBar} from "react-native-elements";
import ListCourses from "../ListCourses/ListCourses";
import RecentSearches from "./RecentSearches";
import SearchedAuthorList from "./SearchedAuthorList";
import SearchedCoursesList from "./SearchedCoursesList";
import SearchedPathList from "./SearchedPathList";

const Search = (props) => {
    const [searching,setSearching]=useState('')
    const [recentSearchesList,setRecentSearchesList] = useState([])
    const [result,setResult]=useState([])
    //authorList for testing
    const authorList=[{id:1, username:'Hai Pham', avatar:''}, {id:2, username:'Hieu', avatar:''}, {id:3, username:'Nam', avatar:''},
        {id:4, username:'Vi', avatar:''}, {id:5, username:'Thao', avatar:''}, {id:6, username:'Thy', avatar:''},]
    //coursesList for testing
    const coursesList=[
        {id:1, title: 'React Native', author: 'Hai Pham' , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
        {id:2, title: 'Java', author: 'Hai Pham' , level:'Beginner', releasedDate: 'July 2019', rating : 5,ratingNumber: 709,},
        {id:3, title: 'Game Development', author: 'ABC' , level:'Beginner', releasedDate: 'Sept 2019', duration: '50 hours', rating : 3, ratingNumber: 1307,},]
    //recentSearchesList for testing
    const rSList=[{id:1, value:'hieu'},{id:2, value:'vi'},{id:3, value:'nam'},{id:4, value:'courses'}]
    //pathList for testing
    const pathList=[
        {id:1, title: 'React Native', coursesNumber:12}, {id:2, title: 'Java', coursesNumber:25}, {id:3, title: 'PHP', coursesNumber:12},]

  return (
      <View style={styles.container}>
          <SearchBar
              lightTheme={true}
              containerStyle={styles.search}
              placeholder={'Type Here...'}
              onChangeText={text=>setSearching(text)}
              value={searching}
          ></SearchBar>
          {/*<RecentSearches rSList={rSList}></RecentSearches>*/}
          <ScrollView>
              <SearchedAuthorList navigation={props.navigation} list={authorList}></SearchedAuthorList>
              <SearchedCoursesList navigation={props.navigation} list={coursesList}></SearchedCoursesList>
              <SearchedPathList navigation={props.navigation} list={pathList}></SearchedPathList>
          </ScrollView>


      </View>


  )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    search:{
        backgroundColor: 'beige',
    },
    subTitleContainer:{
        flexDirection:'row',
        height: 40,
        alignItems:'center',
    },
    subTitle:{
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold',
    },
    rmAllButton:{
        position:'absolute',
        flexDirection:'row',
        justifyContent:'center',
        right: 10,
        width:80,
    },
    rmAllText:{
        fontSize:13,
        color:'blue',
    }
});

export default Search
