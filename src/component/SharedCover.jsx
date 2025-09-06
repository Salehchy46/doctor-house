import React from 'react';

const SharedCover = ({bgImage, heading, subHeading}) => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage:
                    `url(${bgImage})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
                    <p className="mb-5">
                        {subHeading}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SharedCover;