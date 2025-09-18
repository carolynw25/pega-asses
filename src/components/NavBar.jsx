import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
/* Icon image impots */
import homeIcon from './images/home.png'
import dashboardIcon from './images/dashboard.png';
import spacesIcon from './images/spaces.png';
import documentsIcon from './images/documents.png';
import bugsIcon from './images/bugs.png';
import goalsIcon from './images/goals.png'
import searchIcon from './images/search.png'
import plusIcon from './images/plus.png'
import xIcon from './images/x.png'
import arrowIcon from './images/arrow-right.png'


function Navbar() {
    const [expanded, setExpanded] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    return (
        <nav className="navbar">
            <div
                className={`bar ${expanded ? 'expanded' : 'collapsed'}`}
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
                onFocus={() => setExpanded(true)}
                onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                    setExpanded(false);
                    }
                 }}
                 aria-expanded={expanded}
            >
            <div className="company">
                <h4> <span>PEGA</span> {expanded && <span className="demo-text"> Demo</span>} </h4>
            </div>
                <ul className="nav-links">
                    <li>
                        <div aria-label="Search bar" className="search-container" tabIndex="0">
                            <img src={searchIcon} alt="Search icon" className="nav-icon-search" />
                            {expanded && 
                                <input type="search" placeholder="Search.." className="search" />
                            }
                        </div>
                    </li>
                    <li>
                        <button aria-label="Dropdown menu to create new item" className="dropbtn" tabIndex="0" onClick={() => setDropdown(prev => !prev)} aria-expanded={dropdown}>
                            <img src={dropdown ? xIcon : plusIcon} alt="Create icon" className="nav-icon" />
                            {expanded && (
                                <>
                                    <span className="name">Create</span>
                                    <img src={arrowIcon} alt="Right Arrow icon" className="nav-icon-create" />
                                </>
                            )}
                        </button>
                        {expanded && dropdown && (
                            <ul className="dropdown-menu">
                            <li><Link to="/bugs"><span className="sublist">Bug</span></Link></li>
                            <li><Link to="/epics" ><span className="sublist">Epic</span></Link></li>
                            <li><Link to="/empty"><span className="sublist">User Story</span></Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/">
                            <img src={homeIcon} alt="Home icon" className="nav-icon" />
                            {expanded && <span className="name">Home</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/empty">
                            <img src={dashboardIcon} alt="Dashboard icon" className="nav-icon" />
                            {expanded && <span className="name">My Dashboard</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/empty">
                            <img src={spacesIcon} alt="Spaces icon" className="nav-icon" />
                            {expanded && <span className="name">Spaces</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/empty">
                            <img src={documentsIcon} alt="Documents icon" className="nav-icon" />
                            {expanded && <span className="name">Document</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/bugs">
                            <img src={bugsIcon} alt="Bugs icon" className="nav-icon" />
                            {expanded && <span className="name">Bugs</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/epics">
                            <img src={spacesIcon} alt="Epics icon" className="nav-icon" />
                            {expanded && <span className="name">Epics</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/empty">
                            <img src={goalsIcon} alt="Goals icon" className="nav-icon" />
                            {expanded && <span className="name">Goals</span>}
                        </Link>
                    </li>
                </ul>
                <ul className="nav-links-bottom">
                    <li>
                        <Link to="/empty">
                            <img src={documentsIcon} alt="Documents icon" className="nav-icon" />
                            {expanded && <span className="name">Notifications</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/bugs">
                            <img src={bugsIcon} alt="Bugs icon" className="nav-icon" />
                            {expanded && <span className="name">Recents</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/epics">
                            <img src={spacesIcon} alt="Epics icon" className="nav-icon" />
                            {expanded && <span className="name">My Application</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/empty">
                            <img src={goalsIcon} alt="Goals icon" className="nav-icon" />
                            {expanded && <span className="name">Cosmos Operator</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;