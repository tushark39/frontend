import Layout from '../components/Layout';
import Head from 'next/head';
import { APP_NAME } from '../config';
import React from 'react'

const PrivacyPolicy = () => (
    <React.Fragment>
    <Head>
   <title>Privacy Policy | {APP_NAME}</title>
  </Head>
    <Layout>
        <div style={{minHeight:'35vh'}} className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                <h1 className="mb-4">Privacy Policy</h1>
                  </div>
            </div>
        </div>
    </Layout>
    </React.Fragment>
)

export default PrivacyPolicy;