import {createContext} from 'react'

const magContext = createContext({
    stateMag:{},
    dispatchMag: ()=>{}
})

export default magContext