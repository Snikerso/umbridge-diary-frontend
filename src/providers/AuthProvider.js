import react from 'react'


import React, { useReducer, useState, useEffect } from 'react';


const ListMenager = ({children}) => {
    
    const user = "Paweł"



    const renderProps = {
        user:user
    }



    return props.render(renderProps)
}

export default ListMenager;
