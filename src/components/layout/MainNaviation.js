import React from "react";
import classes from './MainNavigation.module.css';
import {Route,NavLink} from 'react-router-dom';

function MainNavigation(){
    return (
        <>
            <header className={classes.header}>
                <div className={classes.div}>
                    <nav className={classes.nav}>
                        <ul className={classes.ul}>
                            <li className={classes.li}><NavLink to="/allQuote" activeClassName={classes.active}>All Quote</NavLink></li>
                            <li className={classes.li}><NavLink to="/newQuote" activeClassName={classes.active}>New Quote</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default MainNavigation