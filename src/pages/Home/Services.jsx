import React from 'react';
import docimage from '../../assets/images/docimg.jpg'

const Services = () => {
    return (
        <div className='lg:flex my-10 md:flex'>
            <div className='flex-1 m-6'>
                <img src={docimage} className='rounded-2xl' alt="" />
            </div>
            <div className='flex-1  m-6'>
                <h3 className="text-2xl font-bold">Our Services</h3>
                <p className='my-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <div className='invisible md:visible flex justify-between bg-teal-950 border-2 border-teal-700 rounded-2xl'>
                    <p className='p-3 rounded-l-2xl font-black hover:bg-teal-700'>Cavity Protection</p>
                    <p className='p-3 font-black hover:bg-teal-700'>Cavity Observation</p>
                    <p className='p-3 rounded-r-2xl font-black hover:bg-teal-700'>Oral Surgery</p>
                </div>
                <div className='md:hidden flex justify-between bg-teal-950 border-2 border-teal-700 rounded-2xl'>
                    <p className='p-3 rounded-l-2xl font-black hover:bg-teal-700'>Gastrology</p>
                    <p className='p-3 font-black hover:bg-teal-700'>Orthopadic</p>
                </div>
                <img 
                    className='rounded-3xl my-6 w-full h-[335px]' 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGyl8IUm9_yPfzz3cRCxx_IkzUgI22lrn8Q&s" 
                    alt="" />
                <h3 className="text-2xl font-bold">Electro  Gastrology Therapy</h3>
                <p className='mt-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                <p className='mb-6'>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <button className="btn bg-teal-950 hover:bg-teal-700 border-2">All Services</button>
            </div>
            <div className='md:hidden m-6'>
                <img className='rounded-2xl' src="https://www.nimshospital.com/assets/img/departments/GASTROENTEROLOGY.png" alt="" />
                <h3 className="text-2xl font-bold mt-6">Electro  Gastrology Therapy</h3>
                <p className='mt-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
        </div>
    );
};

export default Services;