import React from 'react';

const SectionTItle = ({title, subTitle}) => {
    return (
        <div className='my-10 mx-auto text-center'>
            <h3 className="text-3xl font-bold mb-6">{title}</h3>
            <p className=''>{subTitle}</p>
        </div>
    );
};

export default SectionTItle;