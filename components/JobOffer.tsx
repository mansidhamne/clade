import React from 'react'
import { GrLocation } from "react-icons/gr";
import { TbCoins } from "react-icons/tb";
import CompanyDetails from './CompanyDetails';

const JobOffer = () => {
  return (
    <div className='bg-white flex flex-col w-full md:w-3/4 py-10'>
        <div className='border-b-[1px] border-divider px-10 md:pl-20 pb-4'>
            <div className='flex flex-col md:flex-row gap-2 md:gap-3 items-center'>
                <h1 className='text-text-bold font-bold text-[32px]'>Senior Product Designer</h1>
                <div className='hidden md:block bg-neutral-gray rounded-xl w-1 h-1 text-neutral-gray'></div>
                <div className='flex flex-row gap-4 md:gap-3'>
                    <p className='text-text-secondary'>posted 2 days ago</p>
                    <div className='flex flex-row items-center gap-1 justify-center rounded-full px-2.5 py-1 bg-[#ECFDF3] border-2 border-[#ABEFC6]'>
                        <div className='w-2 h-2 bg-[#17B26A] rounded-xl'></div>
                        <p className='text-[#067647] text-xs'>Open</p>
                    </div>
                </div>
            </div>
            <div className='py-3 flex flex-row gap-3 text-[#5d5d5d] justify-center md:justify-start'>
                <div className='flex flex-row items-center gap-2'><GrLocation/> Delware, USA</div>
                <div className='bg-neutral-gray rounded-xl mt-2 w-1 h-1 text-neutral-gray'></div>
                <div className='flex flex-row items-center gap-1'><TbCoins/> $300k-$400k</div>
            </div>
        </div>
        <div className='grid grid-cols-2 md:flex md:flex-row border-b-[1px] border-divider px-10 md:px-20 pt-6 pb-7 md:gap-24'>
            <div className='flex flex-col gap-2 mb-6 md:mb-0'>
                <p className='text-sm text-text-headings pb-1'>Skills Required</p>
                <div className='p-1 flex flex-row items-center justify-start pl-1 w-[64px] gap-0.5 text-text-teritary border-[1px] rounded-md border-[#D0D5DD]'>
                    <img src="../figmalogo.png" alt="" className='w-4 h-4'/>
                    <p className='text-xs'>Figma</p>
                </div>
                <div className='p-1 flex flex-row items-center justify-start pl-1 w-32 gap-1 text-text-teritary border-[1px] rounded-md border-[#D0D5DD]'>
                    <img src="../ailogo.png" alt="" className='w-4 h-4'/>
                    <p className='text-xs'>Adobe Illustrator</p>
                </div>
                <div className='p-1 flex flex-row items-center justify-start pl-1 w-[90px] gap-1 text-text-teritary border-[1px] rounded-md border-[#D0D5DD]'>
                    <img src="../adobexdlogo.png" alt="" className='w-4 h-4'/>
                    <p className='text-xs'>Adobe XD</p>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='text-sm text-text-headings pb-2'>Preferred Language</p>
                <h3 className='text-text-bold font-bold text-base'>English</h3>
            </div>
            <div className='flex flex-col'>
                <p className='text-sm text-text-headings pb-2'>Type</p>
                <h3 className='text-text-bold font-bold text-base'>Full Time</h3>
            </div>
            <div className='flex flex-col'>
                <p className='text-sm text-text-headings pb-2'>Years of Experience</p>
                <h3 className='text-text-bold font-bold text-base'>3+ Years of Experience</h3>
            </div>
        </div>
        <div className='flex flex-col px-10 md:pl-20 pt-6 pb-7 leading-7 border-b-[1px] border-divider'>
            <p className='text-text-headings text-base pb-2'>About the job</p>
            <ul className='list-decimal px-4 text-text-bold'>
                <li>Handle the UI/UX research design</li>
                <li>Work on researching on latest web applications designs & trends</li>
                <li>Work on conceptualizing and visualizing</li>
                <li>Work on creating graphics content and other graphic related works</li>
            </ul>
            <p className='text-text-bold'>Benefits:</p>
            <ul className='list-disc px-6'>
                <li>Health insurance</li>
                <li>Provident Fund</li>
            </ul>
            <p className='text-text-bold'>Schedule:</p>
            <ul className='list-disc px-6'>
                <li>Day shift</li>
            </ul>
            <p className='text-text-bold'>Supplemental pay types:</p>
            <ul className='list-disc px-6'>
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
            </ul>
            <p className='text-text-bold'>Work Location: In person</p>
        </div>
        <CompanyDetails />
    </div>
  )
}

export default JobOffer