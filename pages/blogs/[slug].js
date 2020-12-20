import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import React, { useEffect, useState } from 'react';
import { list, listRelated, singleBlog } from '../../actions/blog';
import { APP_NAME, API, DOMAIN, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import SmallCard from '../../components/blog/SmallCard';
import DisqusThread from '../../components/DisqusThread';
import '../../static/css/styles.css';
import Axios from 'axios';
const SingleBlog = ({ blog, query }) => {
    const [related, setRelated] = useState([]);
    const [recent, setRecent] = useState(undefined)
    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
        Axios.get(`${API}/blogs`)
            .then(res => {
                var post = res.data
                // var post = res.data.slice(res.data.length-4,res.data.length).reverse()
                setRecent(post)
                // console.log(post[0].title);
            })
            .catch(err => console.log(err))
    }, []);
    // console.log(related,'hello')
    //it wii run when the component mounts
    const showRelatedBlog = () => {
        return related.map((blog, i) => (
            <div className="col-md-4" key={i}>
                <article>
                    <SmallCard blog={blog} />
                </article>
            </div>
        ));
    };

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn mr-1 ml-1 mt-3" style={{fontSize:"10px", backgroundColor:"#efe2ba"}}>{c.name}</a>
            </Link>
        ))

    const showBlogTags = (blog) => {
        try {
            return blog.tags.map((t, i) => (
                <Link key={i} href={`/tags/${t.slug}`}>
                    <a className="btn mr-1 ml-1 mt-3" style={{backgroundColor:"#d79922",color:"white"}}>{t.name}</a>
                </Link>
            ))
        } catch {
            return <div>Error</div>
        }
    }
    const showComments = () => (
        <div>
            <DisqusThread id={blog.id} title={blog.title} path={`/blog/${blog.slug}`} />
        </div>
    )

    return <React.Fragment>
        <Head>
            <title>{blog.title} | {APP_NAME}</title>
            <meta name="description" content={blog.mdesc.result} />
            <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
            <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />
            <meta property="og:description" content={blog.mdesc.result} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`}
            />
            <meta property="og:site_name" content={`${APP_NAME}`}
            />
            <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:secure_url" content={`${API}/blog/photo/${blog.slug}`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>
        <Layout >
            <main style={{ backgroundColor: "#e2dee2" }}>
                <article>
                    <div className="row upperRecent " style={{backgroundColor:"#eeeeee",paddingLeft:'270px'}}>
                        <div className="col-md-12">
                            {
                                recent === undefined ? "" : recent.length<5 ? "" : (
                                    recent.reverse().slice(0,5).map(res => {
                                        return (
                                            <div>
                                            <a href={`/blogs/${res.slug}`}><div className="row" style={{float:"left",paddingTop:20}}>
                                            <div className="col-md-3 text-right mt-1">
                                            <img
                                            className=""
                                            style={{ height: 50, width: 50 ,borderRadius:"50%",borderStyle:"solid" }}
                                            src={`${API}/blog/photo/${res.slug}`}
                                            alt={res.title}
                                        />
                                            </div>
                                            <div style={{maxWidth:200 ,fontSize:9}} className="col-md-9 mb-4 text-center">
                                                {res.title}
                                            </div>
                                        </div></a>
                                   
                                            </div>
                                            )
                                    })
                                )
                            }
                        </div>
                    </div>
                    <div className="container-fluid">

                        <section className="mainNewsImage">
                            <div className='row'>
                                <div class="col-sm-9 mt-5">
                                    <div class="content">
                                        <div class=" content-overlay text-center" style={{  }}>
                                        <div class="hero-text" style={{  }}>
                                                {showBlogCategories(blog)} <br/>
                                                <div className="" style={{marginLeft:50,marginRight:50,marginTop:5}}>
                                                <span className="h1" style={{}}>{renderHTML(blog.title)}</span>
                                                </div>                                                
                                                <p><div style={{ color: "#fff", paddingTop: -5, paddingBottom: 5 }}> 🕐 {moment(blog.updatedAt).fromNow()}&nbsp; 📖 <a style={{ color: "#fff" }} >2 Minute Read</a></div>
                                                </p>
                                        </div>
                                        </div>
                                        <img class="content-image" src={`${API}/blog/photo/${blog.slug}`} alt={blog.title} style={{ }} />
                                    </div>
                                </div>
                                <div className="col-sm-3 mt-5 " >
                                    <div className="rec"><h5 className="widgets-title text-center" style={{ backgroundColor: "#333", color: "#e2dee2", paddingTop: 2, paddingBottom: 5 }}>Recent Blogs</h5>
                                        <div style={{ backgroundColor: "#333", color: "#e2dee2", height: 2, marginTop: -20, marginBottom: 10 }}></div>
                                      
                                      {
                                        recent === undefined ? "" : recent.length<5 ? recent.reverse().map(res=>{
                                            return (
                                             <ul style={{ listStyleType: "square" }} >
                                             <li style={{ color: "rgba(68,68,68,.3)" }}>
                                                 <a className="heading-title-new normal-title" href={`/blogs/${res.slug}`}>{res.title}</a>
                                             </li>
                                         </ul> 
                                            )
                                         }) : recent.reverse().slice(0,5).map(i=>{
                                           return (
                                            <ul style={{ listStyleType: "square" }} >
                                            <li style={{ color: "rgba(68,68,68,.3)" }}>
                                                <a className="heading-title-new normal-title" href={`/blogs/${i.slug}`}>{i.title}</a>
                                            </li>
                                        </ul> 
                                           )
                                        }) 
                                      }
                                        {/* <div>
                                            <ul style={{ listStyleType: "square" }} >
                                                <li style={{ color: "rgba(68,68,68,.3)" }}>
                                                    <a className="heading-title-new normal-title" href={`/blogs/${recent === undefined ? "" : recent[0].slug}`}>{recent === undefined ? "" : recent[0].title}</a>
                                                </li>
                                                <li style={{ color: "rgba(68,68,68,.3)" }}>
                                                    <a className="heading-title-new normal-title" href={`/blogs/${recent === undefined ? "" : recent[1].slug}`}>{recent === undefined ? "" : recent[1].title}</a>
                                                </li>
                                                <li style={{ color: "rgba(68,68,68,.3)" }}>
                                                    <a className="heading-title-new normal-title" href={`/blogs/${recent === undefined ? "" : recent[2].slug}`}>{recent === undefined ? "" : recent[2].title}</a>
                                                </li>
                                                <li style={{ color: "rgba(68,68,68,.3)" }}>
                                                <a className="heading-title-new normal-title" href={`/blogs/${recent === undefined ? "" : recent[3].slug}`}>{recent === undefined ? "" : recent[3].title}</a>
                                            </li>
                                            </ul>

                                         </div>*/}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="col"></div>  {/** advertisment */}
                        <div className="container-fluid">
                            <section>
                                {/* <div className="display-3 col-md-12 lead mt-4 text-center">{renderHTML(blog.title)}</div>*/}
                                <div className="col-md-12"></div>  {/** advertisment */}
                                <div className='row'>
                                   { /*div className="col-md-2">
                                        <div className="text-center upperRecent" style={{ marginTop: 20, paddingLeft: 100 }}>
                                            <div>
                                                <a className="heading-title-new normal-title" href="#comments">
                                                    <h2 >💭</h2>
                                                    <span>Add Comment</span>
                                                </a>
                                            </div>
                                            <div style={{ marginTop: 30 }}>
                                                <a className="heading-title-new normal-title" >
                                                    <h2 >🔗</h2>
                                                    <span>Share</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>*/}  {/** advertisment */}
                                    <div className="col-md-2">
                                    <div className="text-center upperRecent" style={{ marginTop: 20, paddingLeft: 100 }}>
                                            <div>
                                                <a className="heading-title-new normal-title" href="#comments">
                                                    <h2 >💭</h2>
                                                    <span>Add Comment</span>
                                                </a>
                                            </div>
                                            <div style={{ marginTop: 30 }}>
                                                <a className="heading-title-new normal-title" >
                                                    <h2 >🔗</h2>
                                                    <span>Share</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-10 mt-4 innerHTMLBody" style={{maxWidth:800}}>{renderHTML(blog.body)}</div>
                                    {/** advertisment */}
                                </div>
                            </section>
                        </div>
                        <section>
                            <div className="col-md-12"></div>  {/** advertisment */}
                            <p className="lead mt-3 mark">
                                Written by {blog.postedBy.name} | Published {moment(blog.updatedAt).fromNow()}
                            </p>
                            <div className="pb-2 text-center">

                                {/**{showBlogCategories(blog)}
                        <br />*/}<div className="btn btn-dark mr-1 ml-1 mt-3">Tags</div>
                                {showBlogTags(blog)}
                            </div>
                        </section>
                        <div className="container pb-5">
                            <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
                            <div className="col-md-12"></div>  {/** advertisment */}
                            <hr />
                            <div className="row">{showRelatedBlog()}</div>
                            <div className="col-md-12"></div>  {/** advertisment */}
                        </div>
                        <div className="container pb-5" id="comments">
                            {showComments()}
                        </div>
                    </div>
                </article>
            </main>
        </Layout>
    </React.Fragment>
}

SingleBlog.getInitialProps = ({ query }) => {
    return singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { blog: data, query };
        }
    })
}

export default SingleBlog;