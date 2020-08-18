import React from 'react';
import Logo from './logo.png';

 const Footer = () => {
    return (
        <div className ="khan">
            
            <footer>
                &copy; 2020 Created by :  
            
                <a  target="blank" href="https://github.com/habeelwali"> 
                    habeel wali <img src={Logo} alt=""></img>
                </a>
            </footer>
        </div>
    )
}
export default Footer