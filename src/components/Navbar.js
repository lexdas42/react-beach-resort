import React, { Component } from 'react';
import {FaAlignRight} from "react-icons/fa"
import {Link} from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false  }
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    render() { 
        return ( <nav className='navbar'>
            <div className="nav-center">
         <div className="nav-header">
        <Link to='/'>
        <h3>home</h3>
        </Link>
        <button
         type="button"
         className="nav-btn"
         onClick={this.handleToggle}>
            <FaAlignRight className="btn-icons"/>
        </button>
         </div>
         <ul className={this.state.isOpen? 'nav-links show-nav': "nav-links"}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/rooms'>rooms</Link>
        </li>
         </ul>
        </div>
           </nav> );
    }
}
 
export default Navbar;