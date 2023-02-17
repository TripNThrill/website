import React from 'react';

const SelectCard = (props) => {
    return (
        <div className='relative hover:scale-110 transition-all duration-500 cursor-pointer'>
            <img className='w-full h-full object-cover rounded-3xl' src={props.bg} alt='/' />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full rounded-3xl'>
                <p className='left-4 bottom-4 text-2xl font-bold text-white absolute bg-transparent'>
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export default SelectCard;