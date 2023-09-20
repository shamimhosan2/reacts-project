import React from 'react';
import "./Header.css"
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        
    <div className='header'> 
     <div  className="container text-center">
        <div className="row">
            <div className="col">
                 <h3>CareerHub</h3>
             </div>
            <div className="col">
                 <Link to="/" >Home</Link>
                  <Link to="/Order" className='Applind'>Applied Jobs</Link>
                 <Link to="/Grandpa" className='Applind'>Blog</Link>
            </div>
             <div className="col">
                 <button type="button" className="btn btn-primary">Star Applying</button>
             </div>
        </div>
      </div>
            
    </div>
        
    );
};

export default Header;