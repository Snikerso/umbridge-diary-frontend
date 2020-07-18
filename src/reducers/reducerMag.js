function reducerMag(state, action) {

    switch (action.type) {
        case 'AddMag':
            return [...state, action.mag]
        case 'INIT':
            return action.data
        case 'DeleteMag':
            return state.filter(it => it.id !== action.item.id)
        case 'AddMagicScore':
            return state.map(item => (item.id === action.item.id ? { ...item, magicscore: item.magicscore + 1 } : item))
        case 'MinusMagicScore':
            return state.map(item => (item.id === action.item.id ? { ...item, magicscore: item.magicscore - 1 } : item))
        case 'PresentMag':
            return state.map(item => (item.id === action.item.id ? { ...item, present: !action.item.present } : item))
        default:
            throw new Error();
    }
}

export default reducerMag