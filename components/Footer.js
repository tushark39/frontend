import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API, APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import Private from './auth/Private';
import Search from './blog/search';
import Navbar from 'react-bootstrap/Navbar'
import '../static/css/styles.css';
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Form,
  NavDropdown

} from 'react-bootstrap';
import Link from 'next/link';
import '.././node_modules/nprogress/nprogress.css'
Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()

const Footer = (props) => {

 
useEffect(()=>{
 
},[])

  return (
    <footer style={{position:'',bottom:0,width:'100%'}}>
    <div className="container-fluid center" style={{backgroundColor:"#c5cbe3",color:"#d79922"}}>
            <div className="row pt-3 offset-2 pb-3" >
            <div className="col-md-2  pt-2 text-center">
                <a href="javascript:void(0)">Contact-us</a><br/>
                <a href="javascript:void(0)">About-us</a><br/>
                <a href="#">Privacy policy</a><br/>
                <a href="#">Careers</a><br/>
                <a href="#">Site Map</a><br/>
            </div>
            <div className="col-md-4 text-center pt-3">
            <span style={{fontWeight:"bold"}}>Top Tags:</span><br/>
            <a href="#">News</a><br/>
            <a href="#">Fashion</a><br/>
            <a href="#">Entertainment</a><br/>
            <a href="#">Celebrities</a><br/>
            <a href="#">Movie</a><br/>
            <a href="#">TV-shows</a><br/>  
            </div>
            <div className="col-md-2 text-center pt-3">
                <span style={{fontWeight:"bold"}}>Top Categories:</span><br/>
                <a href="#">News</a><br/>
                <a href="#">Fashion</a><br/>
                <a href="#">Entertainment</a><br/>
                <a href="#">Celebrities</a><br/>
                <a href="#">Movie</a><br/>
                <a href="#">TV-shows</a><br/>   
            </div>
            </div>
        </div>  
        <div className="conatiner-fluid" style={{backgroundColor:"#f1c320",width:"100%",height:2}}></div>
          
        <div className="container-fluid text-center pb-1" style={{backgroundColor:"#f1c320", color:"white"}}><span>&#169; 2020. All Rights Reserved by {APP_NAME}.</span></div>    
    </footer>
  );
}

export default Footer;