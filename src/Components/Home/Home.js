import React, {useContext} from 'react';
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
    // axios.post('https://api.itedu.me/user/login', {
    //     email: username,  password:password
    // }).then((response)=>{
    //     if(response.status===200){
    //         dispatch({type:LOGIN_SUCCEEDED, data:response.data})
    //         console.log('login succeeded')
    //     }
    //     else{
    //         console.log('login failed 1: ',response.status)
    //         dispatch({type:LOGIN_FAILED})
    //     }
    // }).catch((error)=>{
    //     dispatch({type:LOGIN_FAILED})
    //     console.log('login failed 2',error)
    // });


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
                {/*<SectionCourses navigation={props.navigation} list={userInfo.continueList} title={'Continue Learning'}></SectionCourses>*/}
                <PathList navigation={props.navigation} list={data.pathList} title={'Path'}></PathList>
                <SectionCourses navigation={props.navigation} list={data.coursesList} title={'Software development'}></SectionCourses>
                {/*{faveList.length>0?fave:<View></View>}*/}
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







