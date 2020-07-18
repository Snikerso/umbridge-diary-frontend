import {createContext} from 'react'

const themeContext = createContext({
    theme:{},
    setTheme: ()=>{}
})

export default themeContext