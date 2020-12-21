import Layout from '../components/Layout';
import { APP_NAME } from '../config';
import React from 'react'
import Head from 'next/head';
const ContactUs = () => (
    <React.Fragment>
    <Head>
   <title>Contact Us | {APP_NAME}</title>
  </Head>
        <Layout >
            <div style={{ minHeight: '35vh' }}>
                Contact us via email contactus@nextnewsupdate.com
             </div>
        </Layout>
    </React.Fragment>
)

export default ContactUs;