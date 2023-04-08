import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
return (
// <div>
    // <a href="/">Home</a>
    // <a href="/about">About</a>
    // <a href="/contact">Contact</a>
    // </div>
    //use to to remove load
<div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
</div>
)
}