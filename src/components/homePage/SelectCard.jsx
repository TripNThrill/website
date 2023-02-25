import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'

const SelectCard = (props) => {
    return (
        <div>
            <div className="overflow-hidden rounded">
                <img className='w-full hover:scale-110 transition-all duration-500 cursor-pointer' src={props.bg} alt='/' />
            </div>
            <div class="flex flex-col py-7 px-4 border-[1px] border-t-0 border-gray-400">
                <div class="flex flex-col items-start">
                    <h3 className="text-blue-900 bold mb-[0.5rem]">{props.text}</h3>
                    <p class="flex items-center p-0 text-gray-400">
                        <FaMapMarkerAlt className="mr-2" color='grey' /><p>{props.state}</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SelectCard;