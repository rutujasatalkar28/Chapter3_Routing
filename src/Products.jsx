import React from 'react';
import { Link,Outlet } from 'react-router-dom';

function Products(props) {
    return (
        <div>
            <h1>All product page</h1>
            <Link to="/products/All">All</Link>
            <br />
            <Link to="/products/Men">Men</Link>
            <br />
            <Link to="/products/Women">Women</Link>
            <Outlet/>
        </div>
    );
}

function All(props) {
    return (
        <div>
            <h2>All products</h2>
        </div>
    )
}
function Men(props) {
    return (
        <div>
            <h2>Men products</h2>
        </div>
    )
}
function Women(props) {
    return (
        <div>
            <h2>Women products</h2>
        </div>
    )
}
export {Products,All,Men,Women };