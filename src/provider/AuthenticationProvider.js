import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';

const AuthenticationContext = React.createContext()

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState()
  return (
      <AuthenticationProvider value={{authentication, setAuthentication}} >
          {props.children}
      </AuthenticationProvider>

  )
};
export {AuthenticationProvider, AuthenticationContext}
