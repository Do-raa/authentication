import React from 'react'

import {Route , Redirect } from "react-router-dom"
import { useSelector} from "react-redux"
const PrivateRoute = ({component : Component, ...rest}) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)
    if(!isAuth)
    {
        return <Redirect to ="/" />
    }
    return (
        <div>
        <Route component={Component} {...rest} />
        </div>
    )
}

export default PrivateRoute