import React from 'react'
import Benifits from './Benifits'
import Careers from './Careers'
import CIntro from './CIntro'
import JobList from './JobListing/JobList'

function CareerPage() {
    return (
        <div>
            <Careers />
            <CIntro />
            <Benifits />
            <JobList />
        </div>
    )
}

export default CareerPage
