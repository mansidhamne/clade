import React from 'react'

const CompanyDetails = () => {
  return (
    <div className='flex flex-col mx-10 md:mx-20 mt-12'>
        <div className='flex flex-row gap-4 items-center'>
            <img src="../user.png" alt="compnay-logo" className='w-10 h-10 rounded-md'/>
            <p className='text-lg text-text-primary'>Atlassian</p>
        </div>
        <div className='mt-8 grid grid-cols-2'>
            <div className='flex flex-col gap-2 pb-6'>
                <p className='text-text-headings text-xs'>Company Size</p>
                <h3 className='text-text-bold'>1k - 2k Employees</h3>
            </div>
            <div className='flex flex-col gap-2 pb-6'>
                <p className='text-text-headings text-xs'>Type</p>
                <h3 className='text-text-bold'>Private</h3>
            </div>
            <div className='flex flex-col gap-2 pb-6'>
                <p className='text-text-headings text-xs'>Sector</p>
                <h3 className='text-text-bold'>Information Technology, Infrastructure</h3>
            </div>
            <div className='flex flex-col gap-2 pb-6'>
                <p className='text-text-headings text-xs'>Funding</p>
                <h3 className='text-text-bold'>Bootstrapped</h3>
            </div>
            <div className='flex flex-col gap-2 pb-6'>
                <p className='text-text-headings text-xs'>Founded In</p>
                <h3 className='text-text-bold'>2019</h3>
            </div>
            <div className='flex flex-col gap-2 pb-6'>
                <p className='text-text-headings text-xs'>Founded By</p>
                <h3 className='text-text-bold'>Scott Farquhar, Mike Cannon-Brookes</h3>
            </div>
        </div>
    </div>
  )
}

export default CompanyDetails