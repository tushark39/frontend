import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import '../../static/css/styles.css'
const Card = ({ blog }) => {
    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <span>
                <span style={{ display: i === 0 ? "none" : "", color: "rgba(68,68,68,.3)" }}>•</span>
                <Link key={i} href={`/categories/${c.slug}`}>
                    <a style={{ color: "red" }}> {c.name} </a>
                </Link>
            </span>
        ))

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ))

    return (

        <div className="container" style={{paddingBottom:20}}>
            <div className="row medq">
                <div className="col-md-4 medqimg">
                    <section>
                        <img
                            className="img img-fluid"
                            style={{ height: 200, width: 300 }}
                            src={`${API}/blog/photo/${blog.slug}`}
                            alt={blog.title}
                        />
                    </section>
                </div>
                <div className="col-md-8">
                    <section>
                        {showBlogCategories(blog)}
                        {/**{showBlogTags(blog)}**/}
                        <br />

                    </section>
                    <header>


                        <a className="heading-title-new normal-title h3" href={`/blogs/${blog.slug}`}>{blog.title}</a>


                    </header>
                    <section>
                        <div style={{ color: "rgba(68,68,68,.3)", paddingTop: -5, paddingBottom: 5 }}> 🕐 {moment(blog.updatedAt).fromNow()}&nbsp; 💭 <a href={`/blogs/${blog.slug}`} style={{ color: "rgba(68,68,68,.3)" }} >Add Comment</a></div>

                    </section>

                    <section>
                        <div className="pb-3">{renderHTML(blog.excerpt)}</div>
                        {/**<Link href={`/blogs/${blog.slug}`}>
                       <a className="btn btn-primary pt-2">Read more</a>
                   </Link>**/}
                    </section>
                </div>

            </div>
        </div>

    );

    //     <div className="row mb-3">
    //     {/* style={{width: "50rem"}}>        img: 245X160 or 245X260*/}
    //         <div className="col-md-4">
    //         <Link href={`/blogs/${blog.slug}`}>
    //                 <a>
    //                     <img
    //                         className="card-img-top" 
    //                         src={`${API}/blog/photo/${blog.slug}`} 
    //                         style={{height:201,width:301,display:'block'}} 
    //                         alt={blog.title}
    //                     />
    //                 </a>
    //             </Link>
    //         </div>


    //         <div className="col-md-8 mt-3">
    //         <div className="entry-header">
    //             <span>{showBlogCategories(blog)}</span>
    //             <br/>
    //             <a className="heading-title-new normal-title h2" href={`/blogs/${blog.slug}`}>

    //                     {blog.title}

    //             </a>

    //         </div>
    //         <div style={{color: "rgba(68,68,68,.3)",paddingTop:-5,paddingBottom:10}}> 🕐 {moment(blog.updatedAt).fromNow()}&nbsp; 💭 
    //         <a href={`/blogs/${blog.slug}`} style={{color: "rgba(68,68,68,.3)"}} >Add Comment</a></div>
    //         <div>
    //         <p>{renderHTML(blog.excerpt)}</p>
    //                 {/*<Link href={`/blogs/${blog.slug}`}>
    //                     <a className="btn btn-primary pt-2">Read more</a>
    //                 </Link>*/}
    //         </div>

    //         {/* <div className="pb-2">

    //             {showBlogCategories(blog)}
    //             {showBlogTags(blog)}

    //         </div> */}


    //     </div>
    //     </div>

    // )
}


export default Card;