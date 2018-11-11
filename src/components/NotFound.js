import React from 'react';
import {Link} from 'react-router-dom';

const notFound = () => (
    <div>
    404 Error
    <Link to="/">Home</Link>
    </div>
)

export default notFound;