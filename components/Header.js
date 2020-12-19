import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'bootstrap/dist/css/bootstrap.min.css';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import Private from './auth/Private';
import Search from './blog/search';
import Navbar from 'react-bootstrap/Navbar'
// import '../static/css/style2.css';
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

const Header = (props) => {

 
useEffect(()=>{
 {/* window.onscroll = function() {myFunction()};

  var navbar = document.getElementById("kun");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      console.log("sticks");
      // navbar.classList.add("sticky")
    } else {
      console.log("removed");

      // navbar.classList.remove("sticky");
    }
  }
*/}
},[])



  // const [dropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDrop = () => setDropdownOpen(!dropdownOpen);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  //console.log(APP_NAME,'k')
  return (
    <React.Fragment>



     {/*<div className="row" style={{backgroundColor:"#190000"}}>
     <div className="navBarO col-md-9"  >
     <ul style={{paddingLeft:15}}>
       <li><a href="/categories/news">News</a></li>
       <li><a href="/categories/world">World</a></li>
       <li><a href="/categories/politics">Politics</a></li>
       <li><a href="/categories/fashion ">Fashion</a></li>
       {isAuth() && (
       <li><a href="/blogs" onClick = {() => signout(()=> Router.replace('/blogs'))}>Signout</a></li>
       )}
     </ul>
   </div>
   <div className="col-md-3" style={{paddingTop:10}}>
      <Search/>
   </div>
     </div>
       */}

         <Navbar id="kun" style={{backgroundColor:"#564f6f"}} variant="dark" expand="lg" sticky="top">
      <Navbar.Brand className="navbar-brand" id="logo" href="/blogs"><h3>Daily News</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navBarO" style={{}}>
                <Nav.Link className="navlink" href="/categories/news" active >News</Nav.Link>
                <Nav.Link className="navlink" href="/categories/world">World</Nav.Link>
                <Nav.Link className="navlink" href="/categories/politics">Politics</Nav.Link>
                <Nav.Link className="navlink" href="/categories/fashion">Fashion</Nav.Link>
                {
                  isAuth() && (
                    <Nav.Link href="/blogs" onClick = {() => signout(()=> Router.replace('/blogs'))}>Signout</Nav.Link>
                    )
                }
                <NavDropdown title="🔍"><Search/></NavDropdown>
                
                </Nav>
                </Navbar.Collapse>
         </Navbar>
         
         












      {/*   <Nav.Link href="/categories/bollywood">Bollywood</Nav.Link>
                <Nav.Link href="/categories/hollywood">Hollywood</Nav.Link>
                <Nav.Link href="/categories/web-series">Web-Series</Nav.Link>
                <Nav.Link href="/categories/science">Science</Nav.Link>
  <Nav.Link href="/categories/gadgets">Gadgets</Nav.Link>**/}
      {/*<NavDropdown title="Profile" id="basic-nav-dropdown">              
        {!isAuth() && <React.Fragment>
               {/* <NavDropdown.Item href="/signin">Login</NavDropdown.Item>
        <NavDropdown.Item href="/signup"> Sign Up </NavDropdown.Item>
             </React.Fragment>}
              {isAuth() && isAuth().role===0 && (
                <NavDropdown.Item href='/user' >{`${isAuth().name}'s Dashboard`}</NavDropdown.Item>
             )}
             {isAuth() && isAuth().role===1 &&(
              <NavDropdown.Item href='/admin' >{`Dashboard`}</NavDropdown.Item>
             )}
             {isAuth() && (
                <span>
                  <NavDropdown.Divider />
                 <NavDropdown.Item href="/blogs" onClick = {() => signout(()=> Router.replace('/blogs'))}>Signout</NavDropdown.Item>
                </span>
              )}
             </NavDropdown> */}




      {/*
              
              
              done
              
              isAuth() && (
             <Nav.Link href="/blogs" onClick = {() => signout(()=> Router.replace('/blogs'))}>Signout</Nav.Link>
             )
            
              done
            
            
            */}




    </React.Fragment>



































    // <React.Fragment>
    //   <Navbar color="light" light expand="md">
    //     <Link href="/blogs">
    //     <NavLink className="font-weight-bold" style={{cursor: 'pointer'}}>{APP_NAME}</NavLink>
    //     </Link>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="ml-auto" navbar>

    //      {/* <React.Fragment>
    //           <NavItem>
    //               <Link href="/blogs">
    //                 <NavLink style={{cursor: 'pointer'}}>
    //                   Blogs
    //                 </NavLink>
    //               </Link>
    //         </NavItem>
    //       </React.Fragment> */}
    //       {/* <Dropdown nav isOpen={dropdownOpen} toggle={toggleDrop}>
    //       <DropdownToggle nav caret>
    //         Dropdown
    //       </DropdownToggle>
    //       <DropdownMenu>
    //         <DropdownItem header>Categories</DropdownItem>
    //         <DropdownItem >Action</DropdownItem>
    //         <DropdownItem divider />
    //         <DropdownItem disabled>Tags</DropdownItem>
    //         <DropdownItem>Another Action</DropdownItem>
    //       </DropdownMenu>
    //     </Dropdown> */}
    //         {!isAuth() && <React.Fragment>
    //           <NavItem>
    //               <Link href="/signin">
    //                 <NavLink style={{cursor: 'pointer'}}>
    //                   Sign-in
    //                 </NavLink>
    //               </Link>
    //         </NavItem>
    //         <NavItem>

    //               <Link href="/signup">
    //                 <NavLink style={{cursor: 'pointer'}}>
    //                   Sign-up
    //                 </NavLink>
    //               </Link>

    //         </NavItem>
    //         </React.Fragment>}


    //         {isAuth() && isAuth().role===0 && (
    //           <NavItem>
    //             <NavLink href='/user' style={{cursor: 'pointer'}}>
    //              {`${isAuth().name}'s Dashboard`}
    //             </NavLink>
    //         </NavItem>
    //         )}
    //         {isAuth() && isAuth().role===1 &&(
    //           <NavItem>
    //             <NavLink href='/admin' style={{cursor: 'pointer'}}>
    //              {`Dashboard`}
    //             </NavLink>
    //         </NavItem>
    //         )}
    //         {isAuth() && (<NavItem>
    //             <NavLink style={{cursor: 'pointer'}} onClick = {() => signout(()=> Router.replace('/signin'))}>
    //               Signout
    //             </NavLink>



    //     </NavItem>)}
    //       </Nav>
    //       <NavbarText>The E-Guardians</NavbarText>
    //     </Collapse>
    //   </Navbar>
    //   <Search/>
    // </React.Fragment>


  );
}

export default Header;