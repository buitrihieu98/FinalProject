import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SearchBar} from "react-native-elements";
import ListCourses from "../ListCourses/ListCourses";
import RecentSearches from "./RecentSearches";
import SearchedAuthorList from "./SearchedAuthorList";
import SearchedCoursesList from "./SearchedCoursesList";
import SearchedPathList from "./SearchedPathList";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import {search} from "../../Actions/search_action";

const Search = (props) => {
    const {theme} = useContext(ThemeContext)
    const [searching,setSearching]=useState('')
    const [recentSearchesList,setRecentSearchesList] = useState([])
    const [result,setResult]=useState([])
    const [nothingFound,setNothingFound]=useState(false)
    useEffect(()=>{
        if(searching!==''){
            search(searching,setResult).then()

        }
    },[searching])

    useEffect(()=>{
        if(result.length===0){
            setNothingFound(true)
        }
        else {
            setNothingFound(false)
        }

    },[result])


  return (
      <View style={{...styles.container,backgroundColor:theme.background}}>
          <SearchBar
              lightTheme={true}
              containerStyle={{...styles.search,backgroundColor:theme.background}}
              placeholder={'Type Here...'}
              onChangeText={text=>setSearching(text)}
              value={searching}
          ></SearchBar>
          {/*<RecentSearches rSList={rSList}></RecentSearches>*/}
          <ScrollView>
              {nothingFound?<Text style={{alignSelf:'center'}}>Nothing found</Text>:<SearchedCoursesList navigation={props.navigation} list={result}></SearchedCoursesList>}
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
        backgroundColor: 'white',
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
