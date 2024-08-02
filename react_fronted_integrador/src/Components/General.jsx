import React from 'react';
import { Link } from 'react-router-dom';

const General = () => {
    return (
    <div className="General">
        <h1>Traveling Literature</h1>
        <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/reviews">Reviews</Link>
        </nav>
    </div>
    )
}
export default General;
