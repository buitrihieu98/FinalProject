import React, {useState} from 'react';


const ThemeContext = React.createContext()

const ThemeProvider = (props) => {
    const themes = {light:{background:'white', foreground:'black',itemBackground:'linen'}, dark:{background:'dimgray', foreground:'white',itemBackground:'lightcyan'}}
    const [theme, setTheme] = useState(themes.light)
    const changeTheme = ()=>{
        if(theme===themes.light){
            setTheme(themes.dark)
            console.log(theme)
        }
        else if(theme===themes.dark){
            setTheme(themes.light)
            console.log(theme)
        }
    }
    return (
        <ThemeContext.Provider value={{theme, changeTheme}} >
            {props.children}
        </ThemeContext.Provider>
    )
};
export {ThemeProvider, ThemeContext}
