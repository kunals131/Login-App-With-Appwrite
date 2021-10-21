import React from 'react'
import CustomButton from './Utils/CustomButton'
import './Homepage.styles.scss'


const Homepage = (props)=>{
    return (
        <div className='Homepage'>
            <h1>Welcome Home!!</h1>
            <CustomButton onClick={props.logOut}>Logout</CustomButton>
        </div>
    )
}

export default Homepage