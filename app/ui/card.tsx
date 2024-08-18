'use client'

import useSWR from 'swr';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';



export function Card({userId,id,title,body}:{
    userId:number;
    id:number;
    title:string;
    body:string;
}) {
    

    return (
        <div className=' relative w-60 h-auto bg-yellow-50 shadow-xl rounded-lg   p-2 hover:scale-125'>
            <div className='flex items-center space-x-3 bg-sky-600  shadow-lg rounded-lg p-2'>
                <UserCircleIcon className=' h-10  fill-white hover:fill-yellow-200'/>
                <h1 className=' font-bold justify-center py-2'>User Id: {userId}</h1>
            </div>
            <div className=' bg-slate-200 rounded-lg  font-bold'>Title: {title}</div>
            <p className=' text-sm'> Body: {body}</p>
        </div>
    )
}


