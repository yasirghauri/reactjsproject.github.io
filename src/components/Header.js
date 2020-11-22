import React,{Component} from "react";
import {Link} from "react-router-dom"; 
class Header extends Component{
    render(){
        return(
            <div>

            <header>
              <div className="container">
                <div className="header d-lg-flex justify-content-between align-items-center">
                  <div className="header-agile">
                    <h1>
                      <Link className="navbar-brand logo" to ="/">
                        <span className="fa fa-scissors" aria-hidden="true" /> Men spa	<span className="fa fa-user-secret" aria-hidden="true" />
                      </Link>
                    </h1>
                  </div>
                  <div className="nav_w3ls">
                    <nav>
                      <label htmlFor="drop" className="toggle mt-lg-0 mt-1"><span className="fa fa-bars" aria-hidden="true" /></label>
                      <input type="checkbox" id="drop" />
                      <ul className="menu">
                        <li className="mr-lg-3 mr-2 active"><Link to="/">Home</Link></li>
                        <li className="mr-lg-3 mr-2"><Link to ="/about">About </Link></li>
                        <li className="mr-lg-3 mr-2 p-0">
                          {/* First Tier Drop Down */}
                          <label htmlFor="drop-2" className="toggle">Dropdown <span className="fa fa-angle-down" aria-hidden="true" /> </label>
                          <a href="#">Dropdown <span className="fa fa-angle-down" aria-hidden="true" /></a>
                          <input type="checkbox" id="drop-2" />
                          <ul className="inner-dropdown">
                            <li><Link to="/services">What We Do</Link></li>
                            <li><Link to="/single">See more</Link></li>
                          </ul>
                        </li>
                        <li className="mr-lg-3 mr-2"><Link to="/gallery">Gallery</Link></li>
                        <li className="mr-lg-3 mr-2"><Link to="contact">Contact Us</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </header>
            </div>
        );
    }
}
export default Header;