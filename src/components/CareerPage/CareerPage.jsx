import React from 'react'
import Benifits from './Benifits'
import CareerAbout from './CareerAbout'
import Careers from './Careers'
// import CIntro from './CIntro'
import JobList from './JobListing/JobList'

function CareerPage() {
    return (
        <div>
            <Careers />
            <CareerAbout />
            {/* <CIntro /> */}
            <Benifits />
            <JobList />
        </div>
    )
}

export default CareerPage
