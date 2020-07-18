import React, {useState} from 'react';


const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const themes = {light:{background:'white', foreground:'black',itemBackground:'linen'}, dark:{background:'dimgray', foreground:'white',itemBackground:'lightcyan'}}
    const [theme, setTheme] = useState(themes.light)
    const changeTheme = ()=>{
        theme.background==='white'?setTheme(themes.dark):setTheme(themes.light)
    }
    return (
        <ThemeContext.Provider value={{theme, changeTheme}} >
            {props.children}
        </ThemeContext.Provider>
    )
};
export {ThemeProvider, ThemeContext}
