import React, { Component } from 'react'
import { Link } from "gatsby"
import Logo from "../images/HelloLampPost_black.png"

class nav extends Component {
    render() {
        return (
            <nav>
                <Link className="hlp-logo" to="#">
                    <img src={Logo} alt="Hello Lamp Post"/>
                </Link>
                <div>
                    <ul className="nav-links">
                        <li><Link to="#">Dashboard</Link></li>
                        <li><Link to="#">Calendar</Link></li>
                        <li>Logout</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default nav;
