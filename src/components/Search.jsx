import React from 'react';
import appDesign from '../assets/appDesign.png';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 gap-4 px-4 py-16 '>
      <div className='lg:col-span-3 flex flex-col justify-evenly'>
        <div>
          <h2 className='font-bold text-indigo-900'>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4 text-indigo-600'>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 p-4 border-4 border-indigo-900'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button className='bg-white'>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2 '>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button className='bg-white'>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full flex justify-center">
        <img className='h-full w-full sm:w-1/2 border rounded-3xl	' src={appDesign} alt="/" />
      </div>
    </div>
  );
};

export default Search;
