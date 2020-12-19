import { Head } from 'next/document';
import React from 'react';
import Header from './Header';
import {APP_NAME} from '../config';
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';
// var d = ;
const Layout = ({children}) =>{
    return (
        <React.Fragment>
         <div className="row" style={{backgroundColor:"black",color:"#fff",paddingLeft:10,paddingTop:'5px',height:"40px"}}>
         <div className="col-md-9">
            <ul className="topNavBar">
                <li>
                <a href="#">About Us</a>
                </li>
                <li>
                <a href="#">Conatct Us</a>
                </li>
                <li>
                <a href="#">Privacy Policy</a>
                </li>
            </ul>
         </div>
         <div style={{textAlign:"right"}} className="col-md-2 currentDate">
         <div> 📅&nbsp;{moment().format("Do MMMM,YYYY")}</div>
         </div>
        </div>
        <div style={{height:120,backgroundColor:"#2d283e"}} className="container-fluid lead">
            <div className="row">
            <div style={{marginTop:30,marginLeft:20}} className="col-md-12">
              <a style={{textDecoration:"none"}} href="/"><h1 style={{color:"#fff"}}>{APP_NAME}</h1></a>
            </div>
            </div>
        </div>
            <Header/>
                {children}
            <Footer/>
        </React.Fragment>
    )
}

export default Layout