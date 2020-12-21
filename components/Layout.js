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
                <a href="/about-us">About Us</a>
                </li>
                <li>
                <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                <a href="/privacy-policy">Privacy Policy</a>
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
              <a style={{textDecoration:"none"}} href="/blogs"><h1 style={{color:"#fff"}}>{APP_NAME}</h1></a>
            </div>
            </div>
        </div>
            <Header />
               <div style={{minHeight:'35vh',backgroundColor:"#e2dee2"}}>  {/*Google Analytics */}
               <script async src="https://www.googletagmanager.com/gtag/js?id=G-FSB26235ZC"></script>
               <script dangerouslySetInnerHTML={{
                   __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments)}
                   gtag('js', new Date());
                   
                   gtag('config', 'G-FSB26235ZC');
                   `
               }}></script>
               {/*Google Analytics */}
               {children}
               </div>
            <Footer />
        </React.Fragment>
    )
}

export default Layout