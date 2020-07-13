import React from 'react'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import { primaryColor } from '../assets/theme/color';

const HeaderComponent = () => {
    return(
        <div className="py-3 container">
            <Logo className="logo" fill={primaryColor}/>
        </div>
    )
}

export default HeaderComponent;