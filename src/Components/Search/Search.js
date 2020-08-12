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
import SearchedAuthorList from "./SearchedAuthorList";
import SearchedCoursesList from "./SearchedCoursesList";
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import {deleteHistory, getSearchHistory, search} from "../../Services/courses-service";
const Search = (props) => {
    const {theme} = useContext(ThemeContext)
    const authentication = useContext(AuthenticationContext)
    const [searching,setSearching]=useState('')
    const [recentSearchesList,setRecentSearchesList] = useState([])
    const [resultCourses,setResultCourses]=useState([])
    const [resultAuthors,setResultAuthors]=useState([])
    const [noAll,setNoAll]=useState(true)
    const [noAuthors,setNoAuthors]=useState(true)
    const [noCourses,setNoCourses]=useState(true)
    const [showHistory,setShowHistory]=useState(true)
    const [buttonGroupID,setButtonGroupID]=useState('0')
    const history =
        <View>
            {recentSearchesList.length!==0?<Text style={{paddingLeft:10,paddingTop:10,fontSize:20,fontWeight:'bold'}}>{`Recent search (${recentSearchesList.length})`}</Text>:<View></View>}
            <FlatList horizontal={false} data={recentSearchesList} renderItem={({item, index, separators}) =>
                (<TouchableOpacity style = {{width:'100%',}} onPress={()=>{onPressRecentSearch(item)}}>
                    <View style = {styles.recentItem}>
                        <Image  source={require('../../../assets/icon_recent.jpg')} style={styles.iconRecent}>
                        </Image>
                        <Text style={{fontSize:20,}} numberOfLines = { 1 }>{item.content}</Text>
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
    },[resultCourses,resultAuthors])
    useEffect(()=>{
        getSearchHistory(authentication.state.token,setRecentSearchesList).then((r)=>{})
    },[])

    const onPressRecentSearch=(item)=>{
        setSearching(item.content)
        setShowHistory(false)
        if(item.content!==''){
            search(item.content,setResultCourses,setResultAuthors,authentication.state.token,setNoCourses,setNoAuthors,setNoAll).then((r)=>{})
        }
    }

  return (
       <View style={{...styles.container,backgroundColor:theme.background}}>
          <SearchBar
              lightTheme={theme.background==='white'?true:false}
              containerStyle={{...styles.search,backgroundColor:theme.background}}
              placeholder={'Type Here...'}
              onChangeText={text=>{setSearching(text)
              setShowHistory(true)}}
              onClear={()=>{
                  setResultCourses([])
                  setSearching('')}
              }
              onSubmitEditing={()=>{
                  setShowHistory(false)
                  if(searching!==''){
                      search(searching,setResultCourses,setResultAuthors,authentication.state.token,setNoCourses,setNoAuthors,setNoAll).then((r)=>{})
                  }
              }}
              value={searching}
          ></SearchBar>
           {showHistory?history:<View></View>}
           {/*{nothingFound?<Text style={{alignSelf:'center'}}>Nothing found</Text>:<SearchedCoursesList navigation={props.navigation} list={result}></SearchedCoursesList>}*/}
           {/*{result.length===0?<View></View>:<SearchedCoursesList noCourses={noCourses} navigation={props.navigation} list={result}></SearchedCoursesList>}*/}

           <SearchedCoursesList noCourses={noCourses} navigation={props.navigation} list={resultCourses}></SearchedCoursesList>
           <SearchedAuthorList noAuthors={noAuthors} navigation={props.navigation} list={resultAuthors}></SearchedAuthorList>
       </View>


  )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    recentItem:{
        width:'100%',
        height:30,
        flexDirection: `row`,
        justifyContent: `flex-start`,
        alignItems: 'center',
    },
    iconRecent:{
        height: 18,
        width: 18,paddingLeft:10
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
        height: 18,
        width: 18,
    },
});

export default Search
