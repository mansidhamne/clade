import React from 'react'
import { GoTrash } from "react-icons/go";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { LuUsers, LuMessageSquare, LuEye } from "react-icons/lu";
import { RiUserFollowLine } from "react-icons/ri";
import { title } from 'process';

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-secondary w-full md:w-1/4 md:min-h-screen border-l-2 border-divider p-8 md:p-4 border-b-[1px]'>
        <div className='flex flex-row justify-center items-center gap-4'>
          <button className='flex flex-row items-center justify-center gap-1 rounded-lg bg-[#FEF4F2] border-[1px] border-primary text-primary text-sm w-36 h-10'>
            <GoTrash /> Delete Job
            </button>
          <button className='flex flex-row items-center justify-center gap-1 rounded-lg bg-primary border-[1px] border-[#FED3CA] text-white text-sm w-36 h-10'>
            <MdOutlineModeEditOutline /> Edit Job</button>
        </div>
        <div className="flex flex-col my-4 px-4">
          {sidebar.map((item, index) => (
            <div className='px-2 flex flex-row justify-between items-center border-b-[1px] border-divider py-5'>
              <p className='flex flex-row items-center gap-2 text-sm text-text-primary'>{item.icon} {item.title}</p>
              <p className='font-bold text-base text-text-bold'>{item.count}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Sidebar

const sidebar = [
  {
    title: 'Applicants',
    count: 400,
    icon: <LuUsers size={18}/>
  },
  {
    title: 'Matches',
    count: 100,
    icon: <RiUserFollowLine size={18}/>
  },
  {
    title: 'Messages',
    count: 147,
    icon: <LuMessageSquare size={18}/>
  },
  {
    title: 'Views',
    count: 800,
    icon: <LuEye size={18}/>
  }
]