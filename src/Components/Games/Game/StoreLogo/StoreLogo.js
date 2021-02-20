import React from 'react';

import classes from './StoreLogo.module.css';

import LogoSteam from '../../../../assets/img/steam-icon-14868.png'
import LogoEpic from '../../../../assets/img/Epic_Games_logo.png';
import LogoUbisoft from '../../../../assets/img/Logo_de_Ubisoft.png';
import UnknownStore from '../../../../assets/img/5a461410d099a2ad03f9c998.png'

const storeLogo = (props) => {

    let logo = null;
    switch(props.store){
        
        case 'Steam':
            logo =  <div className = {classes.Logo}> <img src ={LogoSteam} alt = 'Company Logo' /></div>
        break;

        case 'Epic':
            logo =  <div className = {classes.Logo}> <img src ={LogoEpic} alt = 'Company Logo' /></div>
        break;

        case 'UPLAY':
            logo =  <div className = {classes.Logo}> <img src ={LogoUbisoft} alt = 'Company Logo' /></div>  
        break;

        default:
        logo = <div className = {classes.Logo}> <img src ={UnknownStore} alt = 'Company Logo' /></div>
    }
    
   return logo;
    
}

export default storeLogo;