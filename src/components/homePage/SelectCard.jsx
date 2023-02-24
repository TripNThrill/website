import React from 'react';
import { FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const SelectCard = (props) => {
    return (
        <div>
            <div className="overflow-hidden rounded">
                <img className='w-full hover:scale-110 transition-all duration-500 cursor-pointer' src={props.bg} alt='/' />
            </div>
            <div class="flex flex-col py-7 px-4 border-[1px] border-t-0 border-gray-400">
                <div class="flex flex-col items-start border-b-[1px] border-gray-400 mb-5">
                    <span className="flex">
                        <FaStar className="text-lg mr-3" color='orange' />
                        <span className="mb-[5px] text-gray-400">8.0 Superb</span>
                    </span>
                    <h3 className="text-blue-900 bold mb-[0.5rem]">{props.text}</h3>
                    <p class="text-[#4cafa4] font-bold text-xl mb-4">5000 Rs.
                        <span className="text-[#99a1a7] text-base font-semibold mb-[5px]">/ Per Person</span>
                    </p>
                </div>
                <div class="place-cap-bottom">
                    <ul className="m-0 p-0 flex">
                        <li className="flex items-center p-0 mr-4 text-gray-400">
                            <FaClock className="mr-2" color='grey' /><p>3 Days</p>
                        </li>
                        <li className="flex items-center p-0 text-gray-400">
                            <FaMapMarkerAlt className="mr-2" color='grey' /><p>{props.state}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SelectCard;