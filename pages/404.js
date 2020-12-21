import Head from 'next/head';
import React from 'react'
import Layout from '../components/Layout';
import { APP_NAME } from '../config';
const PrivacyPolicy = () => (
   <React.Fragment>
   <Head>
   <title>404 Page | {APP_NAME}</title>
  </Head>
  <Layout>
  <div style={{minHeight:'35vh'}} className="container">

      <div className="row">
          <div className="col-md-12 mt-5">
          <h1 className="mb-4">Wow you Landed on our Secret Page!!</h1>
            </div>
          {<div>Advertisment</div>}
      </div>
  </div>
</Layout>
   </React.Fragment>
)

export default PrivacyPolicy;