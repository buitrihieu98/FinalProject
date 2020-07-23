import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Text, ImageBackground} from 'react-native';
import SectionCourses from "./SectionCourses";
import PathList from "./PathList";
import AuthorList from "./AuthorList";
import {Avatar} from "react-native-elements";
import {LocalDataContext} from "../../provider/localDataProvider";
import {ThemeContext} from "../../provider/ThemeProvider";
import {AuthenticationContext} from "../../provider/AuthenticationProvider";
import axios from "axios";
import {LOGIN_FAILED, LOGIN_SUCCEEDED} from "../../Actions/authentication_action";
import api from "../../API/api";

const Home = (props) => {
    props.navigation.setOptions({headerRight: () => (
            <Avatar
                style={{margin:5,marginRight:10,height:25,width:25}}
                onPress={() => props.navigation.navigate("Profile")}
                source={require("../../../assets/icon-avatar.png")}
            />
        ),})

    const dataContext = useContext(LocalDataContext)
    const {theme} = useContext(ThemeContext)
    const data=dataContext.data
    // const {authentication, setAuthentication,favoritesList, setFavoritesList} = useContext(AuthenticationContext)
    const authentication = useContext(AuthenticationContext)
    const userInfo= authentication.state.userInfo
    const [topNewList, setTopNewList]=useState([])
    const [topRateList, setTopRateList]=useState([])
    const [faveList, setFaveList]=useState([])
    const[recommendList,setRecommendList]=useState([])
    const[continueList,setContinueList]=useState([])
    useEffect(()=>{
        axios.post('https://api.itedu.me/course/top-new', {
            limit: 10,  page: 1
        }).then((response)=>{
            if(response.status===200){
                setTopNewList(response.data.payload)
            }
            else{
                console.log('Failed : ',response.status)
            }
        }).catch((error)=>{
            console.log('failed ',error)
        })
        axios.post('https://api.itedu.me/course/top-rate', {
            limit: 10,  page: 1
        }).then((response)=>{
            if(response.status===200){
                setTopRateList(response.data.payload)
            }
            else{
                console.log('Failed : ',response.status)
            }
        }).catch((error)=>{
            console.log('failed ',error)
        })

        api.get(`https://api.itedu.me/user/recommend-course/${userInfo.id}/10/1`,{},).then((response)=>{
            if(response.isSuccess){
                setRecommendList(response.data.payload)
            }
        })
        api.get(`https://api.itedu.me/user/get-process-courses`,{},authentication.state.token).then((response)=>{
            if(response.isSuccess){
                setContinueList(response.data.payload)
            }
        })
        api.get(`https://api.itedu.me/user/get-favorite-courses`,{},authentication.state.token).then((response)=>{
            console.log('fave',response)
            if(response.isSuccess){
                setFaveList(response.data.payload)
            }
        })
    },[])

    //const [topNewList, setTopNewList]=useState([])
    // const getTopNew = api.post('https://api.itedu.me/course/top-new',{
    //     limit: 10,
    //     page: 1
    // })
    // if(getTopNew.isSuccess){
    //     setTopNewList(getTopNew.data.payload)
    // }



    // const getTopRate =api.post('https://api.itedu.me/course/top-rate',{
    //     limit: 10,
    //     page: 1
    // }).then()
    // if(getTopRate.isSuccess){
    //     setTopRateList(getTopRate.data.payload)
    // }
    // const getFave = api.post('https://api.itedu.me/course/courses-user-favorite-categories',userInfo.id)
    // if(getTopRate.isSuccess){
    //     setFaveList(getFave.data.payload)
    // }
    const recList=<SectionCourses navigation={props.navigation} list={recommendList} title={'Recommend for you'}></SectionCourses>
    const contiList=<SectionCourses navigation={props.navigation} list={continueList} title={'Continue Learning'}></SectionCourses>
    const fave =<SectionCourses navigation={props.navigation} list={faveList} title={'Favorites Courses'}></SectionCourses>

    return (
        <View style={styles.container}>
            {/*<View style={styles.titleContainer}>*/}
            {/*    <Text style={styles.title}>Home</Text>*/}
            {/*</View>*/}
            <ScrollView>
                <View >
                    <Text style={styles.intro}>Welcome to Exceed!</Text>
                    <Text style={styles.intro}>Exceed, it means to be greater than a number,an amount,
                        or to go past an allowed limit. With Exceed,
                        we hope you can improve your skills,
                        erase your knowledge's boundary by joining online courses.
                    </Text>
                </View>
                <SectionCourses navigation={props.navigation} list={topNewList} title={'Top new courses'}></SectionCourses>
                <SectionCourses navigation={props.navigation} list={topRateList} title={'Top rate courses'}></SectionCourses>
                {/*<PathList navigation={props.navigation} list={data.pathList} title={'Path'}></PathList>*/}
                {faveList.length>0?fave:<View></View>}
                {continueList.length>0?contiList:<View></View>}
                {recommendList.length>0?recList:<View></View>}
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







