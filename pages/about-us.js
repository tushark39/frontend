import Layout from '../components/Layout';
import { APP_NAME } from '../config';
import Head from 'next/head';
import React from 'react'
const AboutUs = () => (
    <React.Fragment>
    <Head>
   <title>About Us | {APP_NAME}</title>
  </Head>
    <Layout>
        <div style={{minHeight:'35vh'}} className="container">
           <h1>About Us</h1>
            </div>
    </Layout>
    </React.Fragment>
)

export default AboutUs;