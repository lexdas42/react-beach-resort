import React from 'react';
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'

class Services extends React.Component {
    state = { services: [
        {
            icon: <FaCocktail />,
            title: "free cocktail",
            info: 'lorem is jdjbdsnfnnnew  vhbvbvbu8br8vb8 jbfbjvbjbv jbfvbfvbbfv fjvb'
            
        },
        {
            icon: <FaHiking />,
            title: "our hikinjg",
            info: 'lorem is jdjbdsnfnnnew  vhbvbvbu8br8vb8 jbfbjvbjbv jbfvbfvbbfv fjvb'
            
        },
        {
            icon: <FaShuttleVan />,
            title: "free shuttle",
            info: 'lorem is jdjbdsnfnnnew  vhbvbvbu8br8vb8 jbfbjvbjbv jbfvbfvbbfv fjvb'
            
        },
        {
            icon: <FaBeer />,
            title: "strongest Beer",
            info: 'lorem is jdjbdsnfnnnew  vhbvbvbu8br8vb8 jbfbjvbjbv jbfvbfvbbfv fjvb'
            
        }
    ]
};

       render() {
           return(<section className="services">
               <Title title="Services" />
               <div className="services-center">
                 {this.state.services.map((item, index) => {
                     return (
                         <article key={index} className='service'>
                             <span>{item.icon}</span>
                     <h6>{item.title}</h6>
                     <p>{item.info}</p>
                         </article>
                     )
                 })}  
               </div>
           </section>)
       }
}
 
export default Services;