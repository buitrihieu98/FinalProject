import React, {useContext, useEffect, useRef, useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Dimensions,
    FlatList,
    Image
} from 'react-native';
import {Button, SearchBar} from "react-native-elements";
import ListCourses from "../ListCourses/ListCourses";
import RecentSearches from "./RecentSearches";
import SearchedAuthorList from "./SearchedAuthorList";
import SearchedCoursesList from "./SearchedCoursesList";
import SearchedPathList from "./SearchedPathList";
import {ThemeContext} from "../../provider/ThemeProvider";
import api from "../../API/api";
import {search} from "../../Actions/search_action";
import AuthorItems from "../Home/AuthorItems";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {deleteHistory} from "../../Actions/deleteHistory_action";
import {getSearchHistory} from "../../Actions/getSearchHistory_action";

const Search = (props) => {
    const {theme} = useContext(ThemeContext)
    const authentication = useContext(AuthenticationContext)
    const [searching,setSearching]=useState('')
    const [recentSearchesList,setRecentSearchesList] = useState([])
    const [result,setResult]=useState([])
    const [resultAuthors,setResultAuthors]=useState([])
    const [nothingFound,setNothingFound]=useState(false)
    const [showHistory,setShowHistory]=useState(true)
    const history =
        <View>
            <Text style={{paddingLeft:10,paddingTop:10,fontSize:20,fontWeight:'bold'}}>{`Recent search (${recentSearchesList.length})`}</Text>
            <FlatList horizontal={false} data={recentSearchesList} renderItem={({item, index, separators}) =>
                (<TouchableOpacity
                    style = {{
                        width:'100%',
                    }}
                    key = { recentSearchesList.key }
                    onPress = {() => {
                        setSearching(item.content)
                        setShowHistory(false)
                        if(searching!==''){
                            search(searching,setResult,setResultAuthors,authentication.state.token).then((r)=>{})
                        }

                    }}>
                    <View style = {{
                        width:'100%',
                        height:30,
                        flexDirection: `row`,
                        justifyContent: `flex-start`,
                        alignItems: 'center',
                    }}>
                        <Text style={{paddingLeft:10,fontSize:20,}} numberOfLines = { 1 }>{item.content}</Text>
                        <TouchableOpacity style={styles.buttonEye} onPress = {() => {
                            deleteHistory(item,authentication.state.token).then((r)=>{
                                getSearchHistory(authentication.state.token,setRecentSearchesList).then((r)=>{})
                            })

                        }}>
                            <Image source={require('../../../assets/icon_delete.png')} style={{height:'100%', width:'100%'}}>
                            </Image>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>)}/>
        </View>


    useEffect(()=>{
        getSearchHistory(authentication.state.token,setRecentSearchesList).then((r)=>{})
    },[result,resultAuthors])
    useEffect(()=>{
        getSearchHistory(authentication.state.token,setRecentSearchesList).then((r)=>{})
    },[])


    // useEffect(()=>{
    //     if(searching!==''){
    //         search(searching,setResult).then()
    //     }
    // },[searching])

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
              lightTheme={theme.background==='white'?true:false}
              containerStyle={{...styles.search,backgroundColor:theme.background}}
              placeholder={'Type Here...'}
              onChangeText={text=>{setSearching(text)
              setShowHistory(true)}}
              onSubmitEditing={()=>{
                  setShowHistory(false)
                  if(searching!==''){
                      search(searching,setResult,setResultAuthors,authentication.state.token).then((r)=>{})
                  }
              }}
              value={searching}
          ></SearchBar>
          {/* <SearchHeader*/}
          {/*     ref = { searchHeaderRef }*/}
          {/*     visibleInitially={true}*/}
          {/*     placeholder = 'Search...'*/}
          {/*     placeholderColor = 'gray'*/}
          {/*     pinnedSuggestions = {[ `react-native`, `javascript` ]}*/}
          {/* />*/}
          {/*<RecentSearches rSList={rSList}></RecentSearches>*/}
           {showHistory?history:<View></View>}
           {nothingFound?<Text style={{alignSelf:'center'}}>Nothing found</Text>:<SearchedCoursesList navigation={props.navigation} list={result}></SearchedCoursesList>}
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
    },
    buttonEye:{
        position:'absolute',
        top: 8,
        right:10,
        height: 10,
        width: 10,
    },
});

export default Search
