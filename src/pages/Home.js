import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRoom'

const Home = () => {
    return (
    <>
  <Hero >
        <Banner title="Luxury rooms" subtitle="Deluxe rooms starting at $399">
   <Link to='/rooms' className="btn-primary">
       our rooms
   </Link>
        </Banner>
    </Hero>
  <Services />
  <FeaturedRooms />
    </>
    
     );
}
 
export default Home;