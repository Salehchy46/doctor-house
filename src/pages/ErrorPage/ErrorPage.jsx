import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    "url(https://www.elegantthemes.com/blog/wp-content/uploads/2020/08/000-http-error-codes.png)",
            }}
        >
            <Helmet>
                <title>Doctors' House | Error Page</title>
            </Helmet>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h2 className="text-4xl text-center font-bold mb-56">The page is not found</h2>
                    <Link to='/' className=''><button className="btn btn-primary mt-44">Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;