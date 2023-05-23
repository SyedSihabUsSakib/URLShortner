import React from 'react'

import Header from '../myComponents/Header';
import Footer from '../myComponents/Footer';
import StatComponent from '../myComponents/StatComponent';

const Stat = ({ links }) => {
    let appStyle={
        display:"flex",
        minHeight:'100vh',
        flexDirection: "column",
      }
    
     
    return (
        <div style={appStyle}>
            <Header/>
            <StatComponent links={links}/>
            <Footer/>
        </div>
        
    )
}

export default Stat
