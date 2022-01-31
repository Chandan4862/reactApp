import React from "react";
import MainNavigation from "./MainNaviation";
import classes from "./Layout.module.css"

function Layout(props){
    return (
        <>
        <MainNavigation></MainNavigation>
        <main className={classes.main}>{props.children}</main>
        </>
    )
}

export default Layout