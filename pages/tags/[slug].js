import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import { singleTag } from '../../actions/tag';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/blog/Card';

const Tag = ({ tag, blogs, query }) => {
    return (
        <React.Fragment>
            <Head>
                <title>{tag.name} | {APP_NAME}</title>
                <meta name="description" content={`Daily News Analysis ${tag.name}`} />
                <link rel="canonical" href={`${DOMAIN}/tags/${query.slug}`} />
                <meta property="og:title" content={`${tag.name} | ${APP_NAME}`} />
                <meta property="og:description" content={`Daily News Analysis ${tag.name}`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${DOMAIN}/tags/${query.slug}`} />
                <meta property="og:site_name" content={`${APP_NAME}`}
                />
                <meta property="og:image" content={`${DOMAIN}/static/images/newsapp.jpg`} />
                <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/newsapp.jpg`} />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="fb:app_id" content={`${FB_APP_ID}`} />

            </Head>
            <Layout>
                <main style={{ backgroundColor: "#e2dee2" }}>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                                {/*Google Analytics */}
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

                                <h1 className="display-4 font-weight-bold text-center">
                                    Tags: {tag.name}
                                </h1>
                                <br />
                                <div className="container">
                                    <div className="row">

                                        <div className="col-md-12">
                                            <div className="row" >
                                                {blogs.map((b, i) => (
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
};

Tag.getInitialProps = ({ query }) => {
    return singleTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { tag: data.tag, blogs: data.blogs, query };
        }
    });
};

export default Tag;