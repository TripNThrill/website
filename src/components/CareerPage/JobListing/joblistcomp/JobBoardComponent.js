import React, { Fragment } from 'react';

const jobBoardComponent = ({ job: { logo, company, location, postedAt, contract, isNew, position, featured, languages, tools, role, level }, handleTagClick }) => {
    const tags = [role, level];
    if (languages)
        tags.push(...languages)
    if (tools)
        tags.push(...tools)


    return (
        <Fragment>
            <div className={`flex flex-col align-items-center bg-white shadow-lg my-16 mx-6 p-6 rounded ${featured ? 'border-l-4 border-teal-500' : ''} lg:flex-row  lg:my-4 `} >
                <div className="ml-4 flex flex-col flex-wrap justify-between " >
                    <h3 className="font-bold text-[#9083ff]">
                        {company}
                        {isNew && <span className=" m-2  py-1 px-2 font-bold  text-sm  rounded-full text-[#13005A] bg-[#9083ff]">New</span>}
                        {featured && <span className=" m-2  py-1 px-2 font-bold  text-sm  rounded-full text-white bg-black" >Featured</span>}
                    </h3>
                    <h2 className="text-lg font-bold my-2 ">{position}</h2>
                    <p className="text-gray-600">
                        {postedAt} · {contract} ·  {location}
                    </p>
                </div>
                <div className="flex flex-wrap items-center mt-4 mx-4 pt-4 border-t border-solid border-gray-400 lg:ml-auto lg:border-0 lg:pt-0 lg:mt-0 ">
                    {
                        tags && (tags.map((tag, index) => <span key={index} onClick={() => { handleTagClick(tag) }} className="  cursor-pointer py-1 mr-2 mb-4 px-3 rounded text-[#13005A] bg-[#9083ff] lg:mb-0" >{tag}</span>))
                    }
                </div>
            </div>
        </Fragment>
    )
}
export default jobBoardComponent
