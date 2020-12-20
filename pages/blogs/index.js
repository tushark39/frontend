import Head from 'next/head';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Layout from '../../components/Layout';
import React,{useState} from 'react';
import {listBlogsWithCategoriesAndTags} from '../../actions/blog';
import {APP_NAME,API,DOMAIN,FB_APP_ID} from '../../config';
import Card from '../../components/blog/Card';
import '../../static/css/styles.css'
const Blogs = ({ blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router }) => {
    
    const [limit, setState]= useState(blogsLimit);
    const [skip, setSkip]= useState(0);
    const [size, setSize]= useState(totalBlogs); 
    const [loadedBlogs, setLoadedBlogs]= useState([]); 

    const loadMore = () =>{
        const toSkip = skip + limit;
        listBlogsWithCategoriesAndTags(toSkip, limit).then(data=>{
            if(data.error){
                console.log(data.error);
            }else{
                setLoadedBlogs([...loadedBlogs, ...data.blogs]);
                setSize(data.size);
                setSkip(toSkip);
            }
        });
    };
    const head = () => {
        return(
            
      <Head>
      <title>Daily News Headlines | {APP_NAME}</title>
      
      <meta 
          name="description" 
          content="Daily News headline and daily news hits of politics world people celebrity webseries movies and technology "
          />
      
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta property="og:title" content={`Latest news headline update | ${APP_NAME}`}/>
      <meta 
          property="og:description" 
          content="Daily News headline and daily news hits of politics world people celebrity webseries movies and technology  "
          />
      <meta 
          property="og:type"
          content="website"
      />
      <meta 
          property="og:url"
          content={`${DOMAIN}${router.pathname}`}
      />
      <meta 
          property="og:site_name"
          content={`${APP_NAME}`}
      />
      <meta property="og:image" content={`${DOMAIN}/static/images/newsapp.jpg`}/>
      <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/newsapp.jpg`}/>
      <meta property="og:image:type" content="image/jpg"/>
      <meta property="fb:app_id" content={`${FB_APP_ID}`}/>
      </Head>
        )
    }
    const loadMoreButton = () =>{
        return (
            size > 0 && size >= limit && (
                <button onClick={loadMore} className="btn btn-outline-primary">
                    Load more
                </button>
            )
        )
    }
   
    const showLoadedBlogs = () =>{
        return loadedBlogs.map((blog,i)=>(
            <article key={i}>
                <Card blog={blog}/>
            </article>
        ))
    }

    const showAllBlogs = () => {
        try {
            return blogs.map((blog, i) => {
                // ()
                return (
                    <article key={i}>
                       <Card blog={blog}/>
                    </article>
                );
            });
        } catch  {
            return <div>Error</div>
        }
    };
    const showAllCategories = () =>{
        return categories.map((c, i)=>(
            <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ))
    }
    const showAllTags = () =>{
       try {
        return tags.slice(0,6).reverse().map((t, i)=>(
            <a href={`/tags/${t.slug}`} key={i}>
            <ul style={{listStyleType: "square" }} >
                <li style={{color: "rgba(68,68,68,.3)"}}>
                <a style={{color:"black"}}>{t.name}</a>
                </li>
            </ul>
            </a>
        ))
       } catch {
          return <div>Error</div> 
       }
    }

    return(
    <React.Fragment>
        {head()}
        <Layout>
            <main style={{backgroundColor:"#e2dee2"}}>
                    <div className="container-fluid" >
                        <header>
                            <div className="col-md-12 pt-3">
                               {/* <h1 className="display-4 text-center">Daily News</h1>*/}
                            </div>
                            <section>
                                    <div className="pb-5 text-center">
                                {/**{showAllCategories()}**/}
                                    <br/>
                                   
                                    </div>
                            </section>
                        </header>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-md-1"></div>
                            <div className="col-md-8">
                                <div className="row" > 
                                    {showAllBlogs().length===0 ? (<div>Advertisement</div>) : showAllBlogs()}
                                    {showLoadedBlogs()}
                                </div>
                            </div>
                            <div className="col-md-2">
                            <h5 className="widgets-title text-center" style={{backgroundColor:"#333",color:"#e2dee2",width:150,paddingTop:2,paddingBottom:5}}>Trending tags</h5>
                            <div style={{backgroundColor:"#333",color:"#e2dee2",height:2,marginTop:-20,marginBottom:10}}></div>
                            {showAllTags().length===0 ? (<div>Advertisment</div>) : showAllTags()} 
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                    <div className="container-fluid text-center">{loadMoreButton()}</div>
            </main>
                
        </Layout>
    </React.Fragment>
    )
}
//getInitialProps can only be used on pages not in components

Blogs.getInitialProps = () =>{
    let skip = 0;
    let limit = 6;
    return listBlogsWithCategoriesAndTags(skip,limit).then(data =>{
     try {
        if(data.error){
            console.log(data.error);
        }else{
            return {
                blogs: data.blogs, 
                categories: data.categories, 
                tags: data.tags, 
                totalBlogs: data.size,
                blogsLimit:limit,
                blogSkip:skip
            };
        }
     } catch {
         return <div>Error</div>
     }
    })
}

export default withRouter(Blogs);