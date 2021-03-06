import React, { Component } from 'react';

const NavBar = (props) => {
    const {navValue, totalVal} = props;
    const formatTotal = val => {
        return val === 0 ? "non selected" : val;
    }

    return (
        <> 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                No of Rows Clicked 
                <span className="badge m-2 badge-secondary">
                    {navValue}
                </span>
                <span style={{marginLeft:"100%"}}>
                    Total Number of Clicks: 
                    <span className="badge m-2 badge-info">
                        {formatTotal(totalVal)}
                    </span>
                </span>
                
            </a>
        </nav>
        
        </>
     );
}
 
export default NavBar;