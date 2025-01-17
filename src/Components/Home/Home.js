import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Text, ImageBackground, ActivityIndicator} from 'react-native';
import SectionCourses from "./SectionCourses";
import {Avatar} from "react-native-elements";
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import SectionCourses2 from "./SectionCourse2";
import {getTopRateCourses, getTopSellCourses} from "../../Services/courses-service";
import {getContinueLearning, getFavoriteCourses} from "../../Services/user-service";


const Home = (props) => {
    const {theme} = useContext(ThemeContext)
    const authentication = useContext(AuthenticationContext)
    const userInfo= authentication.state.userInfo
    const [topSellList, setTopSellList]=useState([])
    const [topRateList, setTopRateList]=useState([])
    const [faveList, setFaveList]=useState([])
    const[continueList,setContinueList]=useState([])
    const [isLoading,setIsLoading] = useState(true)
    const introduction="Exceed, it means to be greater than a number,an amount,or to go past an allowed limit. With Exceed,we hope you can improve your skills,erase your knowledge's boundary by joining online courses."
    if(userInfo){
        props.navigation.setOptions({headerRight: () => (
                <Avatar
                    style={{margin:5,marginRight:10,height:25,width:25}}
                    onPress={() => props.navigation.navigate("Profile")}
                    source={{uri:userInfo.avatar}}
                />
            ),})
    }
    useEffect(()=>{
        getTopRateCourses(setTopRateList).then(r => {})
        getTopSellCourses(setTopSellList).then(r => {})
        getContinueLearning(authentication.state.token,setContinueList).then(r => {})
        getFavoriteCourses(authentication.state.token,setFaveList).then(r => {})
        if((topSellList!==[])&&(topRateList!==[])&&(continueList!==[])&&(faveList!==[])){
            setIsLoading(false)
        }
    },[])

    const contiList=<SectionCourses2 navigation={props.navigation} list={continueList} title={'Continue Learning'}></SectionCourses2>
    const fave =<SectionCourses2 navigation={props.navigation} list={faveList} title={'Your Favorites Courses'}></SectionCourses2>

    return (
        isLoading?<View>
                <ActivityIndicator size="large" />
        </View>:
        <View style={{...styles.container,backgroundColor:theme.background}}>
            <ScrollView>
                <View >
                    <Text style={styles.intro}>Welcome to Exceed!</Text>
                    <Text style={styles.intro}>{introduction}
                    </Text>
                </View>
                {continueList.length>0?contiList:<View></View>}
                {faveList.length>0?fave:<View></View>}
                <SectionCourses navigation={props.navigation} list={topSellList} title={'Top sell courses'}></SectionCourses>
                <SectionCourses navigation={props.navigation} list={topRateList} title={'Top rate courses'}></SectionCourses>
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
    intro:{
        color:'gray',
        fontSize: 15,
        margin:5,

    }
});
export default Home







