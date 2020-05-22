import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from "./src/Components/Authentication/LoginComponent";
import SignUp from "./src/Components/Authentication/SignUp";
import ForgotPassword from "./src/Components/Authentication/ForgotPassword";
import ResetPassword from "./src/Components/Authentication/ResetPassword";
import ProfileComponent from "./src/Components/AccountManagement/ProfileComponent";
import SettingComponent from "./src/Components/AccountManagement/SettingComponent";
import ChangeAccountInfo from "./src/Components/AccountManagement/ChangeAccountInfo";
import Home from "./src/Components/Home/Home";
import SplashScreen from "./src/Components/Global/SplashScreen";
import Download from "./src/Components/Download/Download";
import Search from "./src/Components/Search/Search";
import Browse from "./src/Components/Browse/Browse";
import CourseDetail from "./src/Components/Details/CourseDetail";
import PathDetail from "./src/Components/Details/PathDetail";
import Subscription from "./src/Components/Subscription/Subscription";
import AuthorDetail from "./src/Components/Details/AuthorDetail";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import{createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SeeAllCourses from "./src/Components/Home/SeeAllCourses";
import SeeAllPath from "./src/Components/Home/SeeAllPath";
import TopicDetail from "./src/Components/Details/TopicDetail";
import {Icon} from "react-native-elements";
import ProfileButton from "./src/Components/Home/ProfileButton";

const Stack = createStackNavigator();
const MainStack= createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack=(props)=>{
    return (
            <Stack.Navigator
                mode={'modal'} screenOptions={{headerStyle:{backgroundColor:'azure'},headerTitleStyle:{fontWeight:'bold'}}} initialRouteName="Home">
                <Stack.Screen name="Home" navigation={props.navigation} component={Home} options={{ title: 'Home',}} />
                <Stack.Screen name="CourseDetail" component={CourseDetail} options={({route})=>({title: route.params.item.title})} />
                <Stack.Screen name="AuthorDetail" component={AuthorDetail} options={({route})=>({title: route.params.item.username})} />
                <Stack.Screen name="SeeAllCourses" component={SeeAllCourses} options={{ title: '' }} />
                <Stack.Screen name="PathDetail" component={PathDetail} options={({route})=>({title: route.params.item.title})} />
                <Stack.Screen name="SeeAllPath" component={SeeAllPath} options={{ title: '' }} />
                <Stack.Screen name="Profile" component={ProfileComponent} options={{ title: '' }} />
            </Stack.Navigator>
    )
};
const DownloadStack=()=>{
    return (
            <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'azure'},headerTitleStyle:{fontWeight:'bold'}}}>
                <Stack.Screen name="Download" component={Download} />
                <Stack.Screen name="CourseDetail" component={CourseDetail} options={({route})=>({title: route.params.item.title})} />
                <Stack.Screen name="AuthorDetail" component={AuthorDetail} options={({route})=>({title: route.params.item.username})} />
            </Stack.Navigator>
    )
};
const BrowseStack=()=>{
    return (
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'azure'},headerTitleStyle:{fontWeight:'bold'}}}>
            <Stack.Screen name="Browse" component={Browse} />
            <Stack.Screen name="CourseDetail" component={CourseDetail} />
            <Stack.Screen name="PathDetail" component={PathDetail} options={({route})=>({title: route.params.item.title})} />
            <Stack.Screen name="TopicDetail" component={TopicDetail} options={({route})=>({title: route.params.item.title})} />
            <Stack.Screen name="SeeAllPath" component={SeeAllPath} options={{ title: '' }} />
            <Stack.Screen name="AuthorDetail" component={AuthorDetail} options={({route})=>({title: route.params.item.username})} />
        </Stack.Navigator>
    )
};
const SearchStack=()=>{
    return (
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'azure'},headerTitleStyle:{fontWeight:'bold'}}}>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="CourseDetail" component={CourseDetail} />
            <Stack.Screen name="PathDetail" component={PathDetail} options={({route})=>({title: route.params.item.title})} />
            <Stack.Screen name="AuthorDetail" component={AuthorDetail} options={({route})=>({title: route.params.item.username})} />
        </Stack.Navigator>
    )
};
const TabRoot=()=>{
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName ='home';
                    }
                    else if (route.name === 'Download') {
                        iconName = 'get-app';
                    }
                    else if (route.name === 'Browse') {
                        iconName = 'apps';
                    }
                    else if (route.name === 'Search') {
                        iconName = 'search';
                    }
                    return <Icon name={iconName} type={'material-icons'} size={size} color={color}/>;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Download" component={DownloadStack} />
            <Tab.Screen name="Browse" component={BrowseStack} />
            <Tab.Screen name="Search" component={SearchStack} />
        </Tab.Navigator>
    )

}
//for testing
const author=[{id:1, username:'Hai Pham', avatar:'', coursesList :coursesList }]
const course=
    {id:1, title: 'React Native', author: author , level:'Intermediate', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,}
const coursesList=[
    {id:1, title: 'React Native', author: author , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    {id:2, title: 'Java', author: 'Hai Pham' , level:'Beginner', releasedDate: 'July 2019', duration: '50 hours', rating : 5, ratingNumber: 709,},
    {id:3, title: 'Game Development', author: 'ABC' , level:'Beginner', releasedDate: 'Sept 2019', duration: '50 hours', rating : 3, ratingNumber: 1307,}]
const path= {id:1, title: 'React Native', coursesNumber:12, coursesList :coursesList, progress:0}


export default function App() {
  return (
      <NavigationContainer>
          <MainStack.Navigator screenOptions={{headerShown:false}} initialRouteName={"Login"} >
              <MainStack.Screen name={"Login"} component={LoginComponent}  ></MainStack.Screen>
              <MainStack.Screen name={"SignUp"} component={SignUp} ></MainStack.Screen>
              <MainStack.Screen name={"Forgot"} component={ForgotPassword} ></MainStack.Screen>
              <MainStack.Screen name={"MainScreen"} component={TabRoot} ></MainStack.Screen>
          </MainStack.Navigator>
      </NavigationContainer>
  );
}
