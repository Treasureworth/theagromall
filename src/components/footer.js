import React from 'react'
import {ReactComponent as Logo} from '../assets/images/logo.svg'
import { primaryColor } from '../assets/theme/color';

const FooterComponent = () => {
    return(
        <div className="py-3 container">
            <Logo className="logo" fill='white'/>
            <p style={{color: 'white', fontWeight: 600, marginTop: 20}}>
                AGROMALL CODING CHALLENGE 
            </p>
            <h4 style={{color: 'white'}}>
            submitted by oniodunayo@hotmail.com
            </h4>
            <p style={{color: 'white'}}>
                {new Date().getFullYear()}
            </p>
        </div>
    )
}

export default FooterComponent;