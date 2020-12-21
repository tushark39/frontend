import Layout from '../components/Layout';
import { APP_NAME } from '../config';
const PrivacyPolicy = () => (
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
)

export default PrivacyPolicy;