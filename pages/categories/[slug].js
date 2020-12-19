import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import { singleCatagory } from '../../actions/category';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';

const Category = ({ category, blogs, query }) => {
    try {
        return (
            <React.Fragment>
            <Head>
                <title>{category===undefined ? "Error" :category.name } | {APP_NAME}</title>
                <meta name="description" content={`Daily News Analysis ${category===undefined ? "Error" :category.name }`}/>
                <link rel="canonical" href={`${DOMAIN}/categories/${query===undefined ? "Error" : query.slug}`} />
                <meta property="og:title" content={`${category===undefined ? "Error" :category.name } | ${APP_NAME}`}/>
                <meta property="og:description" content={`Daily News Analysis ${category===undefined ? "Error" :category.name }`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={`${DOMAIN}/categories/${query===undefined ? "Error" : query.slug}`}
                />
                <meta property="og:site_name" content={`${APP_NAME}`}
                />
                <meta property="og:image" content={`${DOMAIN}/static/images/newsapp.jpg`}/>
                <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/newsapp.jpg`}/>
                <meta property="og:image:type" content="image/jpg"/>
                <meta property="fb:app_id" content={`${FB_APP_ID}`}/>
    
            </Head>
                <Layout>
                    <main style={{backgroundColor:"#e2dee2"}}>
                     <div className="container-fluid">
                            <header>
                                <div className="col-md-12 pt-3">
                                    <h1 className="display-4 font-weight-bold text-center">
                                        Category: {category===undefined ? "Error" :category.name }
                                    </h1>
                                    <br/>
                                    <div className="container">
                                    <div className="row">
    
                                        <div className="col-md-12">
                                            <div className="row" >
                                                {blogs===undefined ? "Error" : blogs.map((b, i) => (
                                                    <div>
                                                        <Card key={i} blog={b} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </header>
                        </div>
                    </main>
                </Layout>
            </React.Fragment>
        );
    } catch {
        return <div>We had a Error</div>
    }
};

Category.getInitialProps = ({ query }) => {
    return singleCatagory(query.slug).then(data => {
        try {
            if (data.error) {
                console.log(data.error);
            } else {
                return { category: data.category, blogs: data.blogs, query };
            }
        } catch {
            return "Error"
        }
    });
};

export default Category;