import React from 'react'

const Bottom = () => {
  return (
    <div>
      <div className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none md:bg-gray-300  lg:bg-white lg:h-full">
        <div className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 rounded-xl lg:mt-10  lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
          <img
            className="h-64 sm:h-52 sm:w-full sm:object-cover lg:hidden object-center mt-2 rounded-lg shadow-2xl"
            src="https://source.unsplash.com/iUBgeNeyVy8"
            alt="Ad- woman on a beach"
          />
          <h1 className="mt-5 font-bold text-lg lg:mt-7">
            You can now plan your trip's from home!
          </h1>
          <p className="font-bold text-sm text-gray-600">
            Get started today!
          </p>
          <p className="text-sm text-gray-600 text-justify pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <button className="mt-5 bg-gray-600 p-3 shadow-2xl rounded-xl text-white font-bold hover:bg-gray-800">
            Start Exploring!
          </button>
        </div>

        <div className="hidden relative lg:block lg:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-bottom"
            src="https://source.unsplash.com/O453M2Liufs"
            alt="Ad- woman on a beach"
          />
        </div>
      </div>
      <div className='text-center my-24'>
        <h1>Moments shared by some of the Travellers!</h1>
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 p-8">
        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/1" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Bangalore</h1>
              <p className="test__author font-sm font-light">Joe Jackson</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#bangalore</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/2" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Andheri</h1>
              <p className="test__author font-sm font-light">Sharma Ketan</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#andheri</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/3" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Pune</h1>
              <p className="test__author font-sm font-light">Rahul</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#pune</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/4" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Kanyakumari</h1>
              <p className="test__author font-sm font-light">Nema</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#kanyakumari</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/5" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Band Stand</h1>
              <p className="test__author font-sm font-light">Miraj</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#mumbai</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/6" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Jewels</h1>
              <p className="test__author font-sm font-light">James</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#rosevault</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/7" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">New York</h1>
              <p className="test__author font-sm font-light">Jessica</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#newyork</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/8" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Shipwrek</h1>
              <p className="test__author font-sm font-light">Andrew</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#uk</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/9" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Beauty Beach</h1>
              <p className="test__author font-sm font-light">Sumukh</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#bali</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/10" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Taj</h1>
              <p className="test__author font-sm font-light">Aman</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#india</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/11" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Chruchgate</h1>
              <p className="test__author font-sm font-light">Nandan</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#mumbai</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/12" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Beach</h1>
              <p className="test__author font-sm font-light">Neelu</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#beach</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/13" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Sunset - Sunrise</h1>
              <p className="test__author font-sm font-light">Solarpreet</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#sunrise</span>
            </div>
          </div>
        </div>

        <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
          <img className="w-full rounded-md" src="https://source.unsplash.com/random/14" alt="travelers" />
          <div className="test__body absolute inset-0 p-8 text-white flex flex-col">
            <div className="relative">
              {/* <a className="test__link absolute inset-0" target="_blank" href="/"></a> */}
              <h1 className="test__title text-3xl font-bold mb-3">Mount Django</h1>
              <p className="test__author font-sm font-light">Monty</p>
            </div>
            <div className="mt-auto">
              <span className="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#mountains</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Bottom