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


export default function App() {
  //for testing
  const author=[{id:1, username:'Hai Pham', avatar:'', coursesList :coursesList }]
  const course=
    {id:1, title: 'React Native', author: author , level:'Intermediate', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,}
  const coursesList=[
    {id:1, title: 'React Native', author: 'Hai Pham' , level:'Advance', releasedDate: 'July 2019', duration: '50 hours', rating : 4, ratingNumber: 406,},
    {id:2, title: 'Java', author: 'Hai Pham' , level:'Beginner', releasedDate: 'July 2019', duration: '50 hours', rating : 5, ratingNumber: 709,},
    {id:3, title: 'Game Development', author: 'ABC' , level:'Beginner', releasedDate: 'Sept 2019', duration: '50 hours', rating : 3, ratingNumber: 1307,}]
  const path= {id:1, title: 'React Native', coursesNumber:12, coursesList :coursesList, progress:0}

  return (
      //<LoginComponent></LoginComponent>
      //<SignUp></SignUp>
      //<ForgotPassword></ForgotPassword>
      // <ResetPassword></ResetPassword>
      //<ProfileComponent></ProfileComponent>
      //<SettingComponent></SettingComponent>
      //<ChangeAccountInfo></ChangeAccountInfo>
      //<Home></Home>
      //<SplashScreen></SplashScreen>
      //<Download></Download>
      //<Search></Search>
      //<Browse></Browse>
      //<CourseDetail item={course}></CourseDetail>
      //<PathDetail item={path}></PathDetail>
      //<Subscription></Subscription>
      <AuthorDetail item={author[0]}></AuthorDetail>
  );
}
