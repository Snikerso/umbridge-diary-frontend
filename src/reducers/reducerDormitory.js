function reducerDormitory(state, action) {
    switch (action.type) {
        case 'INIT':
            return action.data
        case 'AddNewDormitory':
            console.log('action',action)
            console.log('action',state)
            return [...state, action.dormitory]
        case 'DeleteMagDormitory':

             return state.map((item) => item.id === action.dormitory.id ? { ...item, mags: item.mags.filter(it => it.id !== action.item.id)} : item)

        case 'AddMagToDormitory':
            return state.map((item) => item.id === action.dormitory.id ? { ...item, mags:  [...item.mags, action.mag] } : item)
        
        case 'DeleteDormitory':
            return [...state.filter(dormitory => dormitory.id !== action.dormitoryid)]

        default:
            throw new Error();
    }
}
export default reducerDormitory 