import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import React,{useState} from 'react';
import {listBlogsWithCategoriesAndTags} from '../../actions/blog';
import {APP_NAME,API,DOMAIN,FB_APP_ID} from '../../config';
import Card from '../../components/blog/Card';
import '../../static/css/styles.css'
const recentBlog = ({ blogs }) => {
    
    // const [limit, setState]= useState(blogsLimit);
    // const [skip, setSkip]= useState(0);
    // const [size, setSize]= useState(totalBlogs); 
    // const [loadedBlogs, setLoadedBlogs]= useState([]); 

    // const loadMore = () =>{
    //     const toSkip = skip + limit;
    //     listBlogsWithCategoriesAndTags(toSkip, limit).then(data=>{
    //         if(data.error){
    //             console.log(data.error);
    //         }else{
    //             setLoadedBlogs([...loadedBlogs, ...data.blogs]);
    //             setSize(data.size);
    //             setSkip(toSkip);
    //         }
    //     });
    // };

   
    
    const showRecentTitle = () =>{
       try {console.log(blogs)
        return blogs.map((t, i)=>(
            
            <a href={`/tags/${t.slug}`} key={i}>
            <ul style={{listStyleType: "square" }} >
                <li style={{color: "rgba(68,68,68,.3)"}}>
                <a style={{color:"black"}}>{t.title}</a>
                </li>
            </ul>
            </a>
        ))
       } catch {
          return <div>Error</div> 
       }
    }

    return(
    <div>
        {showRecentTitle()}
    </div>
    )
}
//getInitialProps can only be used on pages not in components

recentBlog.getInitialProps = () =>{
    return listBlogsWithCategoriesAndTags(0,6).then(data =>{
     try {
        if(data.error){
            console.log(data.error);
        }else{
            console.log(data)
            return {
                blogs: data.blogs
            };
        }
     } catch {
         return <div>Error</div>
     }
    })
}

export default withRouter(recentBlog);