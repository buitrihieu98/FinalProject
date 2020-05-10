import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from "./src/Components/Authentication/LoginComponent";
import SignUp from "./src/Components/Authentication/SignUp";
import ForgotPassrod from "./src/Components/Authentication/ForgotPassword";
import ResetPassword from "./src/Components/Authentication/ResetPassword";
import ProfileComponent from "./src/Components/AccountManagement/ProfileComponent";
import SettingComponent from "./src/Components/AccountManagement/SettingComponent";


export default function App() {
  return (
      // <LoginComponent></LoginComponent>
      // <SignUp></SignUp>
      // <ForgotPassrod></ForgotPassrod>
      // <ResetPassword></ResetPassword>
      // <ProfileComponent></ProfileComponent>
      <SettingComponent></SettingComponent>


  );
}
