import React from 'react'
import { useSelector} from "react-redux"
const Dashboard = () => {
    const user = useSelector(state => state.authReducer.user)
    if(!user)
    {
        return <h1> waiting ... </h1>
    }
    return (

        <div>
         name :   {user.name} <br/>
         email :  {user.email} 
        </div>
    )
}

export default Dashboard