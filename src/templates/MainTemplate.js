import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import themeContext from 'contexts/themeContext'
import { themeGryffindor, slytherinTheme } from 'theme/MainTheme'



function MainTemplate({ children }) {
    const [themes, setTheme] = useState('gryffindor');

    // const themeToggler = () => {
    //     themes === 'gryffindor' ? setTheme('slytherin') : setTheme('gryffindor')
    //     themes === 'gryffindor' ? localStorage.setItem('theme','gryffindor') : localStorage.setItem('theme','gryffindor')
    // }
    useEffect(() => {
        // const localTheme = window.localStorage.getItem('theme');
        // setTheme(localTheme)
    }, []);


    return (
        <>
            <themeContext.Provider value={{ themes }} >
                <GlobalStyle />
                <ThemeProvider theme={themes === 'gryffindor' ? themeGryffindor : slytherinTheme }>
                    {children}
                </ThemeProvider>
            </themeContext.Provider>

        </>
    )


}

export default MainTemplate