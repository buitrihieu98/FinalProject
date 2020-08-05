import React, {useContext} from 'react';
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
import Subscription from "./src/Components/Subscription/Subscription";
import AuthorDetail from "./src/Components/Details/AuthorDetail";
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import{createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import SeeAllCourses from "./src/Components/Home/SeeAllCourses";
import TopicDetail from "./src/Components/Details/TopicDetail";
import {Icon} from "react-native-elements";
import ProfileButton from "./src/Components/Home/ProfileButton";
import {AuthenticationContext, AuthenticationProvider} from "./src/provider/AuthenticationProvider";
import NewRelease from "./src/Components/Browse/NewRelease";
import Recommended from "./src/Components/Browse/Recommended";
import {ThemeContext, ThemeProvider} from "./src/provider/ThemeProvider";
import CourseDetailToBuy from "./src/Components/Home/CourseDetailToBuy";
import SeeAllCourses2 from "./src/Components/Home/SeeAllCourses2";
import ChangePass from "./src/Components/AccountManagement/ChangePass";
import RelatedCourses from "./src/Components/Details/relatedCourses";

const Stack = createStackNavigator();
const MainStack= createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack=(props)=>{
    const {theme} = useContext(ThemeContext)
    return (
            <Stack.Navigator
                mode={'modal'} screenOptions={{headerStyle:{backgroundColor:theme.background},headerTitleStyle:{fontWeight:'bold'}}} initialRouteName="Home">
                <Stack.Screen name="Home"  navigation={props.navigation} component={Home} options={{ title: 'Home',}} />
                <Stack.Screen name="CourseDetail" navigation={props.navigation} component={CourseDetail} options={({route})=>({title: ''})} />
                <Stack.Screen name="AuthorDetail" navigation={props.navigation} component={AuthorDetail} options={({route})=>({title: route.params.item.username})} />
                <Stack.Screen name="SeeAllCourses" navigation={props.navigation} component={SeeAllCourses} options={{ title: '' }} />
                <Stack.Screen name="Profile" navigation={props.navigation} component={ProfileComponent} options={{ title: '' }} />
                <Stack.Screen name="TopicDetail" navigation={props.navigation} component={TopicDetail} options={({route})=>({title: ''})} />
                <Stack.Screen name="CourseDetailToBuy" navigation={props.navigation} component={CourseDetailToBuy} />
                <Stack.Screen name="SeeAllCourses2" navigation={props.navigation} component={SeeAllCourses2} options={{ title: '' }} />
                <Stack.Screen name="RelatedCourses" navigation={props.navigation} component={RelatedCourses} options={({route})=>({title: 'Related Courses'})} />
            </Stack.Navigator>
    )
};
const DownloadStack=()=>{
    const {theme} = useContext(ThemeContext)
    return (
            <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:theme.background},headerTitleStyle:{fontWeight:'bold'}}}>
                <Stack.Screen name="Download" component={Download} />
                <Stack.Screen name="CourseDetail" component={CourseDetail} options={({route})=>({title: route.params.item.title})} />
                <Stack.Screen name="AuthorDetail" component={AuthorDetail} options={({route})=>({title: route.params.item.username})} />
                <Stack.Screen name="Profile" component={ProfileComponent} options={{ title: '' }} />
                <Stack.Screen name="TopicDetail" component={TopicDetail} options={({route})=>({title: ''})} />
                <Stack.Screen name="CourseDetailToBuy" component={CourseDetailToBuy} />
                <Stack.Screen name="RelatedCourses" navigation={props.navigation} component={RelatedCourses} options={({route})=>({title: 'Related Courses'})} />
            </Stack.Navigator>
    )
};
const BrowseStack=(props)=>{
    const {theme} = useContext(ThemeContext)
    return (
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:theme.background},headerTitleStyle:{fontWeight:'bold'}}}>
            <Stack.Screen name="Browse" component={Browse} />
            <Stack.Screen name="NewRelease" component={NewRelease} />
            <Stack.Screen name="Recommended" component={Recommended} />
            <Stack.Screen name="CourseDetail" component={CourseDetail} />
            <Stack.Screen name="RelatedCourses" navigation={props.navigation} component={RelatedCourses} options={({route})=>({title: 'Related Courses'})} />
            <Stack.Screen name="TopicDetail" component={TopicDetail} options={({route})=>({title: ''})} />
            <Stack.Screen name="AuthorDetail" component={AuthorDetail} options={({route})=>({title: route.params.item.username})} />
            <Stack.Screen name="Profile" component={ProfileComponent} options={{ title: '' }} />
            <Stack.Screen name="CourseDetailToBuy" component={CourseDetailToBuy} />
        </Stack.Navigator>
    )
};
const SearchStack=(props)=>{
    const {theme} = useContext(ThemeContext)
    return (
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:theme.background},headerTitleStyle:{fontWeight:'bold'}}}>
            <Stack.Screen name="Search"  navigation={props.navigation} component={Search} />
            <Stack.Screen name="CourseDetail" component={CourseDetail} />
            <Stack.Screen name="RelatedCourses" navigation={props.navigation} component={RelatedCourses} options={({route})=>({title: 'Related Courses'})} />
            <Stack.Screen name="CourseDetailToBuy" component={CourseDetailToBuy} />
            <Stack.Screen name="AuthorDetail" component={AuthorDetail} options={({route})=>({title: route.params.item.username})} />
        </Stack.Navigator>
    )
};
const SettingStack=()=>{
    const {theme} = useContext(ThemeContext)
    return(
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:theme.background},headerTitleStyle:{fontWeight:'bold'}}}>
            <Stack.Screen name="Setting" component={SettingComponent} />
            <Stack.Screen name="ChangeAccountInfo" component={ChangeAccountInfo} />
            <Stack.Screen name="ChangePass" component={ChangePass} />
            <Stack.Screen name="Subscription" component={Subscription} />
        </Stack.Navigator>
    )
}
const TabRoot=()=>{
    const {theme} = useContext(ThemeContext)
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
                        else if (route.name === 'Setting') {
                            iconName = 'settings';
                        }
                        return <Icon name={iconName} type={'material-icons'} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    activeBackgroundColor:theme.itemBackground,
                    inactiveBackgroundColor:theme.background,
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                {/*<Tab.Screen name="Download" component={DownloadStack} />*/}
                <Tab.Screen name="Browse" component={BrowseStack} />
                <Tab.Screen name="Search" component={SearchStack} />
                <Tab.Screen name="Setting" component={SettingStack} />
            </Tab.Navigator>

    )

}
// //for testing
// const author=[{id:1, username:'Hai Pham', avatar:'', coursesList :coursesList }]
// const course=
//     {id:1, title: 'React Native', author: author , level:'Intermediate', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,}
// const coursesList=[
//     {id:1, title: 'React Native', author: author , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
//     {id:2, title: 'Java', author: 'Hai Pham' , level:'Beginner', releasedDate: 'July 2019', duration: '50 hours', rating : 5, ratingNumber: 709,},
//     {id:3, title: 'Game Development', author: 'ABC' , level:'Beginner', releasedDate: 'Sept 2019', duration: '50 hours', rating : 3, ratingNumber: 1307,}]
// const path= {id:1, title: 'React Native', coursesNumber:12, coursesList :coursesList, progress:0}


export default function App() {
  return (
      <ThemeProvider>
              <AuthenticationProvider>
                  <NavigationContainer>
                      <MainStack.Navigator screenOptions={{headerShown:false}} initialRouteName={"Login"} >
                          <MainStack.Screen name={"Login"} component={LoginComponent}  ></MainStack.Screen>
                          <MainStack.Screen name={"SignUp"} component={SignUp} ></MainStack.Screen>
                          <MainStack.Screen name={"Forgot"} component={ForgotPassword} ></MainStack.Screen>
                          <MainStack.Screen name={"MainScreen"}  component={TabRoot} ></MainStack.Screen>
                      </MainStack.Navigator>
                  </NavigationContainer>
              </AuthenticationProvider>
      </ThemeProvider>


  );
}
