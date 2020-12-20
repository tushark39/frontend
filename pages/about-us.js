import Layout from '../components/Layout';
import { APP_NAME } from '../config';

const AboutUs = () => (
    <Layout>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-5" >
                    <h1 className="mt-4"> About Us</h1>
                    <h2 className="mt-5">Overview</h2>
                    {APP_NAME} is one of the most trusted News Media website. 
                    {APP_NAME} is the news source for thousands of daily visitors who are looking for General News,
                     Business updates, Entertainment News. {APP_NAME} also covers news related to tech, gadgets and the online world. 
                     Our Articles range from international news to the latest gadgets to snippets about viral content.

                    <h2 className="mt-2">Who We are?</h2>
                    We have grown into what we are today by excellence in journalistic standards and unwavering support of our readers.
                     The majority of our news is provided by our writers who are all experts in their respective fields. 
                     Other news is provided by news agencies and freelancers. Our main motive is to prove valuable information about Technology, Business, General Affairs, and Entertainment.

                    <h2 className="mt-2">Our Missions</h2>
                    Our mission is to provide our reader and subscribers with the most accurate information at the earliest.
                    We fact check and verify every piece of article that we publish. 
                    And we do a thorough review of all our articles before their publication.

                </div>
            </div>
        </div>
    </Layout>
)

export default AboutUs;