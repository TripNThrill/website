import React, { Fragment, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import data from './joblistassat/data.json';
import JobBoardComponent from './joblistcomp/JobBoardComponent';

function JobList() {

    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState([]);
    useEffect(() => {
        setJobs(data);
    }, []);

    const filterFunc = ({ role, level, tools, languages }) => {
        const tags = [role, level];
        if (languages)
            tags.push(...languages)
        if (tools)
            tags.push(...tools);
        if (filters.length === 0)
            return true;
        return filters.every(filter => tags.includes(filter));
    }
    const handleTagClick = (addtag) => {
        if (filters.includes(addtag)) return;
        setFilters([...filters, addtag]);
    }
    const filteredJobs = jobs.filter(filterFunc);

    const handleFilterClick = (passedFilter) => {
        setFilters(filters.filter(f => f !== passedFilter));
    }
    const clearFilters = () => {
        setFilters([]);
    }

    return (
        <Fragment>
            <header className="bg-[#9083ff] py-4 mb-12">
                <motion.h1
                    key="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="px-40 text-2xl lg:text-3xl text-[#13005A]"
                >
                    START DOING WORK THAT MATTERS
                </motion.h1>
                <motion.p
                    key="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    className="px-40 text-md basiersquare-medium lg:text-xl"
                >
                    Our philosophy is simple — hire a team of diverse, passionate people
                    <br className="hidden lg:flex" />and foster a culture that empowers you to do your best work.
                </motion.p>
            </header>
            <div className="mx-auto w-[80%]">
                {
                    filters.length > 0 &&
                    <div className='flex flex-wrap cursor-pointer align-items-center bg-white shadow-lg  -my-20 mb-10 relative z-10 mx-6 p-6 rounded lg:flex-row '>
                        {
                            filters.map((filter, index) => <span key={index} className=" mr-2  mb-3 pl-3 pr-0 rounded text-teal-500 bg-teal-100 lg:mb-0" >{filter} <span onClick={() => handleFilterClick(filter)} className="text-white rounded py-1 px-2 text-xl self-center font-bold  bg-teal-500">×</span> </span>)
                        }
                        <button onClick={clearFilters} className="ml-auto  text-gray-600">Clear</button>
                    </div>
                }

                {
                    jobs.length === 0 ? <p>Loading...</p> : (
                        filteredJobs.map(job => <JobBoardComponent handleTagClick={handleTagClick} key={job.id} job={job} />)
                    )
                }
            </div>
        </Fragment>
    )
}

export default JobList