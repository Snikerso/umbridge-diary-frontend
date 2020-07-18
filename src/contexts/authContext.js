import {createContext} from 'react'

const authContext = createContext({
    user:{},
    dispatchUser: ()=>{}
})

export default authContext