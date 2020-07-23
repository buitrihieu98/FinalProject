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

const Search = (props) => {
    const {theme} = useContext(ThemeContext)
    const [searching,setSearching]=useState('')
    const [recentSearchesList,setRecentSearchesList] = useState([])
    const [result,setResult]=useState([])
    useEffect(()=>{
        if(searching!==''){
            api.post('https://api.itedu.me/course/search',{
                keyword: searching,
                opt: {
                    sort: {
                        attribute: "price",
                        rule: "ASC"
                    },
                    category: [
                    ],
                    time: [
                        {
                            min: 0,
                            max: 1
                        },
                        {
                            min: 3,
                            max: 6
                        }
                    ],
                    price: [
                        {
                            max: 0
                        },
                        {
                            min: 0,
                            max: 200000
                        },
                        {
                            min: 500000,
                            max: 1000000
                        }
                    ]
                },
                limit: 10,
                offset: 1
            }).then((response)=>{
                console.log('search',response)
                if(response.isSuccess){
                    setResult(response.data.payload.rows)
                }
            })
        }

    },[searching])


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
              {/*<SearchedAuthorList navigation={props.navigation} list={authorList}></SearchedAuthorList>*/}
              <SearchedCoursesList navigation={props.navigation} list={result}></SearchedCoursesList>
              {/*<SearchedPathList navigation={props.navigation} list={pathList}></SearchedPathList>*/}
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
