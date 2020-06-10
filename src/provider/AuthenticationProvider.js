import React, {useState} from 'react';


const AuthenticationContext = React.createContext()

const AuthenticationProvider = (props) => {
    const [authentication, setAuthentication] = useState()
    const [favoritesList, setFavoritesList] = useState([])
  return (
      <AuthenticationContext.Provider value={{authentication, setAuthentication,favoritesList, setFavoritesList}} >
          {props.children}
      </AuthenticationContext.Provider>
  )
};
export {AuthenticationProvider, AuthenticationContext}
