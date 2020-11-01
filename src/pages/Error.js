import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Error = () => {
    return ( <Hero>
        <Banner title="error" subtitle="please go back to home">
            <Link to="/" className="btn-primary">
         return to Home
            </Link>
        </Banner>
    </Hero> );
}
 
export default Error;