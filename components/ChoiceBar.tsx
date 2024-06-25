"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const ChoiceBar = () => {
    const pathname = usePathname();
  return (
    <div className='px-6 md:px-20 py-2.5 flex flex-row justify-start border-b-[1px] border-divider'>
        <ul className='flex flex-row list-none gap-6 md:gap-8'>
            <li
            className={`text-sm font-normal  px-3 py-2 ${
                pathname === '/jobs' || pathname === '/' ? 'text-primary font-semibold underline decoration-2 underline-offset-[19px]' : 'text-text-secondary font-normal'
            }`}
            >
                <Link href="/jobs" className="flex flex-row items-center gap-2">
                    Job Preview
                </Link>
            </li>
            <li
            className={`text-sm px-3 py-2 ${
                pathname === '/applicants' ? 'text-primary font-semibold underline' : 'text-text-secondary font-normal'
            }`}
            >
                <Link href="/applicants" className="flex flex-row items-center gap-2">
                    Applicants
                </Link>
            </li>
            <li
            className={`text-sm px-3 py-2 ${
                pathname === '/match' ? 'text-primary font-semibold underline' : 'text-text-secondary font-normal'
            }`}
            >
                <Link href="/match" className="flex flex-row items-center gap-2">
                    Match
                </Link>
            </li>
            <li
            className={`text-sm px-3 py-2 ${
                pathname === '/messages' ? 'text-primary font-semibold underline' : 'text-text-secondary font-normal'
            }`}
            >
                <Link href="/messages" className="flex flex-row items-center gap-2">
                    Messages
                </Link>
            </li>
        </ul>

    </div>
  )
}

export default ChoiceBar